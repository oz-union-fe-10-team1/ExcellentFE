import {
  googleMockUser,
  kakaoMockUser,
  naverMockUser,
} from '@/mocks/handlers/auth/authMockData'
import {
  type RefreshTokenRequest,
  type SocialCallbackRequest,
  type StateRequest,
} from '@/types/auth'
import { http, HttpResponse } from 'msw'

const mockUsers = {
  kakao: kakaoMockUser,
  naver: naverMockUser,
  google: googleMockUser,
} as const

export const authHandlers = [
  http.post('/auth/state', async ({ request }) => {
    const { state } = (await request.json()) as StateRequest

    if (!state)
      return HttpResponse.json({ detail: 'state is required' }, { status: 400 })

    return HttpResponse.json({ status: 200 })
  }),

  http.post('/auth/login/:provider', async ({ params, request }) => {
    const { provider } = params
    const { code, state } = (await request.json()) as SocialCallbackRequest

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
    const { refresh_token } = (await request.json()) as RefreshTokenRequest

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
