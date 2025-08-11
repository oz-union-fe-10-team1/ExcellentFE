import Slider from '@/components/common/Slider'
import { TASTE_SLIDERS } from '@/constants/feedbackReview'
import type { TastingReview } from '@/types/feedback'

interface ReviewSliderProps {
  review: TastingReview
  updateReview: (field: keyof TastingReview, value: number) => void
}

const ReviewSlider = ({ review, updateReview }: ReviewSliderProps) => {
  return (
    <div>
      <p className="border-b-2 pb-3 text-xl font-bold text-[#333333]">
        시음 평가
      </p>
      <div className="mt-7 flex flex-col items-center gap-7">
        {TASTE_SLIDERS.map((slider) => (
          <Slider
            key={slider.key}
            label={slider.label}
            variant={slider.variant}
            value={[review[slider.key]]}
            onValueChange={(vals) => updateReview(slider.key, vals[0] ?? 0)}
          />
        ))}
      </div>
      <div className="mt-12 flex h-43 w-full flex-col justify-center gap-7 bg-[#f2f2f2]">
        <p className="text-center text-xl font-bold text-[#333333]">
          오늘 내 입맛 신뢰도는 몇 %인가요?
        </p>
        <Slider
          variant="trust"
          max={100}
          value={[review.confidence]}
          onValueChange={(vals) => updateReview('confidence', vals[0] ?? 0)}
        />
      </div>
    </div>
  )
}

export default ReviewSlider
