import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface FeedbackType {
  order_item_id: number
  sweetness: number[]
  acidity: number[]
  body: number[]
  confidence: number[]
  overall_rating: number
  photo_url?: string
  comment: string
  files: FileList | null
}

const useSubmitFeedback = () => {
  return useMutation({
    mutationFn: async (data: FeedbackType) => {
      const formData = new FormData()

      if (data.files) {
        Array.from(data.files).forEach((file) => formData.append('files', file))
      }

      formData.append('order_item_id', String(data.order_item_id))
      formData.append('sweetness', String(data.sweetness))
      formData.append('acidity', String(data.acidity))
      formData.append('body', String(data.body))
      formData.append('confidence', String(data.confidence))
      formData.append('overall_rating', String(data.overall_rating))
      formData.append('comment', data.comment)

      const res = await axios.post('/api/v1/feedbacks/', formData)
      return res.data
    },
  })
}

export default useSubmitFeedback
