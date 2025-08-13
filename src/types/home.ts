import type { Product } from '@/types/product'
import type { Package, Categories, Pagination } from '@/types/package'

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
  results: Product[]
}
