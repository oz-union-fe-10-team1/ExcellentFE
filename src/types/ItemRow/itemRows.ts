export interface ItemRowType {
  type?: 'cart' | 'order' | 'tasting'
  order?: string
  img: string
  name: string
  quantity?: number
  price?: number
  reviewed?: boolean
  feedback?: string
  pickup?: string
}

export interface CartItemRowProps extends ItemRowType {
  checked?: boolean
  onCheckChange?: (checked: boolean) => void
  onQuantityChange?: (newQuantity: number) => void

  product?: {
    name: string
    main_image_url: string
  }
  order_item?: {
    purchase_date: string
    quantity: number
  }
  comment?: string
}
