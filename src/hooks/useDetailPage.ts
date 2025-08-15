import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useCartItem from '@/hooks/useCartItem'
import { DetailData, type ProductDetail } from '@/mocks/detailMock'
import { getProductDetail } from '@/api/productApi'

export const useDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const [data, setData] = useState<ProductDetail>(DetailData)

  useEffect(() => {
    if (!id) return

    const loadData = async () => {
      const result = await getProductDetail(id)
      setData(result)
    }

    loadData()
  }, [id, location.pathname])

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
