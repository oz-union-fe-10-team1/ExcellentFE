import {
  useRecommendedProducts,
  useAwardPackages,
  useMakgeolliPackages,
  useRegionalPackages,
  useFeaturedPackages,
} from '@/hooks/home/useProduct'

export const usePackagePageData = () => {
  const featured = useFeaturedPackages()
  const award = useAwardPackages()
  const makgeolli = useMakgeolliPackages()
  const regional = useRegionalPackages()

  const loading =
    featured.isLoading ||
    award.isLoading ||
    makgeolli.isLoading ||
    regional.isLoading

  const error =
    featured.error || award.error || makgeolli.error || regional.error

  const retry = () => {
    featured.refetch()
    award.refetch()
    makgeolli.refetch()
    regional.refetch()
  }

  return {
    loading,
    error,
    retry,
    featured: featured.data?.products ?? [],
    award: award.data?.products ?? [],
    makgeolli: makgeolli.data?.products ?? [],
    regional: regional.data?.products ?? [],
  }
}
