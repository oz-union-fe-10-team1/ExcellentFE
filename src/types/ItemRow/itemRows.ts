export type ItemRowLabelType = {
  type?: 'cart' | 'order' | 'tasting'
  children?: React.ReactNode
  className?: string
}
type RowData = {
  order?: string
  img: string
  name: string
  quantity?: number
  price?: number
  reviewed?: boolean
  feedback?: string
  pickup?: string
}

type EventHandlers = {
  onQuantityChange?: (quantity: number) => void
}

export type ItemRowType = ItemRowLabelType & RowData & EventHandlers
