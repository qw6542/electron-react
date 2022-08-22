// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('Api', {
  query: async (channel, args) => {
    const validApiChannels = [
      'DB',
    ];
    if (validApiChannels.includes(channel)) {
      return ipcRenderer.invoke(channel, args);
    }
  },
});
