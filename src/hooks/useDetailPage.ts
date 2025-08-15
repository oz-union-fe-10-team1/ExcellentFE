import { useState } from 'react'
import useCartItem from '@/hooks/useCartItem'
import { DetailData, type ProductDetail } from '@/mocks/detailMock'

export const useDetailPage = () => {
  const data: ProductDetail = DetailData

  const [pickupStore, setPickupStore] = useState('')

  const [dropdownValues, setDropdownValues] = useState({
    orderRegion: '',
    pickupStore: '',
    pickupDate: '',
  })

  const handleDropdownChange = (key: string, value: string) => {
    setDropdownValues((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const {
    localQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    isDecreaseDisabled,
  } = useCartItem({ quantity: 1 })

  return {
    data,
    pickupStore,
    setPickupStore,
    localQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    isDecreaseDisabled,
    dropdownValues,
    handleDropdownChange,
  }
}
