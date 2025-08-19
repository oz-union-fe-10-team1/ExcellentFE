import type { FeedbackRequest } from '@/api/feedback/types'
import { API_PATHS } from '@/constants/apiPaths'
import { axiosInstance } from '@/utils/axios'

const createFormDataFromFeedback = (data: FeedbackRequest): FormData => {
  const formData = new FormData()

  const fields = {
    order_item: String(data.order_item_id),
    rating: String(Math.round(data.overall_rating)),
    sweetness: String(data.sweetness),
    acidity: String(data.acidity),
    body: String(data.body),
    carbonation: String(data.carbonation),
    bitterness: String(data.bitter),
    aroma: String(data.aroma),
    confidence: String(Math.round(data.confidence)),
    comment: data.comment ?? '',
  }

  Object.entries(fields).forEach(([key, value]) => {
    formData.set(key, value)
  })

  if (data.files?.length) {
    Array.from(data.files).forEach((file) => {
      formData.append('image', file)
    })
  }

  // 태그 추가
  if (data.taste_tag?.length) {
    data.taste_tag.forEach((tag, index) => {
      formData.append(`selected_tags[${index}]`, tag)
    })
  }

  return formData
}

export const feedbackApi = {
  submit: async (data: FeedbackRequest) => {
    const formData = createFormDataFromFeedback(data)

    const response = await axiosInstance.post(
      API_PATHS.FEEDBACK.SUBMIT,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )

    return response.data
  },

  tastingHistory: async () => {
    const { data } = await axiosInstance.get(API_PATHS.FEEDBACK.TASTING_HISTORY)
    return data
  },
}

export const feedbackApiSimple = {
  submit: async (data: FeedbackRequest) => {
    const formData = createFormDataFromFeedback(data)
    const { data: responseData } = await axiosInstance.post(
      API_PATHS.FEEDBACK.SUBMIT,
      formData
    )
    return responseData
  },

  tastingHistory: async () => {
    const { data } = await axiosInstance.get(API_PATHS.FEEDBACK.TASTING_HISTORY)
    return data
  },
}
