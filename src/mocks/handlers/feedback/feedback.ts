import { http, HttpResponse } from 'msw'
import feedbackListMockData from './mocks/feedbackListMockData'
import { userFeedbackMockData } from './mocks/userFeedbackMockData'

const feedbackHandlers = [
  http.get('/api/v1/feedback', () => {
    return HttpResponse.json(feedbackListMockData)
  }),

  http.get('/feedback/profile', () => {
    return HttpResponse.json(userFeedbackMockData)
  }),
]

export default feedbackHandlers
