const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
let nodemailer = null;
try {
  nodemailer = require('nodemailer');
} catch (e) {
  console.warn('nodemailer not loaded, running in simulated mail mode');
}

let mainWindow;

// Set realistic Chrome User-Agent to prevent Google OAuth "disallowed_useragent" block
app.userAgentFallback = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

// Path for storing email SMTP configuration
function getConfigPath() {
  const userDir = app.getPath('userData');
  return path.join(userDir, 'batihub_mail_config.json');
}

function loadMailConfig() {
  try {
    const p = getConfigPath();
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, 'utf8'));
    }
  } catch (e) {
    console.error('Error loading mail config:', e);
  }
  return {
    email: '',
    appPassword: '', // 16-character Google App Password
    senderName: 'BatiHub DZ Support'
  };
}

function saveMailConfig(cfg) {
  try {
    const p = getConfigPath();
    fs.writeFileSync(p, JSON.stringify(cfg, null, 2), 'utf8');
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// IPC Handlers for Mail Services
ipcMain.handle('get-mail-config', async () => {
  return loadMailConfig();
});

ipcMain.handle('save-mail-config', async (event, cfg) => {
  return saveMailConfig(cfg);
});

ipcMain.handle('test-mail-connection', async (event, cfg) => {
  const email = (cfg.email || '').trim();
  const pass = (cfg.appPassword || '').replace(/\s+/g, '');

  if (!email || !pass) {
    return { success: false, error: 'يرجى إدخال عنوان Gmail وكلمة مرور التطبيق (16 حرفاً)' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: email,
        pass: pass
      }
    });
    await transporter.verify();
    return { success: true, message: 'الاتصال بحساب Gmail عبر SMTP ناجح 100%!' };
  } catch (e) {
    return { success: false, error: e.message };
  }
});

ipcMain.handle('send-mail', async (event, { to, subject, html, text }) => {
  const cfg = loadMailConfig();
  const email = (cfg.email || '').trim();
  const pass = (cfg.appPassword || '').replace(/\s+/g, '');

  // If no Gmail App Password configured yet, return simulated flag with instructions
  if (!email || !pass) {
    return {
      success: false,
      simulated: true,
      message: 'لم يتم إدخال إعدادات الربط بـ Gmail (كلمة مرور التطبيقات App Password) بعد. يتم عرض الرمز في الواجهة للمعاينة.'
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: pass
      }
    });

    const info = await transporter.sendMail({
      from: `"${cfg.senderName || 'BatiHub DZ'}" <${email}>`,
      to,
      subject,
      text: text || '',
      html: html || ''
    });

    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error('Mail sending error:', err);
    return { success: false, error: err.message, simulated: true };
  }
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 920,
    minWidth: 1024,
    minHeight: 700,
    title: 'BatiHub DZ - Build • Connect • Create',
    icon: path.join(__dirname, 'assets', 'batihub_logo.ico'),
    backgroundColor: '#07090f',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile('index.html');

  // Handle external auth or links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.includes('accounts.google.com') || url.includes('myaccount.google.com')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    if (url.startsWith('http:') || url.startsWith('https:')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
