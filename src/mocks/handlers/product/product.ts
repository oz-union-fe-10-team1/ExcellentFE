import { http, HttpResponse } from 'msw'
import productMockData from './mocks/productMockData'
import productFilterMockData from './mocks/productFilterMockData'
import productSearchMockData from './mocks/productSearchMockData'

const productHandlers = [
  http.get('/api/v1/products', () => {
    return HttpResponse.json(productMockData)
  }),
  http.get('/api/v1/products/:product_id', ({ params }) => {
    const { product_id } = params

    if (product_id === '123e4567-e89b-12d3-a456-426614174000') {
      return HttpResponse.json(productFilterMockData)
    }

    return HttpResponse.json({ message: 'Product not found' }, { status: 404 })
  }),

  http.get('/api/v1/products/search/', () => {
    return HttpResponse.json(productSearchMockData)
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
