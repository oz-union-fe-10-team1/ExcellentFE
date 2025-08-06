import { API_PATH } from '@/constants/api'
import { axiosInstance } from '@/utils/axios'

export const socialLogin = async (provider: string) => {
  const res = await axiosInstance.post(API_PATH.AUTH.LOGIN + provider)
  console.log(res)
}
