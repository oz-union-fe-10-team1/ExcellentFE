import { http, HttpResponse } from 'msw'
import type { PackageDetail } from '@/types/package'

const packageDetailMockData: PackageDetail = {
  id: 1,
  name: '한산 소곡주 프리미엄 세트',
  slug: 'hansan-sogokju-premium',
  description:
    '한산에서 생산하는 대표적 증류주 한산소곡주를 포함한 프리미엄 전통주 패키지입니다. 엄선된 3종의 전통주로 구성되어 있으며, 전통주 입문자부터 애호가까지 만족할 수 있는 구성입니다.',
  short_description: '한산 소곡주를 포함한 프리미엄 전통주 3종 세트',
  category: '추천',
  main_image: 'https://example.com/media/packages/hansan-premium.jpg',
  additional_images: [
    'https://example.com/media/packages/hansan-premium-2.jpg',
    'https://example.com/media/packages/hansan-premium-3.jpg',
    'https://example.com/media/packages/hansan-premium-4.jpg',
  ],
  total_original_price: 85000,
  discount_rate: 18.0,
  discount_amount: 15300,
  final_price: 69700,
  savings_amount: 15300,
  is_active: true,
  is_featured: true,
  sort_order: 1,
  view_count: 2847,
  order_count: 156,
  rating_average: 4.7,
  review_count: 89,
  items: [
    {
      id: 101,
      product_id: 'prod-001',
      product_name: '한산 소곡주',
      product_description:
        '충청남도 한산에서 전통 방식으로 빚은 프리미엄 소곡주',
      product_image: 'https://example.com/media/products/hansan-sogokju.jpg',
      product_price: 32000,
      product_volume: '375ml',
      product_alcohol_content: '25%',
      sort_order: 1,
      taste_profile: {
        sweetness: 3,
        acidity: 2,
        bitterness: 1,
        umami: 4,
        astringency: 2,
        alcohol_strength: 4,
      },
    },
    {
      id: 102,
      product_id: 'prod-002',
      product_name: '프리미엄 막걸리',
      product_description: '국내산 쌀 100%로 빚은 프리미엄 생막걸리',
      product_image: 'https://example.com/media/products/premium-makgeolli.jpg',
      product_price: 28000,
      product_volume: '750ml',
      product_alcohol_content: '6%',
      sort_order: 2,
      taste_profile: {
        sweetness: 4,
        acidity: 3,
        bitterness: 1,
        umami: 3,
        astringency: 1,
        alcohol_strength: 2,
      },
    },
    {
      id: 103,
      product_id: 'prod-003',
      product_name: '전통 청주',
      product_description: '맑고 깔끔한 맛이 일품인 전통 청주',
      product_image:
        'https://example.com/media/products/traditional-cheongju.jpg',
      product_price: 25000,
      product_volume: '500ml',
      product_alcohol_content: '15%',
      sort_order: 3,
      taste_profile: {
        sweetness: 2,
        acidity: 2,
        bitterness: 1,
        umami: 3,
        astringency: 2,
        alcohol_strength: 3,
      },
    },
  ],
  package_taste_profile: {
    sweetness: 3.0,
    acidity: 2.3,
    bitterness: 1.0,
    umami: 3.3,
    astringency: 1.7,
    alcohol_strength: 3.0,
  },
  shipping_info: {
    is_free_shipping: true,
    shipping_fee: 0,
    estimated_delivery_days: '2-3일',
  },
  recommendations: {
    suitable_for: ['전통주 입문자', '선물용', '홈파티'],
    pairing_foods: ['전통 안주', '치킨', '족발', '보쌈'],
    drinking_temperature: '10-15도',
  },
  related_packages: [
    {
      id: 2,
      name: '막걸리 베스트 3종 세트',
      slug: 'makgeolli-best-3',
      main_image: 'https://example.com/media/packages/makgeolli-best.jpg',
      final_price: 42000,
      original_price: 50000,
      discount_rate: 16.0,
    },
    {
      id: 3,
      name: '청주 프리미엄 컬렉션',
      slug: 'cheongju-premium',
      main_image: 'https://example.com/media/packages/cheongju-premium.jpg',
      final_price: 78000,
      original_price: 95000,
      discount_rate: 17.89,
    },
  ],
  created_at: '2024-12-15T10:30:00Z',
  updated_at: '2024-12-20T14:25:00Z',
}

const packageDetailHandlers = [
  http.get('/api/v1/packages/:package_id/', () => {
    // 현재는 package_id 무시하고 목데이터 반환
    return HttpResponse.json(packageDetailMockData)
  }),
]

export default packageDetailHandlers
