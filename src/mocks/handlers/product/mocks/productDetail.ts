import { http, HttpResponse } from 'msw'
import type { ProductDetail } from '@/types/product'

const productDetailMockData: ProductDetail = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  name: '전주 이강주',
  brewery: {
    id: 1,
    name: '전주전통주조장',
    region: { id: 5, name: '전라북도', code: 'JB' },
    address: '전라북도 전주시 완산구 전주천동로 20',
    phone: '063-123-4567',
    email: 'info@jeonju-brewery.co.kr',
    website: 'https://jeonju-brewery.co.kr',
    founded_year: 1925,
    description: '1925년부터 이어온 전주 전통주 양조의 명가',
    logo_image: 'https://example.com/images/jeonju-brewery-logo.jpg',
  },
  alcohol_type: {
    id: 3,
    name: '증류주',
    category: 'distilled',
    category_display: '소주/증류주',
    description: '전통 방식으로 증류한 한국 전통주',
  },
  region: {
    id: 5,
    name: '전라북도',
    code: 'JB',
    description: '한국 전통문화의 중심지',
  },
  category: {
    id: 2,
    name: '프리미엄 증류주',
    slug: 'premium-distilled',
    description: '최고급 원료와 전통 기법으로 만든 프리미엄 증류주',
    parent_name: '증류주',
    full_name: '증류주 > 프리미엄 증류주',
  },
  description:
    '전주 전통의 배와 생강이 어우러진 프리미엄 증류주입니다. 1925년부터 전해 내려오는 비법으로 정성스럽게 빚어낸 명품입니다. 배의 달콤함과 생강의 알싸한 맛이 조화롭게 어우러져 깔끔하면서도 깊은 맛을 자랑합니다.',
  ingredients: '쌀, 배, 생강, 전통누룩, 천연 지하수',
  alcohol_content: 25.0,
  volume_ml: 375,
  price: 45000,
  original_price: 50000,
  discount_rate: 10,
  stock_quantity: 100,
  min_stock_alert: 10,
  is_available: true,
  taste_profile: {
    sweetness_level: 3.5,
    acidity_level: 2.0,
    body_level: 4.0,
    carbonation_level: 0.0,
    bitterness_level: 1.5,
    aroma_level: 4.5,
    taste_profile_vector: [3.5, 2.0, 4.0, 0.0, 1.5, 4.5],
  },
  taste_tags_detail: [
    {
      taste_tag: 1,
      taste_tag_name: '달콤함',
      taste_tag_category: '단맛',
      color_code: '#FF6B9D',
      intensity: 2.5,
    },
    {
      taste_tag: 8,
      taste_tag_name: '과일향',
      taste_tag_category: '과일향',
      color_code: '#4ECDC4',
      intensity: 3.0,
    },
    {
      taste_tag: 12,
      taste_tag_name: '향신료맛',
      taste_tag_category: '향신료맛',
      color_code: '#FFD93D',
      intensity: 1.8,
    },
  ],
  product_features: {
    is_gift_suitable: true,
    is_award_winning: true,
    is_regional_specialty: true,
    is_limited_edition: false,
    is_premium: true,
    is_organic: false,
  },
  flavor_notes: '배향, 생강향, 달콤함',
  short_description: '전주 전통의 배와 생강이 어우러진 프리미엄 증류주',
  package_name: '전주 이강주 선물세트',
  images: [
    {
      id: 1,
      image_url: 'https://example.com/images/igang-ju-main.jpg',
      alt_text: '전주 이강주 메인 이미지',
      sort_order: 0,
      is_main: true,
    },
    {
      id: 2,
      image_url: 'https://example.com/images/igang-ju-bottle.jpg',
      alt_text: '전주 이강주 병 상세',
      sort_order: 1,
      is_main: false,
    },
    {
      id: 3,
      image_url: 'https://example.com/images/igang-ju-package.jpg',
      alt_text: '전주 이강주 포장',
      sort_order: 2,
      is_main: false,
    },
  ],
  main_image_url: 'https://example.com/images/igang-ju-main.jpg',
  similarity_vector: '[0.35, 0.20, 0.40, 0.00, 0.15, 0.45]',
  recommendation_score: 4.2,
  statistics: {
    view_count: 1251,
    order_count: 89,
    like_count: 156,
    average_rating: 4.7,
    review_count: 23,
  },
  status: 'active',
  is_featured: true,
  launch_date: '2024-01-15',
  meta_title: '전주 이강주 - 전통 배 생강 증류주 | 전주전통주조장',
  meta_description:
    '1925년부터 전해내려오는 전주 전통의 배와 생강 증류주. 달콤한 배향과 알싸한 생강의 조화로 만든 프리미엄 전통주를 만나보세요.',
  created_at: '2024-01-10T09:30:00Z',
  updated_at: '2024-01-20T14:22:00Z',
  user_interaction: {
    is_liked: true,
    liked_at: '2024-01-18T10:15:00Z',
    has_reviewed: false,
    has_purchased: true,
    recommendation_score: 0.87,
    recommendation_reason:
      '사용자님의 달콤한 맛 선호도와 과일향 취향에 87% 일치합니다.',
  },
  awards: [
    {
      award_name: '2023 대한민국 전통주 품평회 대상',
      awarded_year: 2023,
      organization: '한국전통주진흥원',
    },
    {
      award_name: '2022 증류주 부문 금상',
      awarded_year: 2022,
      organization: '전라북도 전통주 품평회',
    },
  ],
  related_products: [
    {
      id: '456e7890-e89b-12d3-a456-426614174001',
      name: '안동소주',
      brewery_name: '안동전통주조합',
      price: 35000,
      main_image_url: 'https://example.com/images/andong-soju-main.jpg',
      average_rating: 4.2,
      similarity_score: 0.82,
    },
    {
      id: '789e1234-e89b-12d3-a456-426614174002',
      name: '진도홍주',
      brewery_name: '진도전통주',
      price: 52000,
      main_image_url: 'https://example.com/images/jindo-hongju-main.jpg',
      average_rating: 4.5,
      similarity_score: 0.76,
    },
  ],
  inventory_info: {
    total_stock: 100,
    available_stock: 100,
    reserved_stock: 0,
    low_stock_warning: false,
    estimated_restock_date: null,
  },
}

const productDetailHandlers = [
  http.get('/api/v1/products/:product_id/', () => {
    // 현재는 product_id 무시하고 목데이터 반환
    return HttpResponse.json(productDetailMockData)
  }),
]

export default productDetailHandlers
