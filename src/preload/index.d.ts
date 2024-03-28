import { ElectronAPI } from '@electron-toolkit/preload'
import { IThemeService } from 'src/shared/services/theme/types'

declare global {
  interface Window {
    electron: ElectronAPI
    themeService: IThemeService
  }
}
