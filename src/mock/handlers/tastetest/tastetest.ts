import { http, HttpResponse } from 'msw'

const tastetestHandlers = [
  http.get('/api/v1/taste-test/questions', () => {
    return HttpResponse.json()
  }),
]

export default tastetestHandlers
