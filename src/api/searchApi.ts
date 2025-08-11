import { axiosInstance } from '@/utils/axios'
import type { ProductType } from '@/hooks/useProductSearch'
import { PRODUCTS_SEARCH_PATH } from '@/api/apiPath/productSearchPath'

export interface ProductSearchResponse {
  results: ProductType[]
}

type QueryParamValue =
  | string
  | number
  | Array<string | number>
  | undefined
  | null

export const fetchProducts = async (
  params?: Record<string, QueryParamValue>
): Promise<ProductSearchResponse> => {
  const res = await axiosInstance.get(`api/v1${PRODUCTS_SEARCH_PATH}`, {
    params,
  })
  return res.data
}
