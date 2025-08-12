import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ItemRowType } from '@/types/ItemRow/itemRows'

interface UseOrderItemRowProps {
  id: ItemRowType['id']
  feedback_id: ItemRowType['feedback_id']
}

export const useOrderItemRow = ({ id, feedback_id }: UseOrderItemRowProps) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isFeedbackNull = feedback_id == null

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleClick = () => {
    if (isFeedbackNull) {
      openModal()
    } else {
      navigate(`/product/${feedback_id}`)
    }
  }

  const getOrderItemId = () => {
    return typeof id === 'string' ? Number(id) : id
  }

  const getButtonConfig = () => ({
    variant: isFeedbackNull ? ('VARIANT6' as const) : ('VARIANT5' as const),
    text: isFeedbackNull ? '후기 남기기' : '본품 구매하기',
    className: isFeedbackNull ? 'text-[#333333]' : 'text-white',
  })

  return {
    isModalOpen,
    isFeedbackNull,
    handleClick,
    closeModal,
    getOrderItemId,
    getButtonConfig,
  }
}
