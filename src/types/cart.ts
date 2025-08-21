interface PickupStore {
  id: number
  name: string
  address: string
  contact: string
}

interface CartItem {
  id: number
  product: {
    id: string
    name: string
    price: number
    main_image: string
  }
  quantity: number
  subtotal: string
  pickup_store: PickupStore
  pickup_date: string
}

export interface CartResponse {
  count: number
  next: string | null
  previous: string | null
  results: CartItem[]
  cart_items: CartItem[]
  total_price: number
  final_total: number
}
