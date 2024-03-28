import { IThemeService } from './types'

export const useThemeService = (): IThemeService => {
  return window.themeService
}
