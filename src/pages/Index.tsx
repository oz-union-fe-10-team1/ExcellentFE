import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import banner from '@/assets/images/mainPage/banner.png'
import type { CardBaseProps } from '@/types/cardProps'
import { useMainProducts } from '@/hooks/home/useMainProduct'
import MonthProductsSection from '@/components/main-page/MonthProductsSection'
import PopularSection from '@/components/main-page/PopularSection'
import RecommendedSection from '@/components/main-page/RecommendedSection'
import type { Product } from '@/types/product'

const Home = () => {
  const { month, popular, recommended, anyLoading, anyError, retryAll } =
    useMainProducts()

  if (anyLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mb-4 text-lg">로딩 중...</div>
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
        </div>
      </div>
    )
  }

  if (anyError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mb-4 text-lg text-red-600">
            데이터를 불러오는데 실패했습니다.
          </div>
          <Button variant="VARIANT9" onClick={retryAll}>
            다시 시도
          </Button>
        </div>
      </div>
    )
  }

  const transformToCardData = (products: Product[]): CardBaseProps[] => {
    if (!products) return []
    return products.map((product) => ({
      id: product.id,
      productType: product.product_type === 'package' ? 'PACKAGE' : 'PRODUCT',
      imgSrc: product.main_image_url,
      imgAlt: `${product.name} 이미지`,
      title: product.name,
      subtitle: product.brewery_name,
      price: product.price,
    }))
  }

  const monthCards = transformToCardData(month?.data?.products ?? [])
  const popularCards = transformToCardData(popular?.data?.products ?? [])
  const recommendedCards = transformToCardData(
    recommended?.data?.products ?? []
  )

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
            <h1 className="mb-10 text-[40px] font-bold text-[#333333]">
              <span className="mb-1 block">당신의 전통주 한 잔,</span>
              <span className="mb-1 block">
                한 잔 취향만의 입맛 테스트를 통해
              </span>
              <span className="block">당신의 맛을 찾아보세요!</span>
            </h1>
            <Link to="/test">
              <Button variant="VARIANT9">지금 테스트하러 가기</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 이달의 전통주 섹션 */}
      <MonthProductsSection monthCards={monthCards} />

      {/* 인기 패키지 섹션 */}
      <PopularSection popularCards={popularCards} />

      {/* 추천 전통주 섹션 */}
      <RecommendedSection recommendedCards={recommendedCards} />
    </div>
  )
}

export default Home
