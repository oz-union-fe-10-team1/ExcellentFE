import { useEffect, useState } from 'react'

interface UseCartItemLogicParams {
  quantity: number | undefined
  onQuantityChange?: (quantity: number) => void
}

const useCartItem = ({
  quantity,
  onQuantityChange,
}: UseCartItemLogicParams) => {
  const [localQuantity, setLocalQuantity] = useState(() => quantity || 0)

  useEffect(() => {
    setLocalQuantity(quantity || 0)
  }, [quantity])

  const handleQuantityChange = (newQuantity: number): void => {
    if (newQuantity >= 1) {
      setLocalQuantity(newQuantity)
      onQuantityChange?.(newQuantity)
    }
  }

  const handleIncreaseQuantity = (): void =>
    handleQuantityChange(localQuantity + 1)

  const handleDecreaseQuantity = (): void =>
    handleQuantityChange(localQuantity - 1)

  return {
    localQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    isDecreaseDisabled: localQuantity <= 1,
  }
}

export default useCartItem
