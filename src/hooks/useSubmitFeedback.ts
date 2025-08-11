import { feedbackApi } from '@/api/feedback'
import type { FeedbackRequest } from '@/api/feedback/types'
import { useMutation } from '@tanstack/react-query'

const useSubmitFeedback = () => {
  return useMutation({
    mutationFn: (data: FeedbackRequest) => feedbackApi.submit(data),
  })
}

export default useSubmitFeedback
