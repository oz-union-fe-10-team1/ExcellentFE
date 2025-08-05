import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getUserCart = async () => {
  const res = await axios.get('/api/v1/cart')

  return res.data
}

const useUserCart = () => {
  const { data, isLoading, error, isError } = useQuery({
    /* 각 유저의 Cart라 추후 token 값 추가해서 unique하게 바꿀 예정 */
    queryKey: ['UserCart'],
    queryFn: getUserCart,
  })

  return {
    data,
    isLoading,
    error,
    isError,
  }
}

export default useUserCart
