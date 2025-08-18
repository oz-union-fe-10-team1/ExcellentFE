export const SOCIAL_PROVIDERS = ['kakao', 'naver', 'google'] as const
export type SocialProvider = (typeof SOCIAL_PROVIDERS)[number]

export interface SocialLoginRequest {
  code: string
  state?: string
}

export interface SocialLoginResponse {
  access_token: string
  refresh_token: string
  user: {
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
