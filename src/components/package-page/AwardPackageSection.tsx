import type { CardBaseProps } from '@/types/cardProps'
import Carousel from '@/components/common/Carousel'

const AwardPackageSection = ({
  awardCards,
}: {
  awardCards: CardBaseProps[]
}) => {
  return (
    <section className="h-[704px] bg-[#f2f2f2] py-25">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-[#333333]">
            주류 대상 수상 5종 패키지
          </h2>
          <p className="text-[#666666]">수상 대상 수상 등급 패키지</p>
        </div>
        <Carousel cards={awardCards} />
      </div>
    </section>
  )
}

export default AwardPackageSection
