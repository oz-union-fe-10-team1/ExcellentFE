import { type RefreshTokenRequest, type StateRequest } from '@/types/auth'
import { http, HttpResponse } from 'msw'

export const authHandlers = [
  http.post('/auth/state', async ({ request }) => {
    const { state } = (await request.json()) as StateRequest

    if (!state)
      return HttpResponse.json({ detail: 'state is required' }, { status: 400 })

    return HttpResponse.json({ status: 200 })
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
