import heartButton from '@/assets/icons/card/heartButton.svg?react'
import Icon from '@/components/common/Icon.tsx'
import fullHeart from '@/assets/icons/card/fullHeart.svg?react'

interface HeartButtonProps {
  className?: string
  isLiked: boolean
  onClick: () => void
}

const HeartButton = ({
  className = '',
  isLiked,
  onClick,
}: HeartButtonProps) => {
  const icon = isLiked ? fullHeart : heartButton
  return (
    <button
      className="z-10 rounded-full bg-white p-1 shadow-md"
      aria-label={isLiked ? '찜 취소' : '찜하기'}
      type="button"
      onClick={onClick}
    >
      <Icon icon={icon} size={30} />
    </button>
  )
}

export default HeartButton
