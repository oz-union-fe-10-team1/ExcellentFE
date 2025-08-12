export interface Product {
  id?: number
  name?: string
  price?: string | number
  main_image_url?: string
}

export interface PackageItem {
  id?: string
  name?: string
}

export interface Package {
  id?: number
  name?: string
  price?: string | number
  items?: PackageItem[]
}

export interface CartSingleItem {
  id?: string | number
  product?: Product
  quantity?: number
  pickup?: string
  subtotal?: string
}

export interface CartPackageItem {
  id?: string | number
  cart_package_id?: number
  quantity?: number
  package?: Package
  pickup?: string
  subtotal?: string
}

export interface ItemRowType {
  type?: 'cart' | 'order' | 'tasting'
  id?: string | number
  img?: string
  name?: string
  quantity?: number
  price?: number | string
  pickup?: string

  product?: Product
  subtotal?: string

  cart_package_id?: number
  package?: Package

  order?: string
  reviewed?: boolean

  order_item?: {
    purchase_date: string
    quantity: number
  }

  feedback?: string
  comment?: string

  single_items?: CartSingleItem[]
  packages?: CartPackageItem[]

  order_date?: string
  feedback_id?: number | null
  user?: string
}

export interface CartItemRowProps extends ItemRowType {
  checked?: boolean
  onCheckChange?: (checked: boolean) => void
  onQuantityChange?: (newQuantity: number) => void
}

export interface ItemRowListProps
  extends Omit<CartItemRowProps, 'onQuantityChange'> {
  onQuantityChange?: (itemIndex: number, newQuantity: number) => void
}

export interface CartMockDataType {
  id: number
  customer: number
  single_items: CartSingleItem[]
  packages: CartPackageItem[]
  total_price: string
  final_total: string
  created_at: string
  updated_at: string
}
