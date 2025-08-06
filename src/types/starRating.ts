export interface UseStarRatingProps {
  defaultRating?: number
  onChange?: (value: number) => void
  readOnly?: boolean
}

export interface StarRatingProps extends UseStarRatingProps {
  totalStars?: number
  size?: number
  className?: string
}
