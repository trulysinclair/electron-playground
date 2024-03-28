import { ipcMain, nativeTheme } from 'electron'
import { ActiveTheme, IThemeService, ThemeServiceIPC } from './types'

export class ThemeMainService implements IThemeService {
  theme: ActiveTheme

  constructor() {
    this.theme = nativeTheme.shouldUseDarkColors ? 'dark' : 'light'

    this.#registerListeners()
  }

  #registerListeners(): void {
    ipcMain.handle(ThemeServiceIPC.ToggleTheme, async () => {
      this.toggleTheme()
    })
  }

  public async toggleTheme(): Promise<void> {
    this.theme = this.theme === 'light' ? 'dark' : 'light'

    console.log(`toggleTheme ${this.theme}`)
    nativeTheme.themeSource = this.theme
  }

  public async setTheme(theme: ActiveTheme): Promise<void> {
    this.theme = theme

    console.log(`setTheme ${theme}`)

    nativeTheme.themeSource = theme
  }
}
