import { API_PATHS } from '@/constants/apiPaths'
import { axiosInstance } from '@/utils/axios'

export const getUser = async () => {
  const { data } = await axiosInstance.get(API_PATHS.USER)
  return data
}
