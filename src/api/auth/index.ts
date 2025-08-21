import { API_PATHS, BASE_URL } from '@/constants/apiPaths'
import {
  type RefreshTokenResponse,
  type SocialLoginRequest,
  type SocialLoginTempToken,
  type SocialLoginUser,
  type SocialProvider,
} from '@/types/auth'
import { axiosInstance } from '@/utils/axios'
import axios from 'axios'

const HEADERS = { headers: { 'Content-Type': 'application/json' } }

export const authApi = {
  state: async (state: string) => {
    const { data } = await axiosInstance.post(API_PATHS.AUTH.STATE, { state })
    return data
  },

  socialLogin: async (
    provider: SocialProvider,
    payload: SocialLoginRequest
  ): Promise<SocialLoginTempToken | SocialLoginUser> => {
    const { data } = await axiosInstance.post(
      API_PATHS.AUTH.LOGIN(provider),
      payload
    )
    return data
  },

  // 토큰 갱신 (axios interceptor 무한 루프 방지를 위해 기본 axios 사용)
  refreshToken: async (refreshToken: string): Promise<RefreshTokenResponse> => {
    const { data } = await axios.post(
      BASE_URL + API_PATHS.AUTH.TOKEN_REFRESH,
      { refresh: refreshToken },
      HEADERS
    )
    return data
  },

  adultAuthToken: async (code: string) => {
    const { data } = await axios.post(
      API_PATHS.AUTH.ADULT_AUTH_TOKEN,
      { code },
      HEADERS
    )
    return data
  },

  adultAuthUser: async (accessToken: string) => {
    const { data } = await axios.post(
      API_PATHS.AUTH.ADULT_AUTH_USER,
      { access_token: accessToken },
      HEADERS
    )
    return data
  },

  adultAuthComplete: async (tempToken: string): Promise<SocialLoginUser> => {
    const { data } = await axiosInstance.post(
      API_PATHS.AUTH.ADULT_AUTH_COMPLETE,
      { temp_token: tempToken }
    )
    return data
  },
}
