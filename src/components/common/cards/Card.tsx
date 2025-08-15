import type {
  CardBaseProps,
  ReviewCardProps,
  TestCardProps,
} from '@/types/cardProps'

import CardBase from '@/components/common/cards/CardBase.tsx'
import ReviewCard from '@/components/common/cards/ReviewCard.tsx'
import TestCard from '@/components/common/cards/TestCard.tsx'

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

export type CardType = DefaultType | ReviewType | TestType

const Card = ({ type, data }: CardType) => {
  switch (type) {
    case 'review':
      return (
        <ReviewCard
          imgSrc={data.imgSrc || ''}
          imgAlt={data.imgAlt || '모은 주류'}
          starRating={data.starRating || 0}
          userId={data.userId || ''}
          review={data.review || ''}
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
  }
}

export default Card
