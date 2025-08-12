import { API_PATHS } from '@/constants/apiPaths'
import type { FeedbackRequest } from './types'
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

    formData.set('order_item_id', String(data.order_item_id))
    formData.set('sweetness', String(data.sweetness))
    formData.set('acidity', String(data.acidity))
    formData.set('body', String(data.body))
    formData.set('confidence', String(data.confidence))
    formData.set('overall_rating', String(data.overall_rating))
    /* TODO: 서버 상태에 따라서 수정해야 함 */
    formData.set('taste_tag', (data.taste_tag ?? []).join(','))
    formData.set('comment', data.comment ?? '')

    const res = await axiosInstance.post(API_PATHS.FEEDBACK.SUBMIT, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return res.data
  },
}
