export interface ProductImage {
  image_url: string
  is_main: boolean
  created_at: string // ISO date string
}

export interface DrinkInfo {
  type: string
  alcohol_content: string
  flavor_profile: string
  ingredients: string
  brewing_method: string
  origin: string
  volume: string
  brewery: string
}

export interface PackageInfo {
  package_type: string
  items_count: string
  gift_box: string
  additional_items: string
}

export interface ProductDetail {
  id: string
  name: string
  product_type: 'PACKAGE' | 'PRODUCT'
  drink: DrinkInfo
  package: PackageInfo
  price: number
  original_price: number
  discount: number
  discount_rate: number
  final_price: number
  is_on_sale: boolean
  description: string
  description_image_url: string
  is_gift_suitable: boolean
  is_award_winning: boolean
  is_regional_specialty: boolean
  is_limited_edition: boolean
  is_premium: boolean
  is_organic: boolean
  view_count: number
  order_count: number
  like_count: number
  review_count: number
  status: 'ACTIVE' | 'INACTIVE'
  images: ProductImage[]
  created_at: string
  updated_at: string
}

export const DetailData: ProductDetail = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  name: '모은 패키지 1',
  product_type: 'PACKAGE',
  drink: {
    type: '막걸리',
    alcohol_content: '17도',
    flavor_profile: '단맛 80%, 산미 50%, 바디감 20%',
    ingredients: '쌀, 누룩, 복분자',
    brewing_method: '전통 발효',
    origin: '경상북도 안동',
    volume: '750ml',
    brewery: '전통주조소',
  },
  package: {
    package_type: '프리미엄 기프트 세트',
    items_count: '3병',
    gift_box: '한지 포장지 + 오동나무 상자',
    additional_items: '전통 주잔 2개, 안주 세트',
  },
  price: 40000,
  original_price: 45000,
  discount: 5000,
  discount_rate: 11,
  final_price: 40000,
  is_on_sale: true,
  description:
    '100년 전통을 이어온 안동 전통주조소에서 정성스럽게 빚은 프리미엄 막걸리입니다. 엄선된 국산 쌀과 복분자를 사용하여 깊고 풍부한 맛을 자랑합니다.',
  description_image_url: 'https://example.com/images/moeun-package-detail.jpg',
  is_gift_suitable: true,
  is_award_winning: true,
  is_regional_specialty: true,
  is_limited_edition: false,
  is_premium: true,
  is_organic: false,
  view_count: 15847,
  order_count: 892,
  like_count: 1203,
  review_count: 127,
  status: 'ACTIVE',
  images: [
    {
      image_url: 'https://example.com/images/moeun-package-main.jpg',
      is_main: true,
      created_at: '2024-12-15T09:30:00.000Z',
    },
    {
      image_url: 'https://example.com/images/moeun-package-side1.jpg',
      is_main: false,
      created_at: '2024-12-15T09:31:00.000Z',
    },
    {
      image_url: 'https://example.com/images/moeun-package-side2.jpg',
      is_main: false,
      created_at: '2024-12-15T09:32:00.000Z',
    },
    {
      image_url: 'https://example.com/images/moeun-package-gift-box.jpg',
      is_main: false,
      created_at: '2024-12-15T09:33:00.000Z',
    },
  ],
  created_at: '2024-12-15T09:00:00.000Z',
  updated_at: '2025-01-20T14:22:15.000Z',
}
