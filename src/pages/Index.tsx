import { useNavigate } from 'react-router-dom'
import CardList from '@/components/common/cards/CardList'
import Carousel from '@/components/common/Carousel'
import Button from '@/components/common/Button'
import { useHomePage } from '@/hooks/useHomePage'
import banner from '@/assets/images/mainPage/banner.png'

const HomePage = () => {
  const navigate = useNavigate()
  const { loading, monthlyProducts, popularPackages, recommendedProducts } =
    useHomePage()

  const handleTestButtonClick = () => {
    navigate('/test')
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        로딩 중...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <section className="relative h-[650px]">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${banner}')` }}
        />
        <div className="relative z-10 container mx-auto flex h-full items-center">
          <div className="max-w-2xl">
            <p className="mb-[30px] text-xl text-[#333333]">
              나의 입맛 전통주, 어떤 것이 내 취향일지 모르겠다구요?
            </p>
            <h1 className="mb-2 text-[40px] font-bold text-[#333333]">
              당신의 전통주 한 잔,
            </h1>
            <h2 className="mb-2 text-[40px] font-bold text-[#333333]">
              한 잔 취향만의 입맛 테스트를 통해
            </h2>
            <h3 className="mb-10 text-[40px] font-bold text-[#333333]">
              당신의 맛을 찾아보세요!
            </h3>
            <Button variant="VARIANT9" onClick={handleTestButtonClick}>
              지금 테스트하러 가기
            </Button>
          </div>
        </div>
      </section>

      {/* 이달의 전통주 섹션 */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-row items-start gap-12">
            <div className="w-80 flex-shrink-0">
              <h2 className="mb-4 text-3xl font-bold text-[#333333]">
                이달의 전통주
              </h2>
              <p className="text-[#666666]">
                한 잔 취향이 추천하는 테스트를통해{' '}
              </p>
              <p className="text-[#666666]">입맛에 맞는 술 찾아보세요</p>
            </div>
            <div className="flex-1">
              <CardList type="default" cards={monthlyProducts} />
            </div>
          </div>
        </div>
      </section>

      {/* 인기 패키지 섹션 */}
      <section className="h-[704px] bg-[#f2f2f2] py-25">
        <div className="container mx-auto">
          <div className="text-lefts mb-12">
            <h2 className="mb-4 text-3xl font-bold text-[#333333]">
              인기 패키지
            </h2>
            <p className="text-[#666666]">한 잔 취향 유저들의 Pick!</p>
          </div>
          <Carousel cards={popularPackages} />
        </div>
      </section>

      {/* 추천 전통주 섹션 */}
      <section className="mb-80 py-25">
        <div className="container mx-auto">
          <div className="mb-12 text-left">
            <h2 className="mb-4 text-3xl font-bold text-[#333333]">
              추천 전통주
            </h2>
            <p className="text-[#666666]">한 잔 취향에서 엄선한 추천 전통주</p>
          </div>
          <CardList type="default" cards={recommendedProducts} />
        </div>
      </section>
    </div>
  )
}

export default HomePage
