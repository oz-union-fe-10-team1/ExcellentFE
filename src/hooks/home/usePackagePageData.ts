import {
  useRecommendedProducts,
  useAwardPackages,
  useMakgeolliPackages,
  useRegionalPackages,
} from '@/hooks/home/useProduct'

export const usePackagePageData = () => {
  const recommended = useRecommendedProducts()
  const award = useAwardPackages()
  const makgeolli = useMakgeolliPackages()
  const regional = useRegionalPackages()

  const loading =
    recommended.isLoading ||
    award.isLoading ||
    makgeolli.isLoading ||
    regional.isLoading

  const error =
    recommended.error || award.error || makgeolli.error || regional.error

  const retry = () => {
    recommended.refetch()
    award.refetch()
    makgeolli.refetch()
    regional.refetch()
  }

  return {
    loading,
    error,
    retry,
    recommended: recommended.data?.products ?? [],
    award: award.data?.products ?? [],
    makgeolli: makgeolli.data?.products ?? [],
    regional: regional.data?.products ?? [],
  }
}
