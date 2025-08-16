import { http, HttpResponse } from 'msw'
import productSearchMockData, {
  type ProductFeatures,
} from './mocks/productSearchMockData'
import type { ProductType, TasteFilters } from '@/hooks/useProductSearch'

const productHandlers = [
  http.get('/api/v1/products/search', ({ request }) => {
    const url = new URL(request.url)
    const searchParams = url.searchParams

    const q = searchParams.get('q') ?? ''
    const features = searchParams.getAll('feature[]')
    const sweetness = Number(searchParams.get('sweetness')) || 0
    const acidity = Number(searchParams.get('acidity')) || 0
    const body = Number(searchParams.get('body')) || 0
    const carbonation = Number(searchParams.get('carbonation')) || 0
    const bitterness = Number(searchParams.get('bitterness')) || 0
    const aroma = Number(searchParams.get('aroma')) || 0

    const matchesTaste = (item: ProductType) => {
      const tp = item.taste_profile

      if (!tp) return false

      // 필터 중 값이 0이 아닌 슬라이더들만 필터링 대상
      const tasteFilters: { key: keyof TasteFilters; value: number }[] = [
        { key: 'sweetness_level', value: sweetness },
        { key: 'acidity_level', value: acidity },
        { key: 'body_level', value: body },
        { key: 'carbonation_level', value: carbonation },
        { key: 'bitterness_level', value: bitterness },
        { key: 'aroma_level', value: aroma },
      ] as const

      // 필터가 없으면 다 포함
      if (tasteFilters.length === 0) return true

      // tasteFilters 중 한 개라도 일치하면 true
      return tasteFilters.some(({ key, value }) => tp[key] === value)
    }

    const filteredData = productSearchMockData.results.filter((item) => {
      const matchesKeyword = q === '' || item.name.includes(q)
      const matchesFeatures = features.every(
        (feature) =>
          item.product_features?.[feature as keyof ProductFeatures] === true
      )
      const matchesTasteResult = matchesTaste(item)

      return matchesKeyword && matchesFeatures && matchesTasteResult
    })

    return HttpResponse.json({ results: filteredData })
  }),

  http.post('/api/v1/products/:product_id/like/', async ({ params }) => {
    const { product_id } = params

    const isLiked = product_id === '123e4567-e89b-12d3-a456-426614174000'
    const likeCount = isLiked ? 157 : 156

    return HttpResponse.json(
      {
        message: isLiked ? '제품을 좋아요했습니다.' : '좋아요를 취소했습니다.',
        liked: isLiked,
        product_id,
        like_count: likeCount,
        ...(isLiked
          ? { liked_at: '2024-01-20T15:30:45Z' }
          : { unliked_at: '2024-01-20T15:35:20Z' }),
        product_info: {
          name: '전주 이강주',
          brewery_name: '전주전통주조장',
          price: 45000,
          main_image_url: 'https://example.com/images/igang-ju-main.jpg',
        },
      },
      {
        status: isLiked ? 201 : 200,
      }
    )
  }),
]

export default productHandlers
