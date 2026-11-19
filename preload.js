const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronMailAPI', {
  sendMail: (options) => ipcRenderer.invoke('send-mail', options),
  getMailConfig: () => ipcRenderer.invoke('get-mail-config'),
  saveMailConfig: (config) => ipcRenderer.invoke('save-mail-config', config),
  testMailConnection: (config) => ipcRenderer.invoke('test-mail-connection', config)
});

contextBridge.exposeInMainWorld('electronDB', {
  getAccounts: () => ipcRenderer.invoke('db-get-accounts'),
  saveAccounts: (data) => ipcRenderer.invoke('db-save-accounts', data),
  getSavedProfiles: () => ipcRenderer.invoke('db-get-saved-profiles'),
  saveSavedProfiles: (profiles) => ipcRenderer.invoke('db-save-saved-profiles', profiles),
  getActiveSession: () => ipcRenderer.invoke('db-get-active-session'),
  saveActiveSession: (session) => ipcRenderer.invoke('db-save-active-session', session),
  getWorkerPosts: () => ipcRenderer.invoke('db-get-worker-posts'),
  saveWorkerPosts: (posts) => ipcRenderer.invoke('db-save-worker-posts', posts)
});
