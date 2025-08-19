import { API_PATHS } from '@/constants/apiPaths'
import type { TasteProfile } from '@/types/feedback'
import type { TasteTestProfile } from '@/types/tasteTypes'
import type { UserProfile } from '@/types/user'
import { axiosInstance } from '@/utils/axios'

export const userApi = {
  getProfile: async (): Promise<UserProfile> => {
    const { data } = await axiosInstance.get(API_PATHS.USER.PROFILE)
    return data
  },

  // updateProfile: async (data: ): Promise<UserProfile> => {
  //   const { data } = await axiosInstance.patch(API_PATHS.USER.PROFILE, {data})
  //   return data
  // },

  deleteProfile: async (): Promise<UserProfile> => {
    const { data } = await axiosInstance.delete(API_PATHS.USER.DELETE)
    return data
  },

  getTasteTestProfile: async (): Promise<TasteTestProfile> => {
    const { data } = await axiosInstance.get(API_PATHS.USER.TASTE_TEST_PROFILE)
    return data
  },

  getTasteProfile: async (): Promise<TasteProfile> => {
    const { data } = await axiosInstance.get(API_PATHS.USER.TASTE_PROFILE)
    return data
  },

  getFeedbacks: async () => {
    const { data } = await axiosInstance.get(API_PATHS.USER.FEEDBACKS)
    return data
  },
}
