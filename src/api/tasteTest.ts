import { API_PATHS } from '@/constants/apiPaths'
import type { TasteTestProfile } from '@/types/tasteTypes'
import { axiosInstance } from '@/utils/axios'

export const getTasteTestProfile = async (): Promise<TasteTestProfile> => {
  const { data } = await axiosInstance.get(API_PATHS.TASTE_TEST.PROFILE)
  return data
}
