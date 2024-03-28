interface Service {
  dispose?(): void
}

export enum ThemeServiceIPC {
  ToggleTheme = 'service:theme:toggle-theme',
  SetTheme = 'service:theme:set-theme'
}

export type ActiveTheme = 'system' | 'light' | 'dark'

export interface IThemeService extends Service {
  theme: string
  toggleTheme(): Promise<void>
  setTheme(theme: ActiveTheme): Promise<void>
}
