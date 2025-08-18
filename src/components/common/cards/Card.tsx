import type {
  CardBaseProps,
  ReviewCardProps,
  TestCardProps,
  BestReviewCardProps,
} from '@/types/cardProps'

import CardBase from '@/components/common/cards/CardBase.tsx'
import ReviewCard from '@/components/common/cards/ReviewCard.tsx'
import TestCard from '@/components/common/cards/TestCard.tsx'
import BestReviewCard from '@/components/common/cards/BestReviewCard.tsx'

interface DefaultType {
  type: 'default'
  data: CardBaseProps
}

interface ReviewType {
  type: 'review'
  data: ReviewCardProps
}

interface TestType {
  type: 'test'
  data: TestCardProps
}

interface BestCardType {
  type: 'best'
  data: BestReviewCardProps
}

export type CardType = DefaultType | ReviewType | TestType | BestCardType

const Card = ({ type, data }: CardType) => {
  switch (type) {
    case 'review':
      return (
        <ReviewCard
          imgSrc={data.imgSrc || ''}
          imgAlt={data.imgAlt || '모은 주류'}
          userId={data.userId || ''}
          review={data.review || ''}
          defaultRating={Number(data.defaultRating) || 0}
          modalTitle={data.modalTitle || ''}
        />
      )
    case 'test':
      return (
        <TestCard
          imgSrc={data.imgSrc || ''}
          imgAlt={data.imgAlt || '모은 주류'}
          title={data.title || '모은 주류'}
          subtitle={data.subtitle || '모은 주류'}
          firstLabel={data.firstLabel || ''}
          secondLabel={data.secondLabel || ''}
        />
      )
    case 'default':
      return (
        <CardBase
          id={(data as CardBaseProps).id}
          productType={(data as CardBaseProps).productType}
          imgSrc={data.imgSrc || ''}
          imgAlt={data.imgAlt || '모은 주류'}
          title={data.title || '모은'}
          subtitle={data.subtitle || '모은 주류'}
          price={data.price || 0}
        />
      )
    case 'best':
      return (
        <BestReviewCard
          imgSrc={data.imgSrc || ''}
          imgAlt={data.imgAlt || '모은 주류'}
          userId={data.userId || ''}
          review={data.review || ''}
          date={data.date || ''}
          defaultRating={Number(data.rating) || 0}
        />
      )
  }
}

export default Card
