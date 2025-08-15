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
  const columns = props.columns ?? 4

  const colClass = columns === 3 ? 'grid-cols-3' : 'grid-cols-4'

  return (
    <div className="mx-auto grid max-w-[1281px] grid-cols-4 gap-[27px]">
      {props.cards.map((card, i) => {
        // 판별 유니온을 일치시키기 위한 타입 단언
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
