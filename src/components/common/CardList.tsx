import type { CardProps } from '@/types/cardProps'
import Card from './Card'

interface CardListProps {
  cards: CardProps[]
}

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="mx-auto grid max-w-[1281px] grid-cols-4 gap-[27px]">
      {cards.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  )
}

export default CardList
