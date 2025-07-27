import type { ItemRowType } from '@/types/ItemRow/itemRows'
import ItemRowLabel from '@/components/item-row/ItemRowLabel'
import ItemRowProduct from '@/components/item-row/ItemRowProduct'
import { useState } from 'react'

interface ItemRowProps {
  items: ItemRowType[]
  type: 'cart' | 'order' | 'tasting'
}

const ItemRow = ({ items, type }: ItemRowProps) => {
  const [cartItems, setCartItems] = useState<ItemRowType[]>(items)

  const handleQuantityChange = (itemIndex: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item, index) =>
        index === itemIndex ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  return (
    <ItemRowLabel type={type}>
      {cartItems.map((item, idx) => (
        <ItemRowProduct
          key={idx}
          {...item}
          type={type}
          onQuantityChange={(newQuantity) =>
            handleQuantityChange(idx, newQuantity)
          }
        />
      ))}
    </ItemRowLabel>
  )
}

export default ItemRow
