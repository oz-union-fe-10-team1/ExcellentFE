import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

interface ProductType {
  main_image_url: string
  name: string
  short_description: string
  price: number
}

interface ProductSearchResponse {
  results: ProductType[]
}

const productSearch = async (): Promise<ProductSearchResponse> => {
  const res = await axios.get('/api/v1/products/search/')
  console.log(res)
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
