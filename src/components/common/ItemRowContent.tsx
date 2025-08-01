import type { ItemRowType } from '@/types/ItemRow/itemRows'
import useItemRow from '@/hooks/useItemRow'
import ItemRowLabel from '../ItemRow/ItemRowLabel'
import ItemRowList from '../ItemRow/ItemRowList'

interface ItemRowProps {
  items: ItemRowType[]
  type: 'cart' | 'order' | 'tasting'
}

const ItemRowContent = ({ items, type }: ItemRowProps) => {
  const { itemList, handleQuantityChange } = useItemRow(items)

  return (
    <ItemRowLabel type={type}>
      {itemList.map((item, idx) => (
        <ItemRowList
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

export default ItemRowContent
