import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/api/searchApi'

export const useProductSearch = (searchParams: Record<string, any> | null) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['SearchList', searchParams],
    queryFn: () => fetchProducts(searchParams ?? {}),
    enabled: searchParams !== null,
  })

  return {
    data: data ?? { results: [] },
    isLoading,
    isError,
  }
}
