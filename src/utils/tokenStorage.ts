import { TOKEN_KEYS } from '@/constants/token'

export const tokenStorage = {
  getAccessToken: () => localStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN),
  setAccessToken: (accessToken: string) =>
    localStorage.setItem(TOKEN_KEYS.ACCESS_TOKEN, accessToken),
  removeAccessToken: () => localStorage.removeItem(TOKEN_KEYS.ACCESS_TOKEN),

  getRefreshToken: () => localStorage.getItem(TOKEN_KEYS.REFRESH_TOKEN),
  setRefreshToken: (refreshToken: string) =>
    localStorage.setItem(TOKEN_KEYS.REFRESH_TOKEN, refreshToken),
  removeRefreshToken: () => localStorage.removeItem(TOKEN_KEYS.REFRESH_TOKEN),
}
