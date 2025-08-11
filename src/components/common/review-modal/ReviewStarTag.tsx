import Button from '@/components/common/Button'
import StarRating from '@/components/common/StarRating'
import { TASTE_TAGS, MAX_SELECTED_TAGS } from '@/constants/feedbackReview'
import type { TastingReview } from '@/types/feedback'
import { cn } from '@/utils/cn'

interface ReviewStarTagProps {
  review: TastingReview
  updateReview: (field: keyof TastingReview, value: number) => void
  selectedTags: string[]
  handleToggleTag: (tagValue: string) => void
}

const ReviewStarTag = ({
  review,
  updateReview,
  selectedTags,
  handleToggleTag,
}: ReviewStarTagProps) => {
  return (
    <>
      <div className="mt-12 flex w-full flex-col items-center">
        <p className="text-lg font-bold text-[#333333]">전체 평점</p>
        <StarRating
          size={51}
          showRatingValue={false}
          className="mt-5"
          rating={review.rating}
          onChange={(value) => updateReview('rating', value)}
        />
      </div>
      <div className="mt-12 flex flex-wrap gap-2">
        {TASTE_TAGS.map((tag) => {
          const isSelected = selectedTags.includes(tag.value)
          return (
            <Button
              key={tag.value}
              variant="VARIANT10"
              onClick={() => handleToggleTag(tag.value)}
              className={cn(
                'border-[#f2544b]',
                isSelected
                  ? 'bg-[#f2544b] text-white'
                  : 'text-[#f2544b] hover:bg-[#fff1f0]'
              )}
            >
              {tag.label}
            </Button>
          )
        })}
      </div>
      <p className="mt-3 text-xs text-[#666666]">
        최대 {MAX_SELECTED_TAGS}개 선택 ({selectedTags.length}/
        {MAX_SELECTED_TAGS})
      </p>
    </>
  )
}

export default ReviewStarTag
