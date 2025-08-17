import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductDetail, useAddCart } from '@/hooks/home/useProduct'
import useCartItem from '@/hooks/useCartItem'
import { showSuccess, showError } from '@/utils/feedbackUtils'
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from '@/constants/message'

export const useDetailPage = () => {
  const { id: productId } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data, isLoading, error } = useProductDetail(productId ?? '')

  const {
    localQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    isDecreaseDisabled,
  } = useCartItem({ quantity: 1 })

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

  const { mutate: addCart } = useAddCart()

  const handleAddToCart = () => {
    if (!productId) return
    addCart(
      { product_id: productId, quantity: localQuantity },
      {
        onSuccess: () => showSuccess(SUCCESS_MESSAGE.ADD_CART_SUCCESS),
        onError: () => showError(ERROR_MESSAGE.ADD_CART_FAILED),
      }
    )
  }

  const handlePurchase = () => {
    if (!productId) return
    addCart(
      { product_id: productId, quantity: localQuantity },
      {
        onSuccess: () => navigate('/cart'),
        onError: () => showError(ERROR_MESSAGE.ADD_CART_FAILED),
      }
    )
  }

  return {
    data,
    error,
    isLoading,
    productId,
    dropdownValues,
    handleDropdownChange,
    localQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    isDecreaseDisabled,
    handleAddToCart,
    handlePurchase,
  }
}
