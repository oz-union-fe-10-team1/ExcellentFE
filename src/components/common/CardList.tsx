import type {
  CardBaseProps,
  ReviewCardProps,
  TestCardProps,
} from '@/types/cardProps'
import Card from './Card/Card'

type CardListProps =
  | { type: 'default'; cards: CardBaseProps[] }
  | { type: 'review'; cards: ReviewCardProps[] }
  | { type: 'test'; cards: TestCardProps[] }

const CardList = ({ cards, type }: CardListProps) => {
  return (
    <div className="mx-auto grid max-w-[1281px] grid-cols-4 gap-[27px]">
      {cards.map((card, i) => (
        <Card key={i} type={type} data={card} />
      ))}
    </div>
  )
}

export default CardList
