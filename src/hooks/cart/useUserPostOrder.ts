import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { orderApi } from '@/api/order'
import { showSuccess, showError } from '@/utils/feedbackUtils'

const useUserPostOrder = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const postOrderMutation = useMutation({
    mutationFn: (itemIds: number[]) => orderApi.CREATE_FROM_CART(itemIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['UserCart'] })
      queryClient.invalidateQueries({ queryKey: ['orders'] })
      showSuccess('주문이 완료되었습니다.')
      navigate('/mypage/order-history')
    },
    onError: () => {
      showError('주문 처리 중 오류가 발생했습니다.')
    },
  })

  return {
    postOrderMutation,
  }
}

export default useUserPostOrder
