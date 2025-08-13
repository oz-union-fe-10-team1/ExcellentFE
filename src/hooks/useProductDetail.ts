import { useQuery } from '@tanstack/react-query'
import { fetchProductDetail } from '@/api/productApi'
import { fetchPackageDetail } from '@/api/packageApi'
import type { ProductDetail } from '@/types/product'
import type { PackageDetail } from '@/types/package'

type DetailType = 'product' | 'package'

interface UseDetailParams {
  type: DetailType
  id: string | number
  enabled?: boolean
}

export const useProductDetail = ({
  type,
  id,
  enabled = true,
}: UseDetailParams) => {
  const productQuery = useQuery({
    queryKey: ['product', 'detail', id],
    queryFn: () => fetchProductDetail(id as string),
    enabled: type === 'product' && !!id && enabled,
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })

  const packageQuery = useQuery({
    queryKey: ['package', 'detail', id],
    queryFn: () => fetchPackageDetail(id),
    enabled: type === 'package' && !!id && enabled,
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })

  // 타입에 따라 적절한 쿼리 결과 반환
  if (type === 'product') {
    return {
      data: productQuery.data as ProductDetail | undefined,
      isLoading: productQuery.isLoading,
      error: productQuery.error,
      refetch: productQuery.refetch,
    }
  }

  return {
    data: packageQuery.data as PackageDetail | undefined,
    isLoading: packageQuery.isLoading,
    error: packageQuery.error,
    refetch: packageQuery.refetch,
  }
}
