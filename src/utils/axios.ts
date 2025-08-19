import { authApi } from '@/api/auth'
import { BASE_URL } from '@/constants/apiPaths'
import { tokenStorage } from '@/utils/tokenStorage'
import axios, { AxiosError, AxiosHeaders, type AxiosRequestConfig } from 'axios'

interface FailedRequest {
  resolve: (value: unknown) => void
  reject: (error: AxiosError) => void
  originalRequest: AxiosRequestConfig & { _retry?: boolean }
}

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
  const access = tokenStorage.getAccessToken()
  if (access) {
    ;(config.headers as AxiosHeaders).set('Authorization', `Bearer ${access}`)
  }
  return config
})

// 동시 요청 처리 변수
let isRefreshing = false // tokenRefresh API 호출 중인지 체크
let failedQueue: FailedRequest[] = []

const processQueue = (error: AxiosError | null, access: string | null) => {
  failedQueue.forEach(({ resolve, reject, originalRequest }) => {
    if (error) {
      reject(error)
    } else if (access) {
      ;(originalRequest.headers as AxiosHeaders).set(
        'Authorization',
        `Bearer ${access}`
      )
      resolve(axiosInstance(originalRequest))
    }
  })
  failedQueue = []
}

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refresh = tokenStorage.getRefreshToken()

      if (!refresh) {
        onUnauthorized?.()
        return Promise.reject(error)
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, originalRequest })
        })
      }

      isRefreshing = true

      try {
        const { access: newAccess, refresh: newRefresh } =
          await authApi.refreshToken(refresh)
        tokenStorage.setAccessToken(newAccess)
        tokenStorage.setRefreshToken(newRefresh)

        processQueue(null, newAccess)
        ;(originalRequest.headers as AxiosHeaders).set(
          'Authorization',
          `Bearer ${newAccess}`
        )
        return axiosInstance(originalRequest)
      } catch (error) {
        processQueue(error as AxiosError, null)
        tokenStorage.removeAccessToken()
        tokenStorage.removeRefreshToken()
        onUnauthorized?.()
        return Promise.reject(error)
      } finally {
        isRefreshing = false
      }
    }
    return Promise.reject(error)
  }
)
