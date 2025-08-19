import { useQuery } from '@tanstack/react-query'
import { fetchFeedbackByType } from '@/api/feedbackList/feedbackApi'
import type { Feedback } from '@/api/feedbackList/types'

export const useFeedbackList = () => {
  const popularQuery = useQuery<Feedback[]>({
    queryKey: ['popularFeedback'],
    queryFn: () => fetchFeedbackByType('popular'),
  })

  const recentQuery = useQuery<Feedback[]>({
    queryKey: ['recentFeedback'],
    queryFn: () => fetchFeedbackByType('recent'),
  })

  const personalizedQuery = useQuery<Feedback[]>({
    queryKey: ['personalizedFeedback'],
    queryFn: () => fetchFeedbackByType('personalized'),
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
