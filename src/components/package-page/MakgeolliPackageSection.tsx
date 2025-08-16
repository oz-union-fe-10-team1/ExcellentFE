import type { CardBaseProps } from '@/types/cardProps'
import CardList from '@/components/common/cards/CardList'

const MakgeolliPackageSection = ({
  makgeolliCards,
}: {
  makgeolliCards: CardBaseProps[]
}) => {
  return (
    <section className="py-25">
      <div className="container mx-auto">
        <div className="mb-12 text-left">
          <h2 className="mb-4 text-3xl font-bold text-[#333333]">
            막걸리 패키지
          </h2>
          <p className="text-[#666666]">막걸리 러버들을 위한 전용 패키지</p>
        </div>
        <CardList type="default" cards={makgeolliCards} />
      </div>
    </section>
  )
}

export default MakgeolliPackageSection
