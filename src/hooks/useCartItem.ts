import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { cartApi } from '@/api/productApi'

interface UseCartItemLogicParams {
  quantity: number | undefined
  id?: string | number
  onQuantityChange?: (quantity: number) => void
}

const useCartItem = ({
  quantity,
  id,
  onQuantityChange,
}: UseCartItemLogicParams) => {
  const [localQuantity, setLocalQuantity] = useState(() => quantity || 0)

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

  return {
    localQuantity,
    onIncreaseQuantity,
    onDecreaseQuantity,
    isUpdating:
      updateQuantityMutation.isPending || deleteItemMutation.isPending,
  }
}

export default useCartItem
