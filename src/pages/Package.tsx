import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import banner from '@/assets/images/packagePage/package-banner.png'
import { transformToCardData } from '@/utils/transformToCardData'
import { usePackagePageData } from '@/hooks/home/usePackagePageData'
import RecommendedPackageSection from '@/components/package-page/RecommendedPackageSection'
import AwardPackageSection from '@/components/package-page/AwardPackageSection'
import MakgeolliPackageSection from '@/components/package-page/MakgeolliPackageSection'
import RegionalPackageSection from '@/components/package-page/RegionalPackageSection'

const Package = () => {
  const { loading, error, retry, featured, award, makgeolli, regional } =
    usePackagePageData()

  console.log(featured)

  // 데이터를 카드 형태로 변환
  const featuredCards = transformToCardData(featured)
  const awardCards = transformToCardData(award)
  const makgeolliCards = transformToCardData(makgeolli)
  const regionalCards = transformToCardData(regional)

  // 배너에서 이동할 패키지 ID (추천 패키지 중 첫 번째)
  const featuredPackageId = featured[0]?.id || 1

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
          <Button variant="VARIANT9" onClick={retry}>
            다시 시도
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <section className="relative h-[500px]">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${banner}')` }}
        />
        <div className="relative z-10 container mx-auto flex h-full items-center">
          <div className="max-w-2xl">
            <p className="mb-[30px] text-xl text-[#333333]">
              2025년 주류대상 선정
            </p>
            <h1 className="mb-10 text-[40px] font-bold text-[#333333]">
              <span className="mb-2 block">
                한 잔 취향의 특별한 인천 패키지
              </span>
            </h1>
            <Link to={`/package/${featuredPackageId}`}>
              <Button variant="VARIANT9">구매하기</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 추천 패키지 섹션 */}
      <RecommendedPackageSection recommendedCards={featuredCards} />
      {/* 주류 대상 수상 등급 패키지 섹션 */}
      <AwardPackageSection awardCards={awardCards} />
      {/* 막걸리 패키지 섹션 */}
      <MakgeolliPackageSection makgeolliCards={makgeolliCards} />
      {/* 지역 특산주 패키지 섹션 */}
      <RegionalPackageSection regionalCards={regionalCards} />
    </div>
  )
}

export default Package
