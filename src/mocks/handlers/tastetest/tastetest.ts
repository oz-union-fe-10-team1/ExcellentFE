import { http, HttpResponse } from 'msw'
import testQuestion from './mocks/testQuestion'

const tasteTestHandlers = [
  // 테스트 질문 조회
  http.get('/api/v1/taste-test/questions', () => {
    return HttpResponse.json(testQuestion)
  }),

  // 추후 POST 핸들러도 추가 가능
]

export default tasteTestHandlers
