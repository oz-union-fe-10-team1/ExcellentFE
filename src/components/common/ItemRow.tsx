import type { ItemRowType } from '@/types/ItemRow/itemRows'
import ItemRowLabel from '@/components/item-row/ItemRowLabel'
import ItemRowList from '@/components/item-row/ItemRowList'
import useItemRow from '@/hooks/itemrow/useItemRow'

interface ItemRowProps {
  items: ItemRowType[]
  type: 'cart' | 'order' | 'tasting'
}

const ItemRow = ({ items, type }: ItemRowProps) => {
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

export default ItemRow
