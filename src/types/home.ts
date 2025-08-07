import type { Product } from '@/mocks/handlers/product/mocks/productMockData'

export interface Package {
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

export interface CategoryData {
  title: string
  description: string
  count: number
  packages: Package[]
}

export interface PackageResponse {
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

export interface HomePageData {
  products: Product[]
  packages: Package[]
  loading: boolean
}

export interface ProductResponse {
  results: Product[]
}
