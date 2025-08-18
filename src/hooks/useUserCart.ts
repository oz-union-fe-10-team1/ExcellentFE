import { useQuery, useQueryClient } from '@tanstack/react-query'
import { cartApi } from '@/api/productApi'

const useUserCart = () => {
  const queryClient = useQueryClient()

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['UserCart'],
    queryFn: cartApi.GET,
  })

  const invalidateCart = () => {
    queryClient.invalidateQueries({ queryKey: ['UserCart'] })
  }

  return {
    data,
    isLoading,
    error,
    isError,
    invalidateCart,
  }
}

export default useUserCart
