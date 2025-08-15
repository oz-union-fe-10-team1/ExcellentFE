import { useQuery } from '@tanstack/react-query'
import { fetchFeedbackList } from '@/api/feedbackList/feedbackApi'
import type { FeedbackResponse } from '@/api/feedbackList/types'

export const useFeedbackList = (enabled = true) => {
  const { data, isLoading, isError } = useQuery<FeedbackResponse>({
    queryKey: ['feedbackList'],
    queryFn: fetchFeedbackList,
    enabled,
  })

  const feedbacks = data?.results ?? []

  return { data: feedbacks, isLoading, isError }
}
