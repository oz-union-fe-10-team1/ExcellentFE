import { feedbackApi } from '@/api/feedback'
import type { FeedbackRequest } from '@/api/feedback/types'
import { useMutation } from '@tanstack/react-query'

const useSubmitFeedback = () => {
  return useMutation({
    mutationFn: (data: FeedbackRequest) => feedbackApi.submit(data),

    /* TODO: 추후 슬비님 PR 들어오면 수정 예정 임시 alert */
    onSuccess: () => {
      alert('후기 등록이 완료되었습니다.')
    },

    onError: () => {
      alert('후기 등록이 실패했습니다.')
    },
  })
}

export default useSubmitFeedback
