import type { FeedbackRequest } from '@/api/feedback/types'
import { API_PATHS } from '@/constants/apiPaths'
import type { FeedbackProfile } from '@/types/feedback'
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

    formData.set('order_item', String(Number(data.order_item_id)))
    formData.set('rating', String(Number(data.overall_rating)))
    formData.set('sweetness', String(data.sweetness))
    formData.set('acidity', String(data.acidity))
    formData.set('body', String(data.body))
    formData.set('carbonation', String(data.carbonation))
    formData.set('bitterness', String(data.bitter))
    formData.set('aroma', String(data.aroma))
    formData.set('confidence', String(Number(data.confidence)))
    formData.set('comment', data.comment ?? '')
    formData.set('selected_tags', (data.taste_tag ?? []).join(','))

    const res = await axiosInstance.post(API_PATHS.FEEDBACK.SUBMIT, formData)
    return res.data
  },

  getProfile: async (): Promise<FeedbackProfile> => {
    const { data } = await axiosInstance.get(API_PATHS.FEEDBACK.PROFILE)
    return data
  },
}
