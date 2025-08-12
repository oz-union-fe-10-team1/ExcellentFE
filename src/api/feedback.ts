import { API_PATHS } from '@/constants/apiPaths'
import type { FeedbackProfile } from '@/types/feedback'
import { axiosInstance } from '@/utils/axios'

export const getFeedbackProfile = async (): Promise<FeedbackProfile> => {
  const { data } = await axiosInstance.get(API_PATHS.FEEDBACK.PROFILE)
  return data
}
