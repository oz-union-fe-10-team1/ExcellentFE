export const tokenStorage = {
  getTempToken: () => sessionStorage.getItem('temp_token'),
  setTempToken: (value: string) => sessionStorage.setItem('temp_token', value),
  removeTempToken: () => sessionStorage.removeItem('temp_token'),

  getAccessToken: () => localStorage.getItem('access_token'),
  setAccessToken: (value: string) =>
    localStorage.setItem('access_token', value),
  removeAccessToken: () => localStorage.removeItem('access_token'),

  getRefreshToken: () => localStorage.getItem('refresh_token'),
  setRefreshToken: (value: string) =>
    localStorage.setItem('refresh_token', value),
  removeRefreshToken: () => localStorage.removeItem('refresh_token'),
}
