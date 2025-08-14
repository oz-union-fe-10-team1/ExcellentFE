export interface Package {
  id: string
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

export interface CategoryData {
  title: string
  description: string
  count: number
  packages: Package[]
}

export interface Categories {
  [key: string]: CategoryData
}

export interface Pagination {
  page: number
  page_size: number
  total_count: number
  total_pages: number
}

export interface PackageApiResponse {
  categories: Categories | Partial<Categories>
  pagination?: Pagination
}

// -------------------- Package Detail --------------------
export interface PackageItemTasteProfile {
  sweetness: number
  acidity: number
  bitterness: number
  umami: number
  astringency: number
  alcohol_strength: number
}

export interface PackageItem {
  id: number
  product_id: string
  product_name: string
  product_description: string
  product_image: string
  product_price: number
  product_volume: string
  product_alcohol_content: string
  sort_order: number
  taste_profile: PackageItemTasteProfile
}

export interface PackageTasteProfileAverage {
  sweetness: number
  acidity: number
  bitterness: number
  umami: number
  astringency: number
  alcohol_strength: number
}

export interface ShippingInfo {
  is_free_shipping: boolean
  shipping_fee: number
  estimated_delivery_days: string
}

export interface RecommendationsInfo {
  suitable_for: string[]
  pairing_foods: string[]
  drinking_temperature: string
}

export interface RelatedPackageSummary {
  id: string
  name: string
  slug: string
  main_image: string
  final_price: number
  original_price: number
  discount_rate: number
}

export interface PackageDetail {
  id: string
  name: string
  slug: string
  description: string
  short_description: string
  category: string
  main_image: string
  additional_images: string[]
  total_original_price: number
  discount_rate: number
  discount_amount: number
  final_price: number
  savings_amount: number
  is_active: boolean
  is_featured: boolean
  sort_order: number
  view_count: number
  order_count: number
  rating_average: number
  review_count: number
  items: PackageItem[]
  package_taste_profile: PackageTasteProfileAverage
  shipping_info: ShippingInfo
  recommendations: RecommendationsInfo
  related_packages: RelatedPackageSummary[]
  created_at: string
  updated_at: string
}
