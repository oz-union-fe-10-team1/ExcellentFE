import { API_PATHS } from '@/constants/apiPaths'
import { type SocialCallbackRequest, type SocialProvider } from '@/types/auth'
import { axiosInstance } from '@/utils/axios'
import axios from 'axios'

export const authState = async (state: string) => {
  return await axiosInstance.post(API_PATHS.AUTH.STATE, { state })
}

export const socialLogin = async (
  provider: SocialProvider,
  payload: SocialCallbackRequest
) => {
  const { data } = await axiosInstance.post(
    API_PATHS.AUTH.LOGIN(provider),
    payload
  )
  return data
}

// 토큰 갱신 (axios interceptor 무한 루프 방지를 위해 기본 axios 사용)
export const refreshAccessToken = async (refreshToken: string) => {
  const { data } = await axios.post(API_PATHS.AUTH.REFRESH, {
    refresh_token: refreshToken,
  })
  return data
}
