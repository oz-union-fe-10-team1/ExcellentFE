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

// 서버 응답 스키마 (페이지네이션 + 주문 단위)
export interface ServerOrderItemProduct {
  id: string | number
  name: string
  main_image_url?: string
  price?: number
}

export interface ServerOrderItem {
  id: number
  product: ServerOrderItemProduct
  quantity: number
  price?: number
  feedback_id?: number | null
}

export interface ServerOrder {
  id: number
  order_number: string
  user: string
  total_price: number
  status: string
  created_at: string
  updated_at: string
  items: ServerOrderItem[]
}

export interface PaginatedResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}
