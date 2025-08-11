import { useQuery } from '@tanstack/react-query'
import { fetchPackagesByCategory } from '@/api/productApi'

export const usePackagesByCategory = (category: string) => {
  return useQuery({
    queryKey: ['packages', 'category', category],
    queryFn: () => fetchPackagesByCategory(category),
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}

// 개별 카테고리 훅들
export const useRecommendedPackages = () => {
  return usePackagesByCategory('추천')
}

export const useAwardPackages = () => {
  return usePackagesByCategory('수상등급')
}

export const useMakgeolliPackages = () => {
  return usePackagesByCategory('막걸리')
}

export const useRegionalPackages = () => {
  return usePackagesByCategory('지역특산주')
}
