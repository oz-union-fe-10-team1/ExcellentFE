import { useQuery } from '@tanstack/react-query'
import { orderApi } from '@/api/order'

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: orderApi.list,
    staleTime: 5 * 60 * 1000,
  })
}
