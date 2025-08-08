import axios from 'axios'
import type { Product } from '@/mocks/handlers/product/mocks/productMockData'
import type { PackageResponse, ProductResponse } from '@/types/home'
import type { Package } from '@/mocks/handlers/package/package'

export class HomeApi {
  // 상품 데이터 가져오기
  static async fetchProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<ProductResponse>('/api/v1/products')
      return response.data.results
    } catch (error) {
      console.error('상품 데이터를 불러오는데 실패했습니다:', error)
      throw error
    }
  }

  // 패키지 데이터 가져오기
  static async fetchPackages(): Promise<Package[]> {
    try {
      const response = await axios.get<PackageResponse>('/api/v1/packages/', {
        params: {
          is_featured: 'true',
          page_size: 12,
        },
      })

      // 모든 카테고리의 패키지를 하나의 배열로 합치기
      const allPackages: Package[] = []
      Object.values(response.data.categories).forEach((category) => {
        allPackages.push(...category.packages)
      })

      return allPackages
    } catch (error) {
      console.error('패키지 데이터를 불러오는데 실패했습니다:', error)
      throw error
    }
  }

  // 모든 데이터 동시에 가져오기
  static async fetchAllData(): Promise<{
    products: Product[]
    packages: Package[]
  }> {
    try {
      const [products, packages] = await Promise.all([
        this.fetchProducts(),
        this.fetchPackages(),
      ])

      return { products, packages }
    } catch (error) {
      console.error('데이터를 불러오는데 실패했습니다:', error)
      throw error
    }
  }
}
