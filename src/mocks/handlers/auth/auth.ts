import { http, HttpResponse } from 'msw'
import { googleMockUser } from './mocks'

export const authHandlers = [
  http.post('/auth/login/google', async ({ request }) => {
    // const {} = await request.json()
    return HttpResponse.json(googleMockUser)
  }),
]
