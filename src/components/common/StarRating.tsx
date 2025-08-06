import Icon from './Icon'
import StarIcon from '@/assets/icons/starRating/star-rating.svg?react'
import type { StarRatingProps } from '@/types/starRating'
import useStarRating from '@/hooks/useStarRating'
import { cn } from '@/utils/cn'

const StarRating = ({
  totalStars = 5,
  rating,
  defaultRating = 0,
  onChange,
  readOnly = false,
  showRatingValue = true,
  size = 18,
  className,
}: StarRatingProps) => {
  const {
    rating: currentRating,
    handleClick,
    getFillWidth,
  } = useStarRating({
    rating,
    defaultRating,
    onChange,
    readOnly,
  })
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
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
              <Icon icon={StarIcon} size={size} cursor={!readOnly} />
            </span>
          </div>
        ))}
      </div>

      {showRatingValue && (
        <span
          className={cn(
            'ml-2 font-bold text-[#333333]',
            readOnly ? 'text-base' : 'ml-5 text-5xl'
          )}
        >
          {currentRating.toFixed(1)}
        </span>
      )}
    </div>
  )
}

export default StarRating
