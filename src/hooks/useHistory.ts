import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const getFeedbackList = async () => {
  const res = await axios.get('/api/v1/feedbacks')
  return res.data
}

const useHistory = () => {
  const { data, isLoading, isFetched, error, isError } = useQuery({
    queryKey: ['historyList'],
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

export default useHistory
