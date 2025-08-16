import type { Package, Categories, Pagination } from '@/types/package'
import type { Product } from './search'

export interface PackageResponse {
  categories: Categories
  pagination?: Pagination
}

export interface HomePageData {
  products: Product[]
  packages: Package[]
  loading: boolean
}

export interface ProductResponse {
  products?: Product[]
  results?: Product[]
}
