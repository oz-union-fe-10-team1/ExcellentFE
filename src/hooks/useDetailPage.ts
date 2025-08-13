// hooks/useDetailPageLogic.ts
import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useProductDetail } from '@/hooks/useProductDetail'
import useFeedback from '@/hooks/useFeedback'
import {
  dateOptions,
  storeOptions,
  regionOptions,
} from '@/constants/detailOptions'
import type { ProductDetail } from '@/types/product'
import type { PackageDetail } from '@/types/package'
import type { Feedback } from '@/mocks/handlers/feedback/feedback'

interface ProcessedProductData {
  name: string
  mainImage?: string
  price: number
  originalPrice?: number
  discountRate: number
  statistics: {
    average_rating: number
    review_count: number
  }
  alcoholType?: string
  alcoholContent?: number | null
  flavorNotes?: string
  totalPrice: number
}

// 비즈니스 로직을 담당하는 커스텀 훅
export const useDetailPage = () => {
  const { product_id, package_id } = useParams<{
    product_id?: string
    package_id?: string
  }>()

  const isProduct = !!product_id
  const id = product_id || package_id

  const { data: productData, isLoading } = useProductDetail({
    type: isProduct ? 'product' : 'package',
    id: id || '',
    enabled: !!id,
  }) as {
    data: (ProductDetail | PackageDetail) | undefined
    isLoading: boolean
  }

  const { data: feedbackData } = useFeedback() as {
    data: Feedback[] | undefined
  }

  // 상태 관리
  const [quantity, setQuantity] = useState(1)
  const [selectedStore, setSelectedStore] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [activeTab, setActiveTab] = useState('detail')
  const [isLiked, setIsLiked] = useState(false)

  // 비즈니스 로직: 데이터 가공 및 계산
  const processedData = useMemo((): ProcessedProductData | null => {
    if (!productData) return null

    const name = productData.name
    const mainImage = isProduct
      ? (productData as ProductDetail).main_image_url
      : (productData as PackageDetail).main_image
    const price = isProduct
      ? (productData as ProductDetail).price
      : (productData as PackageDetail).final_price
    const originalPrice = isProduct
      ? (productData as ProductDetail).original_price
      : (productData as PackageDetail).total_original_price

    const discountRate = originalPrice
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0

    const statistics = isProduct
      ? (productData as ProductDetail).statistics
      : {
          average_rating: (productData as PackageDetail).rating_average,
          review_count: (productData as PackageDetail).review_count,
        }

    const alcoholType = isProduct
      ? (productData as ProductDetail).alcohol_type?.name
      : '패키지'
    const alcoholContent = isProduct
      ? (productData as ProductDetail).alcohol_content
      : null
    const flavorNotes = isProduct
      ? (productData as ProductDetail).flavor_notes
      : (productData as PackageDetail).short_description

    return {
      name,
      mainImage,
      price,
      originalPrice: originalPrice ?? undefined,
      discountRate,
      statistics,
      alcoholType,
      alcoholContent,
      flavorNotes,
      totalPrice: price * quantity,
    }
  }, [productData, isProduct, quantity])

  // 비즈니스 로직: 액션 핸들러들
  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  const handleLikeToggle = () => {
    setIsLiked(!isLiked)
  }

  const handlePurchase = () => {
    // 구매 로직
    // TODO: 실제 구매 API 호출
  }

  const handleAddToCart = () => {
    // 장바구니 추가 로직
    // TODO: 실제 장바구니 API 호출
  }

  // 선택된 날짜의 상세 정보
  const selectedDateInfo = useMemo(() => {
    return dateOptions.find((date) => date.value === selectedDate)
  }, [selectedDate])

  return {
    // 상태
    quantity,
    selectedStore,
    selectedRegion,
    selectedDate,
    activeTab,
    isLiked,

    // 데이터
    isLoading,
    processedData,
    feedbackData,
    isProduct,
    storeOptions,
    regionOptions,
    dateOptions,
    selectedDateInfo,

    // 액션들
    setQuantity,
    setSelectedStore,
    setSelectedRegion,
    setSelectedDate,
    setActiveTab,
    handleQuantityChange,
    handleLikeToggle,
    handlePurchase,
    handleAddToCart,
  }
}
