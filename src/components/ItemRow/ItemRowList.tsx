import type { CartItemRowProps } from '@/types/ItemRow/itemRows'
import CartItemRow from './ListComponent/CartItemRow'
import OrderItemRow from './ListComponent/OrderItemRow'
import TastingItemRow from './ListComponent/TastingItemRow'

const ItemRowList = (props: CartItemRowProps) => {
  switch (props.type) {
    case 'cart':
      return <CartItemRow {...props} />
    case 'order':
      return <OrderItemRow {...props} />
    case 'tasting': {
      const { product, order_item, comment } = props

      return (
        <TastingItemRow
          img={product?.main_image_url || ''}
          name={product?.name || ''}
          order={`${order_item?.purchase_date?.slice(0, 10)} ${order_item?.purchase_date?.slice(11, 16)} `}
          feedback={comment || ''}
        />
      )
    }
    default:
      return null
  }
}

export default ItemRowList
