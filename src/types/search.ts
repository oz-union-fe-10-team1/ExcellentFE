export interface SearchFilters {
  keyword: string
  selectedFeatures: string[]
  sweetness: number[]
  acidity: number[]
  body: number[]
  carbonation: number[]
  bitterness: number[]
  aroma: number[]
}

export interface Product {
  id: string
  name: string
  product_type: 'individual' | 'package'
  price: number
  original_price?: number | null
  discount?: number
  discount_rate?: number
  final_price: number
  is_on_sale: boolean
  main_image_url: string
  brewery_name?: string | null
  alcohol_type?: string | null
  is_gift_suitable: boolean
  is_regional_specialty: boolean
  is_limited_edition: boolean
  is_premium: boolean
  is_award_winning: boolean
  view_count: number
  like_count: number
  status: string
  created_at: string
}

export interface SearchFormProps {
  keyword: string
  onKeywordChange: (keyword: string) => void
  onSearch: (keyword: string) => void
}

export interface FeatureFilterProps {
  selectedFeatures: string[]
  onFeatureChange: (features: string[]) => void
}

export interface SearchResultsProps {
  data: Product[]
  isLoading: boolean
  isError: boolean
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export interface SliderGroupProps {
  filters: SearchFilters
  onSliderChange: (key: keyof SearchFilters, value: number[]) => void
}
