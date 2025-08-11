import axios from 'axios'
import type { FeedbackRequest } from './types'

export const feedbackApi = {
  submit: async (data: FeedbackRequest) => {
    const formData = new FormData()

    if (data.files) {
      Array.from(data.files).forEach((file) => {
        formData.append('files', file)
      })
    }

    formData.append('order_item_id', String(data.order_item_id))
    formData.append('sweetness', String(data.sweetness))
    formData.append('acidity', String(data.acidity))
    formData.append('body', String(data.body))
    formData.append('confidence', String(data.confidence))
    formData.append('overall_rating', String(data.overall_rating))
    formData.append('taste_tag', (data.taste_tag ?? []).join(','))
    formData.append('comment', data.comment ?? '')

    const res = await axios.post('/api/v1/feedbacks/', formData)
    return res.data
  },
}
