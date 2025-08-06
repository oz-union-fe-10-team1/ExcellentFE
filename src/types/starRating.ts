export interface UseStarRatingProps {
  defaultRating?: number
  onChange?: (value: number) => void
  readOnly?: boolean
  rating?: number
}

export interface StarRatingProps extends UseStarRatingProps {
  totalStars?: number
  size?: number
  className?: string
  showRatingValue?: boolean
}
