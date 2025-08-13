import { getTestQuetion } from '@/api/tasteTest'
import { useQuery } from '@tanstack/react-query'

const useTasteTest = () => {
  return useQuery({
    queryKey: ['getTest'],
    queryFn: getTestQuetion,
  })
}

export default useTasteTest
