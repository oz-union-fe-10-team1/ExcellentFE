export const SOCIAL_PROVIDERS = ['kakao', 'naver', 'google'] as const
export type SocialProvider = (typeof SOCIAL_PROVIDERS)[number]

export interface SocialLoginRequest {
  code: string
  state?: string
}

export interface SocialLoginTempToken {
  temp_token: string
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
}

export interface RefreshTokenResponse {
  access: string
  refresh: string
}
