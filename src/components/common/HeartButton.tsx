import heartButton from '@/assets/icons/card/heartButton.svg?react'
import Icon from './Icon'
import fullHeart from '@/assets/icons/card/fullHeart.svg?react'

interface HeartButtonProps {
  isLiked: boolean
  onClick: () => void
}

const HeartButton = ({ isLiked, onClick }: HeartButtonProps) => {
  const icon = isLiked ? fullHeart : heartButton
  return (
    <button
      className="absolute top-2 right-2 z-10 rounded-full bg-white p-1 shadow-md"
      aria-label="찜하기"
      type="button"
      onClick={onClick}
    >
      <Icon icon={icon} size={30} />
    </button>
  )
}

export default HeartButton
