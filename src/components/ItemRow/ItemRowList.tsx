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
          detailId={props.product?.id}
          img={props.product?.main_image || ''}
          name={props.product?.name || ''}
          quantity={props.quantity || 0}
          price={props.subtotal || '0'}
          pickupName={props.pickup_store?.name || ''}
          pickupAddress={props.pickup_store?.address || ''}
          pickupContact={props.pickup_store?.contact || ''}
          onQuantityChange={props.onQuantityChange}
          checked={props.checked}
          onCheckChange={props.onCheckChange}
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
          product={props.product}
          user="임시"
        />
      )

    case 'tasting': {
      return (
        <TastingItemRow
          img={props.image_url || ''}
          name={props.product_name || ''}
          order={
            props.created_at
              ? `${props.created_at.slice(0, 10)} ${props.created_at.slice(11, 16)}`
              : ''
          }
          feedback={props.comment || ''}
        />
      )
    }
    default:
      return null
  }
}

export default ItemRowList
