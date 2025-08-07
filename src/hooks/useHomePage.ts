import { useState, useEffect } from 'react'
import { HomeApi } from '@/api/homeApi'
import { HomeUtils } from '@/utils/homeUtils'
import type { Product } from '@/mocks/handlers/product/mocks/productMockData'
import type { Package } from '@/types/home'
import type { CardBaseProps } from '@/types/cardProps'

interface UseHomePageReturn {
  loading: boolean
  error: string | null
  monthlyProducts: CardBaseProps[]
  popularPackages: CardBaseProps[]
  recommendedProducts: CardBaseProps[]
  refetch: () => Promise<void>
}

export const useHomePage = (): UseHomePageReturn => {
  const [products, setProducts] = useState<Product[]>([])
  const [packages, setPackages] = useState<Package[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null) // 에러 초기화

      const { products, packages } = await HomeApi.fetchAllData()
      setProducts(products)
      setPackages(packages)
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : '데이터를 불러오는데 실패했습니다.'

      console.error('데이터를 불러오는데 실패했습니다:', error)
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, []) // 의존성 배열 비움

  // 각 섹션별 데이터 변환
  const monthlyProducts = HomeUtils.getMonthlyProducts(products)
  const popularPackages = HomeUtils.getPopularPackages(packages)
  const recommendedProducts = HomeUtils.getRecommendedProducts(products)

  return {
    loading,
    error,
    monthlyProducts,
    popularPackages,
    recommendedProducts,
    refetch: fetchData, // 재시도 함수 제공
  }
}
