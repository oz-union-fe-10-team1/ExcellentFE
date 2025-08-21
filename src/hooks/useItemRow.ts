import type { ItemRowType } from '@/types/ItemRow/itemRows'
import { useState, useEffect } from 'react'

const useItemRow = (items: ItemRowType[]) => {
  const [itemList, setItemList] = useState<ItemRowType[]>(items)

  useEffect(() => {
    setItemList(items)
  }, [items])

  const handleQuantityChange = (itemIndex: number, newQuantity: number) => {
    setItemList((prev) =>
      prev.map((item, index) =>
        index === itemIndex ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  return {
    itemList,
    handleQuantityChange,
  }
}

export default useItemRow
