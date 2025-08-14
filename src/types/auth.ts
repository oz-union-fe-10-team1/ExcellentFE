export const SOCIAL_PROVIDERS = ['kakao', 'naver', 'google'] as const
export type SocialProvider = (typeof SOCIAL_PROVIDERS)[number]

export interface StateRequest {
  state: string
}

export interface SocialCallbackRequest {
  code: string
  state?: string
}

export interface SocialCallbackResponse {
  access_token: string
  refresh_token: string
}

export interface RefreshTokenRequest {
  refresh_token: string
}
