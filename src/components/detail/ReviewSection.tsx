import StarRating from '@/components/common/StarRating'
import type { Feedback } from '@/types/feedback'

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
              {/* 썸네일 이미지 - 기본 플레이스홀더 */}
              <div className="mr-[31px] flex h-[200px] w-[252px] flex-shrink-0 items-center justify-center rounded-[10px] bg-gray-200">
                <span className="text-sm text-gray-500">이미지 없음</span>
              </div>

              {/* 후기 내용 */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <StarRating
                      rating={feedback.rating}
                      readOnly
                      size={30}
                      showRatingValue={false}
                      className="mb-[13px]"
                    />
                    <p className="max-w-[560px] text-[22px] leading-[150%] font-normal tracking-[-0.02em] text-[#333333]">
                      {feedback.comment}
                    </p>

                    {/* 신뢰도 표시 */}
                    <div className="mt-2 text-[14px] text-[#666666]">
                      신뢰도: {feedback.confidence}%
                    </div>
                  </div>

                  {/* 작성일 정보 */}
                  <div className="ml-4 text-center text-[22px] leading-[150%] font-normal tracking-[-0.02em] text-[#666666]">
                    {new Date(feedback.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 후기가 없을 때 */}
        {(!feedbackData || feedbackData.length === 0) && (
          <div className="py-20 text-center text-[#666666]">
            아직 등록된 후기가 없습니다.
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewSection
