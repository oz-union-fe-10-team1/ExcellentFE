import { useState, useEffect } from 'react'
import { HomeApi } from '@/api/homeApi'
import { HomeUtils } from '@/utils/homeUtils'
import type { Product } from '@/mocks/handlers/product/mocks/productMockData'
import type { Package } from '@/types/home'
import type { CardBaseProps } from '@/types/cardProps'

interface UseHomePageReturn {
  loading: boolean
  monthlyProducts: CardBaseProps[]
  popularPackages: CardBaseProps[]
  recommendedProducts: CardBaseProps[]
}

export const useHomePage = (): UseHomePageReturn => {
  const [products, setProducts] = useState<Product[]>([])
  const [packages, setPackages] = useState<Package[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products, packages } = await HomeApi.fetchAllData()
        setProducts(products)
        setPackages(packages)
      } catch (error) {
        console.error('데이터를 불러오는데 실패했습니다:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // 각 섹션별 데이터 변환
  const monthlyProducts = HomeUtils.getMonthlyProducts(products)
  const popularPackages = HomeUtils.getPopularPackages(packages)
  const recommendedProducts = HomeUtils.getRecommendedProducts(products)

  return {
    loading,
    monthlyProducts,
    popularPackages,
    recommendedProducts,
  }
}
