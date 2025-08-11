export interface SearchFilters {
  keyword: string
  selectedFeatures: string[]
  sweetness: number[]
  acidity: number[]
  body: number[]
  carbonation: number[]
  bitter: number[]
  aroma: number[]
}

export interface Product {
  main_image_url: string
  name: string
  short_description: string
  price: number
}

export interface SearchFormProps {
  keyword: string
  onKeywordChange: (keyword: string) => void
  onSearch: () => void
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

export interface TasteProfile {
  sweetness_level: number
  acidity_level: number
  body_level: number
  carbonation_level: number
  bitterness_level: number
  aroma_level: number
}
