import { axiosInstance } from '@/utils/axios'
import type { ProductType } from '@/hooks/useProductSearch'
import { PRODUCTS_SEARCH_PATH } from '@/constants/apiPaths'

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
  const res = await axiosInstance.get(`api/v1${PRODUCTS_SEARCH_PATH}`, {
    params,
  })
  return res.data
}
