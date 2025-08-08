import type { Product } from '@/mocks/handlers/product/mocks/productMockData'
import type {
  Package,
  Categories,
  Pagination,
} from '@/mocks/handlers/package/package'

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
