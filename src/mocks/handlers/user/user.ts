import { http, HttpResponse } from 'msw'
import userMockData from '@/mocks/handlers/user/userMockData'

const userHandlers = [
  http.get('/user', () => {
    return HttpResponse.json(userMockData)
  }),
]

export default userHandlers
