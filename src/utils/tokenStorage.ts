const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'

interface TokenStorage {
  getAccessToken: () => string | null
  setAccessToken: (accessToken: string) => void
  removeAccessToken: () => void
  getRefreshToken: () => string | null
  setRefreshToken: (refreshToken: string) => void
  removeRefreshToken: () => void
}

export const tokenStorage: TokenStorage = {
  getAccessToken: () => localStorage.getItem(ACCESS_TOKEN),
  setAccessToken: (accessToken) =>
    localStorage.setItem(ACCESS_TOKEN, accessToken),
  removeAccessToken: () => localStorage.removeItem(ACCESS_TOKEN),

  getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN),
  setRefreshToken: (refreshToken) =>
    localStorage.setItem(REFRESH_TOKEN, refreshToken),
  removeRefreshToken: () => localStorage.removeItem(REFRESH_TOKEN),
}
