import type { SearchFilters } from '@/types/search'
import { FEATURE_OPTIONS } from '@/constants/search'

export const buildSearchParamsRecommended = (
  filters: SearchFilters
): string => {
  const searchParams = new URLSearchParams()

  // 검색어
  if (filters.keyword) {
    searchParams.set('search', filters.keyword)
  }

  // 맛 슬라이더 값 (0 이상만 추가, 소수점으로 변환)
  const tasteMap: Record<string, number> = {
    sweetness: filters.sweetness[0],
    acidity: filters.acidity[0],
    body: filters.body[0],
    carbonation: filters.carbonation[0],
    bitterness: filters.bitterness[0],
    aroma: filters.aroma[0],
  }

  Object.entries(tasteMap).forEach(([key, value]) => {
    if (value > 0) {
      searchParams.set(key, value.toFixed(1))
    }
  })

  // 선택 필터 (체크박스) — true인 값만 추가
  FEATURE_OPTIONS.forEach((option) => {
    if (filters.selectedFeatures.includes(option.label)) {
      searchParams.set(option.key, 'true')
    }
  })

  // 정렬 + 페이지
  searchParams.set('ordering', '-created_at')
  searchParams.set('page', '1')
  searchParams.set('page_size', '12')

  return searchParams.toString()
}
