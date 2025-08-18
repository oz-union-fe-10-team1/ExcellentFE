import { http, HttpResponse } from 'msw'
import historyMockData from './mocks/historyMockData'
import { orderMockData } from './mocks/orderMockData'

export interface updateQuantityType {
  item_id: number
  quantity: number
}

const itemRowHandlers = [
  http.get('*/api/v1/feedbacks', () => {
    return HttpResponse.json(historyMockData)
  }),
  http.put('*/api/v1/cart/update-item', async ({ request }) => {
    const body = (await request.json()) as updateQuantityType

    return HttpResponse.json({
      success: true,
      item_id: body.item_id,
      quantity: body.quantity,
    })
  }),
  http.get('*/orders/list/', () => {
    return HttpResponse.json(orderMockData)
  }),
]

export default itemRowHandlers
