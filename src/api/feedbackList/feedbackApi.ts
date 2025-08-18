import { axiosInstance } from '@/utils/axios'
import type { FeedbackResponse } from './types'
import { API_PATHS } from '@/constants/apiPaths'

export async function fetchFeedbackByType(
  type: 'popular' | 'recent' | 'personalized'
): Promise<FeedbackResponse> {
  let url = ''
  switch (type) {
    case 'popular':
      url = API_PATHS.FEEDBACK.POPULAR
      break
    case 'recent':
      url = API_PATHS.FEEDBACK.RECENT
      break
    case 'personalized':
      url = API_PATHS.FEEDBACK.PERSONALIZED
      break
  }

  const res = await axiosInstance.get<FeedbackResponse>(url)
  return res.data
}
