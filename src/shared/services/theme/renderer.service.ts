import { ipcRenderer } from 'electron'
import { ActiveTheme, IThemeService } from './types'

export class ThemeRendererService implements IThemeService {
  theme: string = document.documentElement.getAttribute('data-theme') || 'system'

  constructor() {
    this.#registerListeners()
  }

  public async toggleTheme(): Promise<void> {
    console.log('service:theme:toggle-theme')

    return await ipcRenderer.invoke('service:theme:toggle-theme')
  }

  public async setTheme(theme: ActiveTheme): Promise<void> {
    console.log('service:theme:set-theme', theme)

    return await ipcRenderer.invoke('service:theme:set-theme', theme)
  }

  #registerListeners(): void {
    ipcRenderer.on('service:theme:theme-changed', (_, theme) => {
      console.log('service:theme:theme-changed', theme)
      document.documentElement.setAttribute('data-theme', theme)
    })
  }
}
