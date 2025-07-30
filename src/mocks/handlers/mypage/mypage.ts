import { http, HttpResponse } from 'msw'
import TasteProfileMockData from './mocks/tasteProfileMockData'

const mypageHandlers = [
  http.get('/api/v1/mypage/taste-profile', () => {
    return HttpResponse.json(TasteProfileMockData)
  }),
]

export default mypageHandlers
