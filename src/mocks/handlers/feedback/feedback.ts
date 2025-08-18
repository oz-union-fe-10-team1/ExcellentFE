import { http, HttpResponse } from 'msw'
import feedbackListMockData from './mocks/feedbackListMockData'

export interface Feedback {
  id: number
  user_id: string
  product_id: string
  order_item_id: number
  rating: number
  confidence: number
  comment: string
  created_at: string
  product?: {
    main_image_url: string
    name: string
  }
}

const feedbackHandlers = [
  http.get('/api/v1/feedback/all', () => {
    return HttpResponse.json(feedbackListMockData)
  }),
]

export default feedbackHandlers
