// 양조장 정보
export interface BreweryInfo {
  id: number
  name: string
  region: string | null
}

// 맛 프로파일 세부 점수
export interface TasteProfile {
  sweetness: number
  acidity: number
  body: number
  carbonation: number
  bitterness: number
  aroma: number
}

// 술 정보
export interface DrinkInfo {
  id: number
  name: string
  brewery: BreweryInfo
  ingredients: string
  alcohol_type: string
  alcohol_type_display: string
  abv: number
  volume_ml: number
  taste_profile: TasteProfile
  created_at: string
  updated_at: string
}

// 이미지 정보
export interface ProductImage {
  image_url: string
  is_main: boolean
  created_at: string
}

// 최종 상품 타입
export interface ProductDetail {
  id: string
  name: string
  product_type: 'individual' | 'package'
  drink: DrinkInfo | null
  package: unknown | null
  price: number
  original_price: number | null
  discount: number | null
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
  main_image_url?: string
  brewery_name?: string
}

export type ProductCardShape = Pick<
  ProductDetail,
  'id' | 'product_type' | 'main_image_url' | 'name' | 'final_price'
> & {
  drink: { brewery: { name: string } } | null
}
