import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useCartItem from '@/hooks/useCartItem'
import { useProductDetail } from '@/hooks/home/useProduct'

export const useDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useProductDetail(id ?? '')

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
    id,
    data,
    isLoading,
    error,
    pickupStore,
    setPickupStore,
    dropdownValues,
    handleDropdownChange,
    localQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    isDecreaseDisabled,
  }
}
