import type { ItemRowType } from '@/types/ItemRow/itemRows'
import useItemRow from '@/hooks/useItemRow'
import ItemRowLabel from '@/components/ItemRow/ItemRowLabel'
import ItemRowList from '@/components/ItemRow/ItemRowList'

interface ItemRowProps {
  items: ItemRowType[]
  type: 'cart' | 'order' | 'tasting'
  onQuantityChange?: () => void
}

const ItemRowContent = ({ items, type, onQuantityChange }: ItemRowProps) => {
  const { itemList, handleQuantityChange } = useItemRow(items || [])

  if (items.length === 0) {
    switch (type) {
      case 'cart':
        return <div>장바구니가 비어있습니다.</div>
      case 'order':
        return <div>주문 내역이 없습니다.</div>
      case 'tasting':
        return <div>나의 시음 히스토리가 없습니다.</div>
      default:
        return <div>일치하는 타입이 없습니다.</div>
    }
  }

  return (
    <ItemRowLabel type={type}>
      {itemList.map((item, idx) => (
        <ItemRowList
          key={`${items[idx]?.id} - ${idx}`}
          {...item}
          type={type}
          onQuantityChange={async (newQuantity: number) => {
            await handleQuantityChange(idx, newQuantity)
            // 수량 변경 후 장바구니 데이터 새로고침
            onQuantityChange?.()
          }}
        />
      ))}
    </ItemRowLabel>
  )
}

export default ItemRowContent
