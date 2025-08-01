import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const productSearch = async () => {
  const res = await axios.get('/api/v1/products/search')
  return res.data
}

const useProductSearch = () => {
  const { data, isLoading, isFetched, error, isError } = useQuery({
    queryKey: ['SearchList'],
    queryFn: productSearch,
  })

  return {
    data,
    isLoading,
    error,
    isError,
    isFetched,
  }
}

export default useProductSearch
