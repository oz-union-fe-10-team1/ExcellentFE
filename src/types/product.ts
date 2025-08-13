// 기본 엔티티 타입들
export interface Region {
  id: number
  name: string
  code: string
  description?: string
}

export interface Brewery {
  id: number
  name: string
  region: Region | string // ProductListResponse에서는 string으로 사용
  address?: string
  phone?: string
  email?: string
  website?: string
  founded_year?: number
  description?: string
  logo_image?: string
}

export interface AlcoholType {
  id: number
  name: string
  category: string
  category_display?: string
  description?: string
}

export interface Category {
  id: number
  name: string
  slug?: string
  description?: string
  parent_name?: string
  full_name?: string
}

// 맛 프로필 관련
export interface TasteProfile {
  sweetness_level: number
  acidity_level: number
  body_level: number
  carbonation_level: number
  bitterness_level: number
  aroma_level: number
  taste_profile_vector?: number[]
}

export interface TasteTagDetail {
  taste_tag: number
  taste_tag_name: string
  taste_tag_category: string
  color_code: string
  intensity: number
}

// 제품 특성
export interface ProductFeatures {
  is_gift_suitable: boolean
  is_award_winning: boolean
  is_regional_specialty: boolean
  is_limited_edition: boolean
  is_premium: boolean
  is_organic: boolean
}

// 이미지 관련
export interface ProductImage {
  id: number
  image_url: string
  alt_text: string
  sort_order: number
  is_main: boolean
}

// 통계 정보
export interface ProductStatistics {
  view_count: number
  order_count: number
  like_count: number
  average_rating: number
  review_count: number
}

// 사용자 상호작용
export interface UserInteraction {
  is_liked: boolean
  liked_at?: string
  has_reviewed: boolean
  has_purchased: boolean
  recommendation_score: number
  recommendation_reason: string
}

// 수상 정보
export interface Award {
  award_name: string
  awarded_year: number
  organization: string
}

// 관련 상품
export interface RelatedProduct {
  id: string
  name: string
  brewery_name: string
  price: number
  main_image_url: string
  average_rating: number
  similarity_score: number
}

// 재고 정보
export interface InventoryInfo {
  total_stock: number
  available_stock: number
  reserved_stock: number
  low_stock_warning: boolean
  estimated_restock_date: string | null
}

// 기본 제품 인터페이스 (목록용)
export interface Product {
  id: string
  name: string
  brewery: Brewery
  alcohol_type: AlcoholType
  region: Region
  category: Category
  price: number
  original_price: number | null
  discount_rate: number
  alcohol_content: number
  volume_ml: number
  stock_quantity: number
  is_available: boolean
  taste_profile: TasteProfile
  product_features: ProductFeatures
  flavor_notes: string
  short_description: string
  main_image_url: string
  status: 'active' | 'out_of_stock' | string
  is_featured: boolean
  statistics: ProductStatistics
  launch_date: string
  created_at: string
}

// 상세 제품 인터페이스
export interface ProductDetail extends Omit<Product, 'brewery' | 'statistics'> {
  brewery: Brewery // 상세에서는 전체 Brewery 객체
  description: string
  ingredients: string
  min_stock_alert: number
  taste_tags_detail: TasteTagDetail[]
  package_name: string
  images: ProductImage[]
  similarity_vector: string
  recommendation_score: number
  statistics: ProductStatistics
  meta_title: string
  meta_description: string
  updated_at: string
  user_interaction: UserInteraction
  awards: Award[]
  related_products: RelatedProduct[]
  inventory_info: InventoryInfo
}

// 필터 관련
export interface AppliedFilters {
  category_id?: number
  min_price?: number
  max_price?: number
  is_premium?: boolean
  region_id?: number
  alcohol_type_id?: number
}

export interface FilterOption {
  id: number
  name: string
  count: number
}

export interface PriceRangeOption {
  min: number
  max: number
  count: number
}

export interface AvailableFilters {
  categories: FilterOption[]
  regions: FilterOption[]
  alcohol_types: FilterOption[]
  price_ranges: PriceRangeOption[]
}

// API 응답 인터페이스
export interface ProductListResponse {
  count: number
  next: string | null
  previous: string | null
  results: Product[]
  filters_applied: AppliedFilters
  available_filters: AvailableFilters
}
