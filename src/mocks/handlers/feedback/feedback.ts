import { http, HttpResponse } from 'msw'
import feedbackListMockData from './mocks/feedbackListMockData'

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

  http.post('/api/v1/feedbacks/', async ({ request }) => {
    try {
      const formData = await request.formData()

      const order_item_id = Number(formData.get('order_item_id'))
      const sweetness = Number(formData.get('sweetness'))
      const acidity = Number(formData.get('acidity'))
      const body = Number(formData.get('body'))
      const confidence = Number(formData.get('confidence'))
      const overall_rating = Number(formData.get('overall_rating'))
      const taste_tag = formData.get('taste_tag') as string
      const comment = formData.get('comment') as string
      const files = formData.getAll('files')

      return HttpResponse.json(
        {
          order_item_id,
          sweetness,
          acidity,
          body,
          confidence,
          overall_rating,
          taste_tag,
          comment,
          files: files.length > 0 ? files : null,
        },
        {
          status: 201,
        }
      )
    } catch {
      return HttpResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      )
    }
  }),
]

export default feedbackHandlers
