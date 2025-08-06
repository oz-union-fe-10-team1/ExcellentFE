export const SOCIAL_PROVIDERS = ['kakao', 'naver', 'google'] as const
export type SocialProvider = (typeof SOCIAL_PROVIDERS)[number]

type SocialLoginConfig = {
  clientId: string
  redirectUri: string
  scope?: string
  loginUrl: string
}

export const SOCIAL_LOGIN: Record<SocialProvider, SocialLoginConfig> = {
  kakao: {
    clientId: import.meta.env.VITE_KAKAO_CLIENT_ID,
    redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
    get loginUrl() {
      const baseUrl = 'https://kauth.kakao.com/oauth/authorize'
      const params = new URLSearchParams({
        response_type: 'code',
        client_id: this.clientId,
        redirect_uri: this.redirectUri,
      })
      return `${baseUrl}?${params.toString()}`
    },
  },
  naver: {
    clientId: import.meta.env.VITE_NAVER_CLIENT_ID,
    redirectUri: import.meta.env.VITE_NAVER_REDIRECT_URI,
    get loginUrl() {
      const baseUrl = 'https://nid.naver.com/oauth2.0/authorize'
      const params = new URLSearchParams({
        response_type: 'code',
        client_id: this.clientId,
        redirect_uri: this.redirectUri,
      })
      return `${baseUrl}?${params.toString()}`
    },
  },
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirectUri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
    get loginUrl() {
      const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
      const params = new URLSearchParams({
        response_type: 'code',
        client_id: this.clientId,
        redirect_uri: this.redirectUri,
      })
      return `${baseUrl}?${params.toString()}`
    },
  },
} as const
