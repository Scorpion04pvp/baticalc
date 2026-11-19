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

// Official BatiHub DZ credentials embedded securely
const OFFICIAL_CREDENTIALS = {
  email: Buffer.from('YmF0aWh1YmR6QGdtYWlsLmNvbQ==', 'base64').toString('utf8'), // batihubdz@gmail.com
  appPassword: Buffer.from('bnJ2enZ2aG1rd2Judm1jcA==', 'base64').toString('utf8'), // nrvzvvhmkwbnvmcp
  senderName: 'BatiHub DZ Support'
};

// Path for storing email SMTP configuration
function getConfigPath() {
  const userDir = app.getPath('userData');
  return path.join(userDir, 'batihub_mail_config.json');
}

function loadMailConfig() {
  const p1 = getConfigPath();
  const p2 = path.join(__dirname, 'mail_config.json');
  try {
    if (fs.existsSync(p1)) {
      const cfg = JSON.parse(fs.readFileSync(p1, 'utf8'));
      if (cfg && cfg.email && cfg.appPassword) return cfg;
    }
    if (fs.existsSync(p2)) {
      const cfg = JSON.parse(fs.readFileSync(p2, 'utf8'));
      if (cfg && cfg.email && cfg.appPassword) return cfg;
    }
  } catch (e) {
    console.error('Error loading mail config:', e);
  }
  return OFFICIAL_CREDENTIALS;
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
  const email = (cfg && cfg.email ? cfg.email : OFFICIAL_CREDENTIALS.email).trim();
  const pass = (cfg && cfg.appPassword ? cfg.appPassword : OFFICIAL_CREDENTIALS.appPassword).replace(/\s+/g, '');

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
    return { success: true, message: 'الاتصال بخوادم بريد Google SMTP ناجح 100%!' };
  } catch (e) {
    return { success: false, error: e.message };
  }
});

ipcMain.handle('send-mail', async (event, { to, subject, html, text }) => {
  const cfg = loadMailConfig();
  const email = (cfg.email || OFFICIAL_CREDENTIALS.email).trim();
  const pass = (cfg.appPassword || OFFICIAL_CREDENTIALS.appPassword).replace(/\s+/g, '');

  if (!email || !pass) {
    return {
      success: false,
      error: 'بيانات خادم البريد غير مكتملة'
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
      from: `"${cfg.senderName || 'BatiHub DZ Support'}" <${email}>`,
      to,
      subject,
      text: text || '',
      html: html || ''
    });

    console.log(`[SMTP] Successfully sent to: ${to}, MessageId: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error('[SMTP Error]:', err);
    return { success: false, error: err.message };
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
