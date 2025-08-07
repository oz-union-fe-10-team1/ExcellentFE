import {
  googleMockUser,
  kakaoMockUser,
  naverMockUser,
} from '@/mocks/handlers/auth/authMockData'
import {
  type RefreshTokenRequest,
  type SocialCallbackRequest,
} from '@/types/auth'
import { http, HttpResponse } from 'msw'

const mockUsers = {
  kakao: kakaoMockUser,
  naver: naverMockUser,
  google: googleMockUser,
} as const

export const authHandlers = [
  http.post('/auth/login/:provider', async ({ params, request }) => {
    const { provider } = params
    const body = (await request.json()) as SocialCallbackRequest
    const { code, state } = body

    if (!code || !state) {
      return HttpResponse.json(
        { detail: `유효하지 않는 ${provider} 인증 코드입니다.` },
        { status: 400 }
      )
    }

    const user = mockUsers[provider as keyof typeof mockUsers]

    if (!user) {
      return HttpResponse.json({ detail: 'Invalid provider' }, { status: 400 })
    }

    return HttpResponse.json(user, { status: 200 })
  }),

  http.post('/auth/refresh', async ({ request }) => {
    const body = (await request.json()) as RefreshTokenRequest
    const { refresh_token } = body

    if (!refresh_token) {
      return HttpResponse.json(
        { detail: 'Refresh token is required' },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      { access_token: 'mock_access_token' },
      { status: 200 }
    )
  }),
]

export default authHandlers
