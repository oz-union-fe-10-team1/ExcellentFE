import {
  useMonthProducts,
  usePopularProducts,
  useRecommendedProducts,
} from '@/hooks/home/useProduct'

export const useMainProducts = () => {
  const month = useMonthProducts()
  const popular = usePopularProducts()
  const recommended = useRecommendedProducts()

  const retryAll = () => {
    month.refetch()
    popular.refetch()
    recommended.refetch()
  }

  const anyLoading =
    month.isLoading || popular.isLoading || recommended.isLoading
  const anyError = month.error || popular.error || recommended.error

  return {
    month,
    popular,
    recommended,
    anyLoading,
    anyError,
    retryAll,
  }
}
