import { http, HttpResponse } from 'msw'
import { packageMockData } from './\bmocks/packageMockData'

// packageMockData의 실제 구조에서 타입을 추출
type Package =
  (typeof packageMockData.categories)[keyof typeof packageMockData.categories]['packages'][0]

type CategoryData = {
  title: string
  description: string
  count: number
  packages: Package[]
}

type CategoryKey = keyof typeof packageMockData.categories

type Categories = {
  [K in CategoryKey]: CategoryData
}

// 페이지네이션된 API 응답 타입 정의
type PackageApiResponse = {
  categories: Categories | Partial<Categories>
  pagination?: {
    page: number
    page_size: number
    total_count: number
    total_pages: number
  }
}

const packageHandlers = [
  http.get('/api/v1/packages/', ({ request }) => {
    const url = new URL(request.url)
    const category = url.searchParams.get('category') as CategoryKey | null
    const isFeatured = url.searchParams.get('is_featured')
    const page = parseInt(url.searchParams.get('page') || '1', 10)
    const pageSize = Math.min(
      parseInt(url.searchParams.get('page_size') || '12', 10),
      50
    )

    // 초기 categories 데이터 복사
    let filteredCategories: Partial<Categories> = {
      ...packageMockData.categories,
    }

    // 특정 카테고리 필터링
    if (category && category in packageMockData.categories) {
      filteredCategories = {
        [category]: packageMockData.categories[category],
      } as Partial<Categories>
    }

    // featured 상품만 필터링
    if (isFeatured === 'true') {
      const featuredOnlyCategories: Partial<Categories> = {}

      Object.entries(filteredCategories).forEach(([catKey, categoryData]) => {
        const typedCatKey = catKey as CategoryKey

        if (categoryData) {
          const featuredPackages = categoryData.packages.filter(
            (pkg: Package) => pkg.is_featured
          )

          featuredOnlyCategories[typedCatKey] = {
            ...categoryData,
            packages: featuredPackages,
            count: featuredPackages.length,
          }
        }
      })

      filteredCategories = featuredOnlyCategories
    }

    // 페이지네이션 적용
    let totalCount = 0
    const paginatedCategories: Partial<Categories> = {}

    Object.entries(filteredCategories).forEach(([catKey, categoryData]) => {
      const typedCatKey = catKey as CategoryKey

      if (categoryData) {
        const allPackages = categoryData.packages
        totalCount += allPackages.length

        // 페이지네이션 계산
        const startIndex = (page - 1) * pageSize
        const endIndex = startIndex + pageSize
        const paginatedPackages = allPackages.slice(startIndex, endIndex)

        paginatedCategories[typedCatKey] = {
          ...categoryData,
          packages: paginatedPackages,
          count: paginatedPackages.length,
        }
      }
    })

    // 총 페이지 수 계산
    const totalPages = Math.ceil(totalCount / pageSize)

    // 최종 응답 데이터 구성
    const responseData: PackageApiResponse = {
      ...packageMockData,
      categories: paginatedCategories,
      pagination: {
        page,
        page_size: pageSize,
        total_count: totalCount,
        total_pages: totalPages,
      },
    }

    return HttpResponse.json(responseData)
  }),
]

export default packageHandlers

// 타입들을 외부에서 사용할 수 있도록 export
export type {
  Package,
  CategoryData,
  CategoryKey,
  Categories,
  PackageApiResponse,
}
