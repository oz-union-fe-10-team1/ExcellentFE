import Carousel from '@/components/common/Carousel'
import type { CardBaseProps } from '@/types/cardProps'

const PopularSection = ({
  popularCards,
}: {
  popularCards: CardBaseProps[]
}) => {
  return (
    <section className="h-[704px] bg-[#f2f2f2] py-25">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-[#333333]">
            인기 패키지
          </h2>
          <p className="text-[#666666]">한 잔 취향 유저들의 Pick!</p>
        </div>
        <Carousel cards={popularCards} />
      </div>
    </section>
  )
}

export default PopularSection
