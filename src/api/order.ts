import { API_PATHS } from '@/constants/apiPaths'
import { axiosInstance } from '@/utils/axios'
import type { PaginatedResponse, ServerOrder } from '@/types/orderType'

export const orderApi = {
  list: async (): Promise<PaginatedResponse<ServerOrder>> => {
    const response = await axiosInstance.get(API_PATHS.ORDER.LIST)
    return response.data as PaginatedResponse<ServerOrder>
  },
  CREATE_FROM_CART: async (itemIds: number[]) => {
    const response = await axiosInstance.post(
      API_PATHS.ORDER.CREATE_FROM_CART,
      { item_ids: itemIds }
    )
    return response.data
  },
}
