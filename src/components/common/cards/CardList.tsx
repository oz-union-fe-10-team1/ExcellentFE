import type {
  CardBaseProps,
  ReviewCardProps,
  TestCardProps,
} from '@/types/cardProps'
import Card from '@/components/common/cards/Card.tsx'

type CardListProps =
  | { type: 'default'; cards: CardBaseProps[]; columns?: 3 | 4 }
  | { type: 'review'; cards: ReviewCardProps[]; columns?: 3 | 4 }
  | { type: 'test'; cards: TestCardProps[]; columns?: 3 | 4 }

const CardList = (props: CardListProps) => {
  const columns = props.columns ?? 4

  const colClass = columns === 3 ? 'grid-cols-3' : 'grid-cols-4'

  return (
    <div className={`mx-auto grid max-w-[1281px] gap-[27px] ${colClass}`}>
      {props.cards.map((card, i) => (
        <Card key={i} type={props.type} data={card} />
      ))}
    </div>
  )
}

export default CardList
