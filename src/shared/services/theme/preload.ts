import { contextBridge, ipcRenderer } from 'electron'
import { IThemeService, ThemeServiceIPC } from './types'

declare global {
  interface Window {
    themeService: IThemeService
  }
}

contextBridge.exposeInMainWorld('themeService', {
  toggleTheme: async (): Promise<void> => {
    return await ipcRenderer.invoke(ThemeServiceIPC.ToggleTheme)
  }
})
