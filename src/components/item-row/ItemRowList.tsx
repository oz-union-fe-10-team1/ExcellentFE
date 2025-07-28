import type { CartItemRowProps } from '@/types/ItemRow/itemRows'
import CartItemRow from './list-component/CartItemRow'
import OrderItemRow from './list-component/OrderItemRow'
import TastingItemRow from './list-component/TastingItemRow'

const ItemRowList = (props: CartItemRowProps) => {
  switch (props.type) {
    case 'cart':
      return <CartItemRow {...props} />
    case 'order':
      return <OrderItemRow {...props} />
    case 'tasting':
      return <TastingItemRow {...props} />
    default:
      return null
  }
}

export default ItemRowList
