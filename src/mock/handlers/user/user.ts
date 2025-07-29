import { http, HttpResponse } from 'msw'

const userHandlers = [
  http.get('/api/v1/user', () => {
    return HttpResponse.json()
  }),
]

export default userHandlers
