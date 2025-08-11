import { getTestQuetion } from '@/api/tasteTest'
import { useQuery } from '@tanstack/react-query'

const useTasteTest = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTestQuetion,
  })
}

export default useTasteTest
