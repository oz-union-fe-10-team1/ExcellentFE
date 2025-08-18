import type { FeedbackRequest } from '@/api/feedback/types'
import { API_PATHS } from '@/constants/apiPaths'
import { axiosInstance } from '@/utils/axios'

export const feedbackApi = {
  submit: async (data: FeedbackRequest) => {
    const formData = new FormData()

    if (data.files && data.files.length > 0) {
      const filesArray = Array.isArray(data.files)
        ? data.files
        : Array.from(data.files)
      filesArray.forEach((file) => {
        formData.append('files', file)
      })
    }

    formData.set('order_item', String(data.order_item_id))
    formData.set('rating', String(Math.round(data.overall_rating)))
    formData.set('sweetness', String(data.sweetness))
    formData.set('acidity', String(data.acidity))
    formData.set('body', String(data.body))
    formData.set('carbonation', String(data.carbonation))
    formData.set('bitterness', String(data.bitter))
    formData.set('aroma', String(data.aroma))
    formData.set('confidence', String(Math.round(data.confidence)))
    formData.set('comment', data.comment ?? '')

    if (data.taste_tag && data.taste_tag.length > 0) {
      data.taste_tag.forEach((tag, index) => {
        formData.append(`selected_tags[${index}]`, tag)
      })
    }

    const res = await axiosInstance.post(API_PATHS.FEEDBACK.SUBMIT, formData)
    return res.data
  },
}
