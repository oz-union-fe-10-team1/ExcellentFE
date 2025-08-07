import { FEATURE_OPTIONS } from '../constants/search'
import type { SearchFilters } from '../types/search'

export const buildSearchParams = (filters: SearchFilters) => {
  const featuresMap = Object.fromEntries(
    FEATURE_OPTIONS.map((option) => [option.label, option.key])
  )

  const selectedFeatureParams = filters.selectedFeatures.map(
    (label) => featuresMap[label]
  )

  const params: Record<string, any> = {}

  if (filters.keyword) params.q = filters.keyword
  if (selectedFeatureParams.length > 0) {
    params['feature[]'] = selectedFeatureParams
  }

  params.sweetness = filters.sweetness[0]
  params.acidity = filters.acidity[0]
  params.body = filters.body[0]
  params.carbonation = filters.carbonation[0]
  params.bitterness = filters.bitter[0]
  params.aroma = filters.aroma[0]
  params.page = '1'
  params.page_size = '12'

  return new URLSearchParams(params).toString()
}
