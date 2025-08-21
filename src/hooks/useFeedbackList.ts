import { useQuery } from '@tanstack/react-query'
import { feedbackApi } from '@/api/feedback'
import type { Feedback } from '@/api/feedback/types'

export const useFeedbackList = () => {
  const popularQuery = useQuery<Feedback[]>({
    queryKey: ['popularFeedback'],
    queryFn: () => feedbackApi.fetchFeedbackByType('popular'),
  })

  const recentQuery = useQuery<Feedback[]>({
    queryKey: ['recentFeedback'],
    queryFn: () => feedbackApi.fetchFeedbackByType('recent'),
  })

  const personalizedQuery = useQuery<Feedback[]>({
    queryKey: ['personalizedFeedback'],
    queryFn: () => feedbackApi.fetchFeedbackByType('personalized'),
  })

  return {
    popular: popularQuery.data,
    recent: recentQuery.data,
    personalized: personalizedQuery.data,
    refetchPopular: popularQuery.refetch,
    refetchRecent: recentQuery.refetch,
    refetchPersonalized: personalizedQuery.refetch,
    isLoading:
      popularQuery.isLoading ||
      recentQuery.isLoading ||
      personalizedQuery.isLoading,
    isError:
      popularQuery.isError || recentQuery.isError || personalizedQuery.isError,
  }
}
