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
      data.results.map((order) => ({
        type: 'order',
        id: order.id,
        order_date: order.order_date,
        pickup_day: order.pickup_day,
        pickup_status: order.pickup_status,
        pickup_store: order.pickup_store,
        price: order.price,
        product: {
          id: order.product.id,
          name: order.product.name,
          main_image_url: order.product.main_image_url ?? '',
        },
        quantity: order.quantity,
        feedback_id: order.feedback_id,
      })),
  })
}
