import { http, HttpResponse } from 'msw'
import feedbackListMockData from './mocks/feedbackListMockData'
import { userFeedbackMockData } from './mocks/userFeedbackMockData'

export interface Feedback {
  id: number
  product_id: string
  order_item_id: number
  rating: number
  confidence: number
  comment: string
  created_at: string
}

const feedbackHandlers = [
  http.get('/api/v1/feedback', () => {
    return HttpResponse.json(feedbackListMockData)
  }),

  http.get('/feedback/profile', () => {
    return HttpResponse.json(userFeedbackMockData)
  }),
]

export default feedbackHandlers
