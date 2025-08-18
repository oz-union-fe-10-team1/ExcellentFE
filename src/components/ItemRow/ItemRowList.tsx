import type { CartItemRowProps } from '@/types/ItemRow/itemRows'
import CartItemRow from './ListComponent/CartItemRow'
import OrderItemRow from './ListComponent/OrderItemRow'
import TastingItemRow from './ListComponent/TastingItemRow'

const ItemRowList = (props: CartItemRowProps) => {
  switch (props.type) {
    case 'cart':
      return (
        <CartItemRow
          id={props.id}
          key={props.id}
          img={props.product?.main_image_url || ''}
          name={props.name || ''}
          quantity={props.quantity || 0}
          price={props.subtotal || '0'}
          pickupName={props.pickup_store?.name || ''}
          pickupAddress={props.pickup_store?.address || ''}
          pickupContact={props.pickup_store?.contact || ''}
          onQuantityChange={props.onQuantityChange}
        />
      )

    case 'order':
      return (
        <OrderItemRow
          id={props.id}
          key={props.id}
          order={props.order_date}
          img={props.product?.main_image_url || ''}
          name={props.product?.name || ''}
          quantity={props.quantity || 0}
          price={props.price || '0'}
          feedback_id={props?.feedback_id || null}
          user="임시"
        />
      )

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
