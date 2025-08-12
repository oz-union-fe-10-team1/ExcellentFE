import { getFeedbackProfile } from '@/api/feedback'
import { tokenStorage } from '@/utils/tokenStorage'
import { useQuery } from '@tanstack/react-query'

export const useFeedbackProfile = () => {
  const accessToken = tokenStorage.getAccessToken()

  return useQuery({
    queryKey: ['feedback', accessToken],
    queryFn: getFeedbackProfile,
    enabled: !!accessToken,
  })
}
