import CardList from '@/components/common/cards/CardList'
import type { CardBaseProps } from '@/types/cardProps'

const MonthProductsSection = ({
  monthCards,
}: {
  monthCards: CardBaseProps[]
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-row items-start">
          <div className="w-80 flex-shrink-0">
            <h2 className="mb-4 text-3xl font-bold text-[#333333]">
              이달의 전통주
            </h2>
            <p className="text-[#666666]">
              한 잔 취향이 추천하는 테스트를 통해
            </p>
            <p className="text-[#666666]">입맛에 맞는 술 찾아보세요</p>
          </div>
          <CardList type="default" cards={monthCards} columns={3} />
        </div>
      </div>
    </section>
  )
}

export default MonthProductsSection
