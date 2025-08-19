export const SOCIAL_PROVIDERS = ['kakao', 'naver', 'google'] as const
export type SocialProvider = (typeof SOCIAL_PROVIDERS)[number]

export interface SocialLoginRequest {
  code: string
  state?: string
}

export interface SocialLoginTempToken {
  success: boolean
  status: string
  temp_token: string
  message: string
}

export interface SocialLoginUser {
  success: boolean
  access: string
  refresh: string
  user_info: {
    nickname: string
    email: string | null
    role: string
    created_at: string
  }
  auth_type: string
}

export interface RefreshTokenResponse {
  access: string
  refresh: string
}
