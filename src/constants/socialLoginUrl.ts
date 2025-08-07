import { type SocialProvider } from '@/types/auth'

interface SocialLoginConfig {
  clientId: string
  redirectUri: string
  scope: string
  getLoginUrl: (state: string) => string
}

export const SOCIAL_LOGIN: Record<SocialProvider, SocialLoginConfig> = {
  kakao: {
    clientId: import.meta.env.VITE_KAKAO_CLIENT_ID,
    redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
    scope: 'profile_nickname',
    getLoginUrl(state: string) {
      const baseUrl = 'https://kauth.kakao.com/oauth/authorize'
      const params = new URLSearchParams({
        response_type: 'code',
        client_id: this.clientId,
        redirect_uri: this.redirectUri,
        scope: this.scope,
        state,
      })
      return `${baseUrl}?${params.toString()}`
    },
  },
  naver: {
    clientId: import.meta.env.VITE_NAVER_CLIENT_ID,
    redirectUri: import.meta.env.VITE_NAVER_REDIRECT_URI,
    scope: 'name email gender birthday birthyear',
    getLoginUrl(state: string) {
      const baseUrl = 'https://nid.naver.com/oauth2.0/authorize'
      const params = new URLSearchParams({
        response_type: 'code',
        client_id: this.clientId,
        redirect_uri: this.redirectUri,
        state,
      })
      return `${baseUrl}?${params.toString()}`
    },
  },
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirectUri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
    scope: 'email profile openid',
    getLoginUrl(state: string) {
      const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
      const params = new URLSearchParams({
        response_type: 'code',
        client_id: this.clientId,
        redirect_uri: this.redirectUri,
        scope: this.scope,
        state,
      })
      return `${baseUrl}?${params.toString()}`
    },
  },
} as const
