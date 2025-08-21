import CardList from '@/components/common/cards/CardList'
import type { CardBaseProps } from '@/types/cardProps'

const RecommendedSection = ({
  recommendedCards,
}: {
  recommendedCards: CardBaseProps[]
}) => {
  return (
    <section className="mb-80 py-25">
      <div className="container mx-auto">
        <div className="mb-12 text-left">
          <h2 className="mb-4 text-3xl font-bold text-[#333333]">
            추천 전통주
          </h2>
          <p className="text-[#666666]">한 잔 취향에서 엄선한 추천 전통주</p>
        </div>
        <CardList type="default" cards={recommendedCards} />
      </div>
    </section>
  )
}

export default RecommendedSection
