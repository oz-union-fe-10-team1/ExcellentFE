import { API_PATHS } from '@/constants/apiPaths'
import { axiosInstance } from '@/utils/axios'
import type { OrderType } from '@/types/orderType'

export const orderApi = {
  list: async (): Promise<OrderType[]> => {
    const response = await axiosInstance.get(API_PATHS.ORDER.LIST)
    return response.data
  },
}
