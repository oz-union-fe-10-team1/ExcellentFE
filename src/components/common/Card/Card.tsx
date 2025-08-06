import type {
  CardBaseProps,
  ReviewCardProps,
  TestCardProps,
} from '@/types/cardProps'
import TestCard from './TestCard'
import CardBase from '../CardBase'
import ReviewCard from './ReviewCard'

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
