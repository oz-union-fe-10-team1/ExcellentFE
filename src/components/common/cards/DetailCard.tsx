import type { CardBaseProps } from '@/types/cardProps'
import HeartButton from '@/components/common/HeartButton.tsx'
import { useState } from 'react'

interface DetailCardProps extends CardBaseProps {
  className?: string
}

const DetailCard = ({ imgSrc, imgAlt, className }: DetailCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <div className={className}>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[6px] border border-[#D9D9D9] bg-gray-200">
        <img src={imgSrc} alt={imgAlt} className="h-full w-full object-cover" />
        <HeartButton
          isLiked={isLiked}
          onClick={() => setIsLiked((prev) => !prev)}
          className="absolute right-2 bottom-2"
        />
      </div>
    </div>
  )
}

export default DetailCard
