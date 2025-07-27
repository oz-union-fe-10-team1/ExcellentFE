export type ItemRowType = {
  type?: 'cart' | 'order' | 'tasting'
  order?: string
  img: string
  name: string
  quantity?: number
  price?: number
  reviewed?: boolean
  feedback?: string
  pickup?: string
  onQuantityChange?: (quantity: number) => void
}
