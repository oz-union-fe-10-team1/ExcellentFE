import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CardList from '@/components/common/CardList'
import Carousel from '@/components/common/Carousel'
import type { CardProps } from '@/types/cardProps'
import type { Product } from '@/mocks/handlers/product/mocks/productMockData'
import Button from '@/components/common/Button'
import banner from '@/assets/images/mainPage/banner.png'

type Package = {
  id: number
  name: string
  slug: string
  short_description: string
  category: string
  main_image: string
  total_original_price: number
  discount_rate: number
  discount_amount: number
  final_price: number
  is_featured: boolean
  view_count: number
  order_count: number
  created_at: string
}

type CategoryData = {
  title: string
  description: string
  count: number
  packages: Package[]
}

type PackageResponse = {
  categories: {
    [key: string]: CategoryData
  }
  pagination?: {
    page: number
    page_size: number
    total_count: number
    total_pages: number
  }
}

const HomePage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [packages, setPackages] = useState<Package[]>([])
  const [loading, setLoading] = useState(true)

  const handleTestButtonClick = () => {
    navigate('/test')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 기존 상품 데이터 가져오기
        const productsResponse = await axios.get<{ results: Product[] }>(
          '/api/v1/products'
        )
        setProducts(productsResponse.data.results)

        const packagesResponse = await axios.get<PackageResponse>(
          '/api/v1/packages/',
          {
            params: {
              is_featured: 'true',
              page_size: 12,
            },
          }
        )

        // 모든 카테고리의 패키지를 하나의 배열로 합치기
        const allPackages: Package[] = []
        Object.values(packagesResponse.data.categories).forEach((category) => {
          allPackages.push(...category.packages)
        })
        setPackages(allPackages)
      } catch (error) {
        console.error('데이터를 불러오는데 실패했습니다:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Product를 CardProps로 변환하는 유틸 함수
  const productToCard = (product: Product): CardProps => ({
    imgSrc:
      product.main_image_url ||
      'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&h=290&fit=crop',
    imgAlt: product.name,
    title: product.name,
    subtitle: product.short_description,
    price: product.price,
  })

  // Package를 CardProps로 변환하는 유틸 함수
  const packageToCard = (pkg: Package): CardProps => ({
    imgSrc:
      pkg.main_image ||
      'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&h=290&fit=crop',
    imgAlt: pkg.name,
    title: pkg.name,
    subtitle: pkg.short_description,
    price: pkg.final_price,
  })

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        로딩 중...
      </div>
    )
  }

  // 각 섹션별 데이터
  const monthlyProducts = products
    .filter((product) => product.is_featured)
    .map(productToCard)

  // 인기 패키지는 패키지 데이터 사용
  const popularPackages = packages.map(packageToCard)

  const recommendedProducts = [...products, ...products.slice(0, 5)].map(
    productToCard
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
              <CardList cards={monthlyProducts} />
            </div>
          </div>
        </div>
      </section>

      {/* 인기 패키지 섹션 */}
      <section className="h-[704px] bg-[#f2f2f2] py-25">
        <div className="container mx-auto">
          <div className="mb-12 text-left">
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
          <CardList cards={recommendedProducts} />
        </div>
      </section>
    </div>
  )
}

export default HomePage
