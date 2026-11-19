const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronMailAPI', {
  sendMail: (options) => ipcRenderer.invoke('send-mail', options),
  getMailConfig: () => ipcRenderer.invoke('get-mail-config'),
  saveMailConfig: (config) => ipcRenderer.invoke('save-mail-config', config),
  testMailConnection: (config) => ipcRenderer.invoke('test-mail-connection', config)
});
