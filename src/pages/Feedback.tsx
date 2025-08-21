import type { Feedback as FeedbackType } from '@/api/feedback/types'
import ResetIcon from '@/assets/icons/feedback/reset.svg?react'
import Carousel from '@/components/common/Carousel'
import Icon from '@/components/common/Icon'
import BestReviewCard from '@/components/common/cards/BestReviewCard'
import CardList from '@/components/common/cards/CardList'
import { useFeedbackList } from '@/hooks/useFeedbackList'
import type {
  BestReviewCardProps,
  CardBaseProps,
  ReviewCardProps,
} from '@/types/cardProps'

export const Feedback = () => {
  const {
    popular,
    recent,
    personalized,
    refetchPersonalized,
    refetchRecent,
    isLoading,
    isError,
  } = useFeedbackList()

  if (isLoading) return <p>로딩중...</p>
  if (isError) return <p>데이터를 불러오는데 실패했습니다.</p>

  const bestReviewCards =
    popular?.map((item) => ({
      product_id: String(item.product_id),
      product_name: item.product_name ?? '',
      imgSrc: item.image_url || undefined,
      imgAlt: item.product_name ?? '모은 주류',
      review: item.comment ?? undefined,
      userId: item.masked_username ?? undefined,
      date: item.created_at ?? undefined,
      defaultRating: item.rating ?? 0,
    })) ?? []

  const renderBestReviewCard = (item: BestReviewCardProps | CardBaseProps) => {
    if ('review' in item) {
      return <BestReviewCard {...item} />
    }
    return null
  }

  const mapToReviewCards = (
    data: FeedbackType[] | undefined,
    modalTitle: string
  ): ReviewCardProps[] =>
    data?.map((item) => ({
      id: String(item.id),
      product_id: String(item.product_id),
      product_name: item.product_name ?? '',
      imgSrc: item.image_url || undefined,
      imgAlt: item.product_name ?? '모은 주류',
      userId: item.masked_username,
      review: item.comment,
      defaultRating: item.rating,
      date: item.created_at,
      modalTitle,
    })) ?? []

  const renderReviewSection = (
    title: string,
    description: string,
    data: FeedbackType[],
    onReset: () => void
  ) => (
    <div className="flex flex-col gap-[50px]">
      <div className="flex w-320 flex-col gap-[10px]">
        <h2 className="text-[32px] font-bold text-[#333333]">{title}</h2>
        <div className="flex items-center justify-between">
          <h5 className="text-[18px] text-[#666666]">{description}</h5>
          <button onClick={onReset}>
            <Icon icon={ResetIcon} size={40} />
          </button>
        </div>
      </div>
      <CardList type="review" cards={mapToReviewCards(data, title)} />
    </div>
  )

  return (
    <div>
      <div className="flex h-220 w-full flex-col items-center bg-[#F2F2F2] px-60 py-34">
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
        <div className="m-auto my-25 flex flex-col items-center gap-25">
          {renderReviewSection(
            '실시간 후기',
            '한 잔 취향을 이용한 고객님들의 실시간 후기',
            recent || [],
            refetchRecent
          )}
          {renderReviewSection(
            '나와 비슷한 취향의 후기',
            '나와 비슷한 취향의 고객님들의 후기',
            personalized || [],
            refetchPersonalized
          )}
        </div>
      </div>
    </div>
  )
}

export default Feedback
