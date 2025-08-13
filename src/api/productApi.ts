import { axiosInstance } from '@/utils/axios'
import { API_PATHS } from '@/constants/apiPaths'
import type { Package } from '@/types/package'
import type { ProductDetail, Product } from '@/types/product'
import { fetchPackages } from './packageApi'

// 상품 데이터 가져오기
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<{ results: Product[] }>(
    API_PATHS.PRODUCTS.LIST
  )
  return response.data.results
}

// 패키지 API는 packageApi.ts로 분리됨

// 모든 데이터 동시에 가져오기
export const fetchAllData = async (): Promise<{
  products: Product[]
  packages: Package[]
}> => {
  const [products, packages] = await Promise.all([
    fetchProducts(),
    fetchPackages(),
  ])

  return { products, packages }
}

// 상품 상세 정보 가져오기
export const fetchProductDetail = async (
  productId: string
): Promise<ProductDetail> => {
  const response = await axiosInstance.get<ProductDetail>(
    `${API_PATHS.PRODUCTS.LIST}/${productId}/`
  )
  return response.data
}
