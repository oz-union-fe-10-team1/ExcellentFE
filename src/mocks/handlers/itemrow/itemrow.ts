import { http, HttpResponse } from 'msw'
import CartMockData from './mocks/cartMockData'

export interface updateQuantityType {
  item_id: number
  quantity: number
}

const itemRowHandlers = [
  http.get('/api/v1/cart', () => {
    return HttpResponse.json(CartMockData)
  }),
  http.put('/api/v1/cart/update-item', async ({ request }) => {
    const body = (await request.json()) as updateQuantityType

    return HttpResponse.json({
      success: true,
      item_id: body.item_id,
      quantity: body.quantity,
    })
  }),
]

export default itemRowHandlers
