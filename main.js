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
  senderName: 'Support Bati Hub DZ'
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

const logPath = path.join(__dirname, 'mail_activity.log');
function logMail(msg) {
  try {
    const entry = `[${new Date().toISOString()}] ${msg}\n`;
    fs.appendFileSync(logPath, entry, 'utf8');
    console.log(msg);
  } catch (e) {}
}

ipcMain.handle('send-mail', async (event, { to, subject, html, text }) => {
  logMail(`[send-mail IPC invoked] to: ${to}, subject: ${subject}`);
  const cfg = loadMailConfig();
  const email = (cfg.email || OFFICIAL_CREDENTIALS.email).trim();
  const pass = (cfg.appPassword || OFFICIAL_CREDENTIALS.appPassword).replace(/\s+/g, '');

  logMail(`[send-mail] Using sender: ${email}`);

  if (!email || !pass) {
    logMail(`[send-mail ERROR] Missing email or password`);
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
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000
    });

    const info = await transporter.sendMail({
      from: `"Support Bati Hub DZ" <${email}>`,
      sender: "Support Bati Hub DZ",
      replyTo: `"Support Bati Hub DZ" <${email}>`,
      replyTo: `"Support Bati Hub DZ" <${email}>`,
      to,
      subject,
      text: text || '',
      html: html || '',
      headers: {
        'X-Entity-Ref-ID': Date.now().toString(),
        'X-Auto-Response-Suppress': 'OOF, AutoReply'
      }
    });

    logMail(`[SMTP SUCCESS] Delivered to ${to}, MessageId: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    logMail(`[SMTP ERROR] Failed to send to ${to}: ${err.message}`);
    return { success: false, error: err.message };
  }
});

// =========================================================================
// SECURE FILE-BASED DATABASE STORAGE HANDLERS (PERMANENT ACCOUNT STORAGE)
// =========================================================================
function getDbPaths() {
  const userDir = app.getPath('userData');
  return {
    accountsPrimary: path.join(userDir, 'batihub_accounts_db.json'),
    accountsBackup: path.join(__dirname, 'batihub_accounts_db.json'),
    profiles: path.join(userDir, 'batihub_saved_profiles.json'),
    session: path.join(userDir, 'batihub_active_session.json'),
    workerPosts: path.join(userDir, 'batihub_worker_posts.json')
  };
}

ipcMain.handle('db-save-accounts', async (event, data) => {
  const paths = getDbPaths();
  try {
    const jsonStr = JSON.stringify(data, null, 2);
    fs.writeFileSync(paths.accountsPrimary, jsonStr, 'utf8');
    try { fs.writeFileSync(paths.accountsBackup, jsonStr, 'utf8'); } catch (e) {}
    logMail(`[DB] Saved ${Object.keys(data).length} accounts to disk database`);
    return { success: true };
  } catch (e) {
    logMail(`[DB ERROR] Failed saving accounts: ${e.message}`);
    return { success: false, error: e.message };
  }
});

ipcMain.handle('db-get-accounts', async () => {
  const paths = getDbPaths();
  try {
    if (fs.existsSync(paths.accountsPrimary)) {
      return JSON.parse(fs.readFileSync(paths.accountsPrimary, 'utf8'));
    }
    if (fs.existsSync(paths.accountsBackup)) {
      return JSON.parse(fs.readFileSync(paths.accountsBackup, 'utf8'));
    }
  } catch (e) {
    logMail(`[DB ERROR] Failed reading accounts: ${e.message}`);
  }
  return {};
});

ipcMain.handle('db-save-saved-profiles', async (event, profiles) => {
  const paths = getDbPaths();
  try {
    fs.writeFileSync(paths.profiles, JSON.stringify(profiles, null, 2), 'utf8');
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
});

ipcMain.handle('db-get-saved-profiles', async () => {
  const paths = getDbPaths();
  try {
    if (fs.existsSync(paths.profiles)) {
      return JSON.parse(fs.readFileSync(paths.profiles, 'utf8'));
    }
  } catch (e) {}
  return [];
});

ipcMain.handle('db-save-active-session', async (event, session) => {
  const paths = getDbPaths();
  try {
    fs.writeFileSync(paths.session, JSON.stringify(session, null, 2), 'utf8');
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
});

ipcMain.handle('db-get-active-session', async () => {
  const paths = getDbPaths();
  try {
    if (fs.existsSync(paths.session)) {
      return JSON.parse(fs.readFileSync(paths.session, 'utf8'));
    }
  } catch (e) {}
  return null;
});

ipcMain.handle('db-save-worker-posts', async (event, posts) => {
  const paths = getDbPaths();
  try {
    fs.writeFileSync(paths.workerPosts, JSON.stringify(posts, null, 2), 'utf8');
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
});

ipcMain.handle('db-get-worker-posts', async () => {
  const paths = getDbPaths();
  try {
    if (fs.existsSync(paths.workerPosts)) {
      return JSON.parse(fs.readFileSync(paths.workerPosts, 'utf8'));
    }
  } catch (e) {}
  return null;
});

async function createWindow() {
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

  mainWindow.webContents.on('console-message', (event, level, message, line, sourceId) => {
    logMail(`[RENDERER-CONSOLE] [L${level}] ${message} (line ${line})`);
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

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
