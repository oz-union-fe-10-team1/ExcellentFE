import { refreshAccessToken } from '@/api/auth'
import { BASE_URL } from '@/constants/apiPaths'
import { tokenStorage } from '@/utils/tokenStorage'
import axios from 'axios'

let onUnauthorized: (() => void) | undefined = undefined

export const setOnUnauthorized = (callback: () => void) => {
  onUnauthorized = callback
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = tokenStorage.getAccessToken()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = tokenStorage.getRefreshToken()

      if (!refreshToken) {
        onUnauthorized?.()
        console.error('Refresh token not found in storage')
        return Promise.reject(error)
      }

      try {
        const response = await refreshAccessToken(refreshToken)

        const { access_token } = response.data
        tokenStorage.setAccessToken(access_token)

        originalRequest.headers.Authorization = `Bearer ${access_token}`
        return axiosInstance(originalRequest)
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError)
        tokenStorage.removeAccessToken()
        tokenStorage.removeRefreshToken()
        onUnauthorized?.()
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)
