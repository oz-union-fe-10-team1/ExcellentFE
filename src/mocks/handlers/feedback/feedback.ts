import { http, HttpResponse } from 'msw'
import feedbackListMockData from './mocks/feedbackListMockData'

export interface Feedback {
  id: number
  user: string
  order_item_id: number
  sweetness: number
  acidity: number
  body: number
  confidence: number
  overall_rating: number
  photo_url: string | null
  comment: string
  created_at: string
  updated_at: string
}

const feedbackHandlers = [
  http.get('/api/v1/feedbacks/', () => {
    return HttpResponse.json(feedbackListMockData)
  }),

  http.get('/feedback/profile', () => {
    return HttpResponse.json(userFeedbackMockData)
  }),
]

export default feedbackHandlers
