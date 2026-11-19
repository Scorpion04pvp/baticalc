const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

let mainWindow;

// Set realistic Chrome User-Agent to prevent Google OAuth "disallowed_useragent" block
app.userAgentFallback = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1380,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    title: 'BatiHub DZ - Build • Connect • Create',
    icon: path.join(__dirname, 'assets', 'batihub_logo.ico'),
    backgroundColor: '#07090f',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile('index.html');

  // Handle external auth or links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    // If it is Google OAuth or accounts, allow it to open or handle via shell
    if (url.includes('accounts.google.com')) {
      return { action: 'allow' };
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
