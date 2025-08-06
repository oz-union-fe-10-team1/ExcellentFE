import type { ReviewCardProps } from '@/types/cardProps'
import maskingUserId from '@/utils/masking'
import HeartButton from '../HeartButton'
import { useState } from 'react'

const ReviewCard = ({
  imgSrc,
  imgAlt,
  starRating,
  userId,
  review,
}: ReviewCardProps) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="flex w-[300px] flex-col">
      <div className="relative mb-5 flex h-[290px] w-full items-center justify-center overflow-hidden rounded-[6px] border border-[#D9D9D9] bg-gray-200">
        <img src={imgSrc} alt={imgAlt} className="h-full w-full object-cover" />
        <HeartButton
          isLiked={isLiked}
          onClick={() => setIsLiked((prev) => !prev)}
        />
      </div>
      <div className="flex justify-between">
        <p>별점: {starRating}</p>
        <p className="text-[#666666]">
          {' '}
          {userId ? maskingUserId(userId) : 'Unknown User'}
        </p>
      </div>
      <p className="text-[15px] break-words text-[#666666]"> {review}</p>
    </div>
  )
}

export default ReviewCard
