import { useQuery } from '@tanstack/react-query'
import { userApi } from '@/api/user'

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: userApi.getProfile,
  })
}

export const useFeedbackProfile = () => {
  return useQuery({
    queryKey: ['feedbackProfile'],
    queryFn: userApi.getTasteProfile,
  })
}
