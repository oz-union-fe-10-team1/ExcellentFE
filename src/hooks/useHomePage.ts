import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/api/productApi'
import { fetchPackages } from '@/api/packageApi'

// 상품 데이터 훅
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // 지수 백오프
  })
}

// 패키지 데이터 훅
export const usePackages = () => {
  return useQuery({
    queryKey: ['packages', 'featured'],
    queryFn: fetchPackages,
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // 지수 백오프
  })
}
