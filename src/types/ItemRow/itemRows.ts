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
  checked: boolean
  onCheckChange: (checked: boolean) => void
  onQuantityChange?: (newQuantity: number) => void
}
