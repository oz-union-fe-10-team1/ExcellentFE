import { useMutation } from '@tanstack/react-query'
import { feedbackApi } from '@/api/feedback'
import type { FeedbackRequest } from '@/api/feedback/types'

const useSubmitFeedback = () => {
  return useMutation({
    mutationFn: async (data: FeedbackRequest) => {
      return feedbackApi.submit(data)
    },
  })
}

export default useSubmitFeedback
