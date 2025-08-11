import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/api/searchApi'

export interface ProductType {
  main_image_url: string
  name: string
  short_description: string
  price: number
  taste_profile?: TasteFilters
}

export interface TasteFilters {
  sweetness_level: number
  acidity_level: number
  body_level: number
  carbonation_level: number
  bitterness_level: number
  aroma_level: number
}

export const useProductSearch = (searchParams: Record<string, any> | null) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['SearchList', searchParams],
    queryFn: () => fetchProducts(searchParams ?? {}),
    enabled: searchParams !== null,
  })

  return {
    data,
    isLoading,
    isError,
  }
}
