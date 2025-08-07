import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export interface ProductType {
  main_image_url: string
  name: string
  short_description: string
  price: number
  taste_profile?: TasteProfile
}

interface ProductSearchResponse {
  results: ProductType[]
}

export interface TasteProfile {
  sweetness_level: number
  acidity_level: number
  body_level: number
  carbonation_level: number
  bitterness_level: number
  aroma_level: number
}

type QueryParamValue =
  | string
  | number
  | Array<string | number>
  | undefined
  | null

const productSearch = async (
  params?: Record<string, QueryParamValue>
): Promise<ProductSearchResponse> => {
  const res = await axios.get('/api/v1/products/search/', {
    params,
  })
  return res.data
}

const useProductSearch = (searchParams: Record<string, any> | null) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['SearchList', searchParams],
    queryFn: () => productSearch(searchParams ?? {}),
    enabled: searchParams !== null,
  })

  return {
    data,
    isLoading,
    isError,
  }
}

export default useProductSearch
