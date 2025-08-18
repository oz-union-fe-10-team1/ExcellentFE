import { API_PATHS } from '@/constants/apiPaths'
import { axiosInstance } from '@/utils/axios'
import type { OrderType } from '@/types/orderType'

export const orderApi = {
  list: async (): Promise<OrderType[]> => {
    const response = await axiosInstance.get(API_PATHS.ORDER.LIST)
    return response.data
  },
  CREATE_FROM_CART: async (itemIds: number[]) => {
    const response = await axiosInstance.post(
      API_PATHS.ORDER.CREATE_FROM_CART,
      { item_ids: itemIds }
    )
    return response.data
  },
}
