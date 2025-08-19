import type {
  CardBaseProps,
  ReviewCardProps,
  TestCardProps,
  BestReviewCardProps,
} from '@/types/cardProps'
import Card from '@/components/common/cards/Card.tsx'

type CardListProps =
  | { type: 'default'; cards: CardBaseProps[] }
  | { type: 'review'; cards: ReviewCardProps[] }
  | { type: 'test'; cards: TestCardProps[] }
  | { type: 'best'; cards: BestReviewCardProps[] }

const CardList = (props: CardListProps) => {
  return (
    <div className="flex max-w-[1281px] flex-wrap gap-[27px]">
      {props.cards.map((card, i) => {
        switch (props.type) {
          case 'default':
            return <Card key={i} type="default" data={card as CardBaseProps} />
          case 'review':
            return <Card key={i} type="review" data={card as ReviewCardProps} />
          case 'test':
            return <Card key={i} type="test" data={card as TestCardProps} />
          case 'best':
            return (
              <Card key={i} type="best" data={card as BestReviewCardProps} />
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default CardList
