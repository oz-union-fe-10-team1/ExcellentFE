import Icon from '@/components/common/Icon'
import ResetIcon from '@/assets/icons/feedback/reset.svg?react'
import CardList from '@/components/common/cards/CardList'
import { useFeedbackList } from '@/hooks/useFeedbackList'
import Carousel from '@/components/common/Carousel'
import BestReviewCard from '@/components/common/cards/BestReviewCard'
import type { BestReviewCardProps, CardBaseProps } from '@/types/cardProps'

export const Feedback = () => {
  const { data, isLoading, isError } = useFeedbackList()
  console.log(data)

  if (isLoading) return <p>로딩중...</p>
  if (isError) return <p>데이터를 불러오는데 실패했습니다.</p>

  const bestReviewCards =
    data?.map((item) => ({
      imgSrc: item.product?.main_image_url ?? '',
      imgAlt: item.product?.name ?? '',
      review: item.comment ?? '',
      userId: item.user_id ?? '',
      date: item.created_at ?? '',
      defaultRating: item.rating ?? 0,
    })) ?? []

  const renderBestReviewCard = (item: BestReviewCardProps | CardBaseProps) => {
    if ('review' in item) {
      return (
        <BestReviewCard
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          review={item.review}
          userId={item.userId}
          date={item.date}
          defaultRating={item.defaultRating}
        />
      )
    }

    return null
  }

  return (
    <div>
      <div className="flex h-200 w-full flex-col items-center bg-[#F2F2F2] px-60 py-25">
        <h1 className="mb-[60px] text-[40px] font-bold text-[#333333]">
          한 잔 취향 이 달의 후기
        </h1>
        <div>
          <Carousel
            cards={bestReviewCards}
            renderCard={renderBestReviewCard}
            slidesToShow={1}
            gap="200px"
          />
        </div>
      </div>

      <div className="m-auto my-25 flex flex-col items-center gap-25">
        <div className="flex flex-col gap-[50px]">
          <div className="flex w-320 flex-col gap-[10px]">
            <h2 className="text-[32px] font-bold text-[#333333]">
              실시간 후기
            </h2>
            <div className="flex items-center justify-between">
              <h5 className="text-[18px] text-[#666666]">
                한 잔 취향을 이용한 고객님들의 실시간 후기
              </h5>
              <Icon icon={ResetIcon} size={40} />
            </div>
          </div>
          <CardList
            type="review"
            cards={
              data?.slice(0, 4).map((item) => ({
                imgSrc: item.product?.main_image_url ?? '',
                imgAlt: item.product?.name ?? '',
                userId: item.user_id ?? '',
                review: item.comment,
                defaultRating: item?.rating ?? 0,
              })) ?? []
            }
          />
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] flex w-320 flex-col gap-[10px]">
            <h2 className="text-[32px] font-bold text-[#333333]">
              나와 비슷한 취향의 후기
            </h2>
            <div className="flex items-center justify-between">
              <h5 className="text-[18px] text-[#666666]">
                한 잔 취향을 이용한 고객님들의 실시간 후기
              </h5>
              <Icon icon={ResetIcon} size={40} />
            </div>
          </div>
          <CardList
            type="review"
            cards={
              data?.slice(0, 8).map((item) => ({
                imgSrc: item.product?.main_image_url ?? '',
                imgAlt: item.product?.name ?? '',
                userId: item.user_id ?? '',
                review: item.comment,
                defaultRating: item?.rating ?? 0,
              })) ?? []
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Feedback
