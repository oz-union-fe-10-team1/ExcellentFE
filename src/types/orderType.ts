interface OrderProduct {
  id: number
  name: string
  main_image_url: string
}

interface OrderPickupStore {
  id: number
  name: string
  address: string
  phone_number: string
  created_at: string
  updated_at: string
}

export interface OrderType {
  id: number
  order_date: string
  product: OrderProduct
  quantity: number
  price: number
  pickup_store: OrderPickupStore
  pickup_day: string
  pickup_status: boolean
  feedback_id: number | null
}
