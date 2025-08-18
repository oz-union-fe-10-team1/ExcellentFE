import { API_PATHS } from '@/constants/apiPaths'
import type { FeedbackProfile } from '@/types/feedback'
import type { UserProfile } from '@/types/user'
import { axiosInstance } from '@/utils/axios'

export const userApi = {
  getProfile: async (): Promise<UserProfile> => {
    const { data } = await axiosInstance.get(API_PATHS.USER.PROFILE)
    return data
  },

  getTasteProfile: async (): Promise<FeedbackProfile> => {
    const { data } = await axiosInstance.get(API_PATHS.USER.TASTE_PROFILE)
    return data
  },
}
