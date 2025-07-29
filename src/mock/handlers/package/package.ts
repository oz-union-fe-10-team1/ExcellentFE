import { http, HttpResponse } from 'msw'

const packageHandlers = [
  http.get('/api/v1/package', () => {
    return HttpResponse.json()
  }),
]

export default packageHandlers
