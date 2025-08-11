import { FEATURE_OPTIONS } from '@/constants/search'
import type { SearchFilters } from '@/types/search'

const createFeaturesMap = (): Record<string, string> =>
  Object.fromEntries(
    FEATURE_OPTIONS.map((option) => [option.label, option.key])
  )

export const buildSearchParamsRecommended = (
  filters: SearchFilters
): string => {
  const featuresMap = createFeaturesMap()
  const searchParams = new URLSearchParams()

  const selectedFeatureParams = filters.selectedFeatures
    .map((label) => featuresMap[label])
    .filter(Boolean)

  // 조건부 파라미터 추가
  if (filters.keyword) {
    searchParams.set('q', filters.keyword)
  }

  // 배열 파라미터는 forEach로 개별 추가
  selectedFeatureParams.forEach((feature) => {
    searchParams.append('feature[]', feature)
  })

  searchParams.set('sweetness', filters.sweetness[0].toString())
  searchParams.set('acidity', filters.acidity[0].toString())
  searchParams.set('body', filters.body[0].toString())
  searchParams.set('carbonation', filters.carbonation[0].toString())
  searchParams.set('bitterness', filters.bitter[0].toString())
  searchParams.set('aroma', filters.aroma[0].toString())
  searchParams.set('page', '1')
  searchParams.set('page_size', '12')

  return searchParams.toString()
}
