import type { Feedback } from '@/mocks/handlers/feedback/feedback'
import StarRating from '@/components/common/StarRating'

interface ReviewSectionProps {
  feedbackData?: Feedback[]
}

const ReviewSection = ({ feedbackData }: ReviewSectionProps) => {
  return (
    <div className="relative mx-auto mt-[300px] mb-[100px] w-[1280px]">
      <h2 className="text-[18px] font-bold text-black">상품 후기</h2>
      <div className="mt-[43px] h-[2px] w-full bg-black" />

      <div className="mt-[30px]">
        {feedbackData?.slice(0, 4).map((feedback: Feedback) => (
          <div
            key={feedback.id}
            className="border-b border-[#D9D9D9] last:border-b-0"
          >
            <div className="flex py-[20px]">
              <div className="mr-[31px] h-[200px] w-[252px] flex-shrink-0 rounded-[10px] bg-gray-200">
                {feedback.photo_url && (
                  <img
                    src={feedback.photo_url}
                    alt="리뷰 이미지"
                    className="h-full w-full rounded-[10px] object-cover"
                  />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <StarRating
                      rating={feedback.overall_rating}
                      readOnly
                      size={30}
                      showRatingValue={false}
                      className="mb-[13px]"
                    />
                    <p className="max-w-[560px] text-[22px] leading-[150%] font-normal tracking-[-0.02em] text-[#333333]">
                      {feedback.comment}
                    </p>
                  </div>

                  <div className="ml-4 text-center text-[22px] leading-[150%] font-normal tracking-[-0.02em] text-[#666666]">
                    {feedback.user}{' '}
                    {new Date(feedback.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewSection
