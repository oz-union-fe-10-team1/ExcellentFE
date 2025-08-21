import { useEffect, useMemo, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { cartApi } from '@/api/productApi'
import type { CartResponse } from '@/types/cart'

interface UseCartItemLogicParams {
  quantity: number | undefined
  id?: string | number
  data?: CartResponse
  onQuantityChange?: (quantity: number) => void
}

const useCartItem = ({
  quantity,
  id,
  data,
  onQuantityChange,
}: UseCartItemLogicParams) => {
  const [localQuantity, setLocalQuantity] = useState(() => quantity || 0)
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  useEffect(() => {
    setLocalQuantity(quantity || 0)
  }, [quantity])

  const updateQuantityMutation = useMutation({
    mutationFn: ({ id, quantity }: { id: string; quantity: number }) =>
      cartApi.UPDATE(id, quantity),
    onSuccess: (_, variables) => {
      onQuantityChange?.(variables.quantity)
    },
    onError: () => {
      setLocalQuantity(quantity || 0)
    },
  })

  const deleteItemMutation = useMutation({
    mutationFn: (id: string) => cartApi.DELETE(id),
    onSuccess: () => {
      onQuantityChange?.(0) // Pass 0 or handle differently if needed
    },
  })

  const updateQuantity = (newQuantity: number): void => {
    if (!id) return

    if (newQuantity <= 0) {
      deleteItemMutation.mutate(String(id))
    } else {
      setLocalQuantity(newQuantity)
      updateQuantityMutation.mutate({ id: String(id), quantity: newQuantity })
    }
  }

  const onIncreaseQuantity = (): void => updateQuantity(localQuantity + 1)

  const onDecreaseQuantity = (): void => updateQuantity(localQuantity - 1)

  const onCheckChange = (itemId: number, isChecked: boolean) => {
    setCheckedItems((prev) =>
      isChecked ? [...prev, itemId] : prev.filter((id) => id !== itemId)
    )
  }

  const checkedTotalPrice = useMemo(() => {
    if (!data?.cart_items) return 0
    return data.cart_items
      .filter((item) => checkedItems.includes(item.id as number))
      .reduce((total, item) => total + parseFloat(item.subtotal || '0'), 0)
  }, [data, checkedItems])

  return {
    localQuantity,
    onIncreaseQuantity,
    onDecreaseQuantity,
    checkedItems,
    isUpdating:
      updateQuantityMutation.isPending || deleteItemMutation.isPending,
    onCheckChange,
    checkedTotalPrice,
  }
}

export default useCartItem
