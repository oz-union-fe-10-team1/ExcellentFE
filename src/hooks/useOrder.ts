import { useQuery } from '@tanstack/react-query'
import { orderApi } from '@/api/order'
import type { ItemRowType } from '@/types/ItemRow/itemRows'
import type { PaginatedResponse, ServerOrder } from '@/types/orderType'

export const useOrders = () => {
  return useQuery<PaginatedResponse<ServerOrder>, unknown, ItemRowType[]>({
    queryKey: ['orders'],
    queryFn: orderApi.list,
    staleTime: 5 * 60 * 1000,
    select: (data) =>
      data.results.flatMap((order) =>
        order.items.map((item) => ({
          type: 'order',
          id: item.id,
          order_date: order.created_at,
          product: {
            id: item.product.id,
            name: item.product.name,
            main_image_url: item.product.main_image_url ?? '',
          },
          quantity: item.quantity,
          price: item.price ?? item.product.price ?? 0,
          feedback_id: item.feedback_id ?? null,
          user: order.user,
        }))
      ),
  })
}
