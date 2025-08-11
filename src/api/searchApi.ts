import { axiosInstance } from '@/utils/axios'
import type { ProductType } from '@/hooks/useProductSearch'
import { API_PATHS } from '@/constants/apiPaths'

export interface ProductSearchResponse {
  results: ProductType[]
}

type QueryParamValue =
  | string
  | number
  | Array<string | number>
  | undefined
  | null

export async function fetchProducts(
  params?: Record<string, QueryParamValue>
): Promise<ProductSearchResponse> {
  const res = await axiosInstance.get(API_PATHS.PRODUCTS.SEARCH, {
    params,
  })
  return res.data
}
