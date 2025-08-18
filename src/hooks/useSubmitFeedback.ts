import { feedbackApi } from '@/api/feedback'
import type { FeedbackRequest } from '@/api/feedback/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useSubmitFeedback = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: FeedbackRequest) => feedbackApi.submit(data),

    onSuccess: () => {
      alert('후기 등록이 완료되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['orders'] })
      queryClient.invalidateQueries({ queryKey: ['tasting-history'] })
    },

    onError: () => {
      alert('후기 등록이 실패했습니다.')
    },
  })
}

export default useSubmitFeedback
