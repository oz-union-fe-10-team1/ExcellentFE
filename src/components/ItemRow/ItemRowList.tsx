import type { CartItemRowProps } from '@/types/ItemRow/itemRows'
import CartItemRow from './ListComponent/CartItemRow'
import OrderItemRow from './ListComponent/OrderItemRow'
import TastingItemRow from './ListComponent/TastingItemRow'

const ItemRowList = (props: CartItemRowProps) => {
  switch (props.type) {
    case 'cart':
      /* props가 어떤 타입인지 체크 */
      if (props.product) {
        return (
          <CartItemRow
            key={props.id}
            img={props.product.main_image_url || ''}
            name={props.product.name || ''}
            quantity={props.quantity || 0}
            price={props.subtotal || '0'}
            pickup={props.pickup}
            onQuantityChange={props.onQuantityChange}
          />
        )
      } else if (props.package) {
        return (
          <CartItemRow
            key={props.cart_package_id || props.id}
            img={''}
            name={props.package.name || ''}
            quantity={props.quantity || 0}
            price={props.subtotal || '0'}
            pickup={props.pickup}
            onQuantityChange={props.onQuantityChange}
          />
        )
      } else {
        return <div>올바르지 않은 props 타입입니다.</div>
      }

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
