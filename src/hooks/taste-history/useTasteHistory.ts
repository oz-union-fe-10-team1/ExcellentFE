import { feedbackApi } from '@/api/feedback/index'
import { useQuery } from '@tanstack/react-query'
import { commonQueryOptions } from '@/hooks/home/useProduct'

export const useTasteHistory = () => {
  return useQuery({
    queryKey: ['tasteHistory'],
    queryFn: feedbackApi.tastingHistory,
    ...commonQueryOptions,
  })
}
