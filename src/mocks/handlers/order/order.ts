import { http, HttpResponse } from 'msw'

const orderHandlers = [
  http.get('/api/v1/orders/list', () => {
    return HttpResponse.json()
  }),
]

export default orderHandlers
