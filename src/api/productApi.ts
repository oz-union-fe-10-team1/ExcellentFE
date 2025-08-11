import axios from 'axios'
import type { Product } from '@/mocks/handlers/product/mocks/productMockData'
import type {
  Package,
  PackageApiResponse,
} from '@/mocks/handlers/package/package'

// 상품 데이터 가져오기
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<{ results: Product[] }>('/api/v1/products')
    return response.data.results
  } catch (error) {
    console.error('상품 데이터를 불러오는데 실패했습니다:', error)
    throw error
  }
}

// 전체 패키지 데이터 가져오기 (featured만)
export const fetchPackages = async (): Promise<Package[]> => {
  try {
    const response = await axios.get<PackageApiResponse>('/api/v1/packages/', {
      params: {
        is_featured: 'true',
        page_size: 12,
      },
    })

    // 모든 카테고리의 패키지를 하나의 배열로 합치기
    const allPackages: Package[] = []
    Object.values(response.data.categories).forEach((category) => {
      if (category) {
        allPackages.push(...category.packages)
      }
    })

    return allPackages
  } catch (error) {
    console.error('패키지 데이터를 불러오는데 실패했습니다:', error)
    throw error
  }
}

// 카테고리별 패키지 데이터 가져오기
export const fetchPackagesByCategory = async (
  category: string
): Promise<Package[]> => {
  try {
    const response = await axios.get<PackageApiResponse>('/api/v1/packages/', {
      params: {
        category: category,
        page_size: 50, // 카테고리별로는 더 많이 가져오기
      },
    })

    // 해당 카테고리의 패키지만 반환
    const categoryData = response.data.categories[category]
    return categoryData ? categoryData.packages : []
  } catch (error) {
    console.error(`${category} 패키지 데이터를 불러오는데 실패했습니다:`, error)
    throw error
  }
}

// 모든 데이터 동시에 가져오기
export const fetchAllData = async (): Promise<{
  products: Product[]
  packages: Package[]
}> => {
  try {
    const [products, packages] = await Promise.all([
      fetchProducts(),
      fetchPackages(),
    ])

    return { products, packages }
  } catch (error) {
    console.error('데이터를 불러오는데 실패했습니다:', error)
    throw error
  }
}
