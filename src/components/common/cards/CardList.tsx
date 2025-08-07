import type {
  CardBaseProps,
  ReviewCardProps,
  TestCardProps,
} from '@/types/cardProps'
import Card from '@/components/common/cards/Card.tsx'

type CardListProps =
  | { type: 'default'; cards: CardBaseProps[] }
  | { type: 'review'; cards: ReviewCardProps[] }
  | { type: 'test'; cards: TestCardProps[] }

const CardList = (props: CardListProps) => {
  return (
    <div className="mx-auto grid max-w-[1281px] grid-cols-4 gap-[27px]">
      {props.cards.map((card, i) => (
        <Card key={i} type={props.type} data={card} />
      ))}
    </div>
  )
}

export default CardList
