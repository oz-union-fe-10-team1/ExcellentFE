import type { CardBaseProps } from '@/types/cardProps'
import CardList from '@/components/common/cards/CardList'

const RecommendedPackageSection = ({
  recommendedCards,
}: {
  recommendedCards: CardBaseProps[]
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-[#333333]">
            추천 패키지
          </h2>
          <p className="text-[#666666]">오직 {}의 취향을 반영한 패키지</p>
        </div>
        <CardList type="default" cards={recommendedCards} />
      </div>
    </section>
  )
}

export default RecommendedPackageSection
