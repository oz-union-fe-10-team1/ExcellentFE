import { http, HttpResponse } from 'msw'

const recommendationHandlers = [
  http.get('/api/v1/recommendation', () => {
    return HttpResponse.json()
  }),
]

export default recommendationHandlers
