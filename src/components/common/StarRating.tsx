import Icon from './Icon'
import StarIcon from '@/assets/icons/starRating/Star.svg?react'
import type { StarRatingProps } from '@/types/starRating'
import useStarRating from '@/hooks/useStarRating'

const StarRating = ({
  totalStars = 5,
  defaultRating = 0,
  onChange,
  readOnly = false,
  size = 18,
  className,
}: StarRatingProps) => {
  const { handleClick, getFillWidth } = useStarRating({
    defaultRating,
    onChange,
    readOnly,
  })

  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: totalStars }).map((_, index) => (
        <div
          key={index}
          className="relative select-none"
          onClick={(e) => handleClick(e, index)}
        >
          <span className="text-[#f2f2f2]">
            <Icon icon={StarIcon} size={size} cursor={!readOnly} />
          </span>
          <span
            className="absolute top-0 left-0 overflow-hidden text-[#f2544b]"
            style={{ width: `${getFillWidth(index) * 100}%` }}
          >
            <Icon icon={StarIcon} size={size} />
          </span>
        </div>
      ))}
    </div>
  )
}

export default StarRating
