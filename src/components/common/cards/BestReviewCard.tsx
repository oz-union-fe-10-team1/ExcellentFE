import maskingUserId from '@/utils/masking'
import StarRating from '../StarRating'
import Button from '../Button'

interface BestReviewCardProps {
  imgSrc: string
  imgAlt: string
  review: string
  userId: string
  defaultRating: number
  date: string
}

const BestReviewCard = ({
  imgSrc,
  imgAlt,
  review,
  userId,
  date,
  defaultRating,
}: BestReviewCardProps) => {
  return (
    <div className="flex h-123 w-316 items-center justify-center gap-19">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-123 w-155 border border-[#333333]"
      />
      <div className="flex h-[439px] w-[570px] flex-col">
        <StarRating
          totalStars={5}
          readOnly
          defaultRating={defaultRating}
          size={25}
          showRatingValue={false}
          className="mb-[23px]"
        />
        <p className="w-140 text-[22px] text-[#333333]">{review}</p>
        <div className="mt-15 mb-[50px] flex w-[281px] justify-between text-[22px] text-[#666666]">
          <p> {userId ? maskingUserId(userId) : 'Unknown User'}</p>
          <p>{date ? date.slice(0, 10) : ''}</p>
        </div>
        <Button className="w-[570px]">이 전통주가 궁금하다면?</Button>
      </div>
    </div>
  )
}

export default BestReviewCard
