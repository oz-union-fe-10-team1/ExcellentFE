import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export const getFeedbackList = async () => {
  const res = await axios.get('/api/v1/feedbacks')
  return res.data
}

export const useFeedbackList = () => {
  const { data, isLoading, isFetched, error, isError } = useQuery({
    queryKey: ['feedbackList'],
    queryFn: getFeedbackList,
  })

  return {
    data,
    isLoading,
    error,
    isError,
    isFetched,
  }
}
