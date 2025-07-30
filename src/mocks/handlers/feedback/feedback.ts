import { http, HttpResponse } from 'msw'

export interface Feedback {
  id: number
  product_id: string
  order_item_id: number
  rating: number
  confidence: number
  comment: string
  created_at: string
}

interface FeedbackRequestBody {
  product_id: string
  order_item_id: number
  rating: number
  confidence: number
  comment: string
}

const feedbackListMockData: Feedback[] = [
  {
    id: 1,
    product_id: 'abc',
    order_item_id: 123,
    rating: 4,
    confidence: 85,
    comment: '달콤하고 맛있어요!',
    created_at: '2024-01-01T12:00:00Z',
  },
]

let nextFeedbackId = feedbackListMockData.length + 1

const feedbackHandlers = [
  http.get('/api/v1/feedback', () => {
    return HttpResponse.json(feedbackListMockData)
  }),

  http.post('/api/v1/feedbacks', async ({ request }) => {
    const body = (await request.json()) as FeedbackRequestBody

    if (!body.product_id || !body.rating || !body.comment) {
      return HttpResponse.json({ message: '필수 항목 누락' }, { status: 400 })
    }

    const newFeedback: Feedback = {
      id: nextFeedbackId++,
      product_id: body.product_id,
      order_item_id: body.order_item_id,
      rating: body.rating,
      confidence: body.confidence,
      comment: body.comment,
      created_at: new Date().toISOString(),
    }

    /* 새로운 피드백 추가 */
    feedbackListMockData.push(newFeedback)
    console.log('현재 피드백 목록:', feedbackListMockData)

    return HttpResponse.json(
      {
        message: '리뷰가 등록되었습니다.',
        feedback: newFeedback,
      },
      { status: 201 }
    )
  }),
]

export default feedbackHandlers
