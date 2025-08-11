import { Link } from 'react-router-dom'
import CardList from '@/components/common/cards/CardList'
import Carousel from '@/components/common/Carousel'
import Button from '@/components/common/Button'
import {
  useRecommendedPackages,
  useAwardPackages,
  useMakgeolliPackages,
  useRegionalPackages,
} from '@/hooks/usePackagePage'
import { HomeUtils } from '@/utils/productUtils'
import banner from '@/assets/images/packagePage/package-banner.png'

const PackagePage = () => {
  const {
    data: recommendedPackages = [],
    isLoading: recommendedLoading,
    error: recommendedError,
    refetch: refetchRecommended,
  } = useRecommendedPackages()

  const {
    data: awardPackages = [],
    isLoading: awardLoading,
    error: awardError,
    refetch: refetchAward,
  } = useAwardPackages()

  const {
    data: makgeolliPackages = [],
    isLoading: makgeolliLoading,
    error: makgeolliError,
    refetch: refetchMakgeolli,
  } = useMakgeolliPackages()

  const {
    data: regionalPackages = [],
    isLoading: regionalLoading,
    error: regionalError,
    refetch: refetchRegional,
  } = useRegionalPackages()

  const handleRetry = () => {
    refetchRecommended()
    refetchAward()
    refetchMakgeolli()
    refetchRegional()
  }

  // 전체 로딩 및 에러 상태
  const loading =
    recommendedLoading || awardLoading || makgeolliLoading || regionalLoading
  const error =
    recommendedError || awardError || makgeolliError || regionalError

  // 데이터를 카드 형태로 변환
  const recommendedCards = recommendedPackages.map(HomeUtils.packageToCard)
  const awardCards = awardPackages.map(HomeUtils.packageToCard)
  const makgeolliCards = makgeolliPackages.map(HomeUtils.packageToCard)
  const regionalCards = regionalPackages.map(HomeUtils.packageToCard)

  // 배너에서 이동할 패키지 ID (추천 패키지 중 첫 번째)
  const featuredPackageId = recommendedPackages[0]?.id || 1

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mb-4 text-lg">패키지를 불러오는 중...</div>
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mb-4 text-lg text-red-600">
            패키지 데이터를 불러오는데 실패했습니다.
          </div>
          <Button variant="VARIANT9" onClick={handleRetry}>
            다시 시도
          </Button>
        </div>
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
              2025년 추천신상 선별
            </p>
            <h1 className="mb-10 text-[40px] font-bold text-[#333333]">
              <span className="mb-2 block">
                오직 {}만의 취향을 반영한 패키지
              </span>
            </h1>
            <Link to={`/packages/detail/${featuredPackageId}`}>
              <Button variant="VARIANT9">구매하러 가기</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 추천 패키지 섹션 */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-row items-start gap-12">
            <div className="w-80 flex-shrink-0">
              <h2 className="mb-4 text-3xl font-bold text-[#333333]">
                추천 패키지
              </h2>
              <p className="text-[#666666]">
                술에 입문하려는 사람에게 만족감 패키지
              </p>
            </div>
            <div className="flex-1">
              <CardList type="default" cards={recommendedCards} />
            </div>
          </div>
        </div>
      </section>

      {/* 주류 대상 수상 등급 패키지 섹션 */}
      <section className="h-[704px] bg-[#f2f2f2] py-25">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-[#333333]">
              주류 대상 수상 등급 패키지
            </h2>
            <p className="text-[#666666]">수상 대상 수상 등급 패키지</p>
          </div>
          <Carousel cards={awardCards} />
        </div>
      </section>

      {/* 막걸리 패키지 섹션 */}
      <section className="py-25">
        <div className="container mx-auto">
          <div className="mb-12 text-left">
            <h2 className="mb-4 text-3xl font-bold text-[#333333]">
              막걸리 패키지
            </h2>
            <p className="text-[#666666]">막걸리 애호가들을 위한 전통 패키지</p>
          </div>
          <CardList type="default" cards={makgeolliCards} />
        </div>
      </section>

      {/* 지역 특산주 패키지 섹션 */}
      <section className="mb-80 py-25">
        <div className="container mx-auto">
          <div className="mb-12 text-left">
            <h2 className="mb-4 text-3xl font-bold text-[#333333]">
              지역 특산주 패키지
            </h2>
            <p className="text-[#666666]">
              대한민국 각 지역을 대표하는 한국 술 패키지
            </p>
          </div>
          <CardList type="default" cards={regionalCards} />
        </div>
      </section>
    </div>
  )
}

export default PackagePage
