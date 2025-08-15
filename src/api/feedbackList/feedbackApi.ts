import { axiosInstance } from '@/utils/axios'
import type { FeedbackResponse } from './types'
import { API_PATHS } from '@/constants/apiPaths'

export async function fetchFeedbackList(): Promise<FeedbackResponse> {
  const res = await axiosInstance.get(API_PATHS.FEEDBACK.LIST)
  return res.data
}
