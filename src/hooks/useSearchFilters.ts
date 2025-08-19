import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { SearchFilters } from '@/types/search'
import { FEATURE_OPTIONS } from '@/constants/search'

export const useSearchFilters = () => {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState<SearchFilters>({
    keyword: '',
    selectedFeatures: [],
    sweetness: [0],
    acidity: [0],
    body: [0],
    carbonation: [0],
    bitterness: [0],
    aroma: [0],
  })

  useEffect(() => {
    const queryParams = Object.fromEntries(searchParams.entries())

    // URL의 boolean 파라미터에서 선택된 기능들 찾기
    const selectedFeatures: string[] = []
    FEATURE_OPTIONS.forEach((option) => {
      if (queryParams[option.key] === 'true') {
        selectedFeatures.push(option.label)
      }
    })

    setFilters({
      keyword: queryParams.search || '',
      selectedFeatures: selectedFeatures,
      sweetness: [Number(queryParams.sweetness) || 0],
      acidity: [Number(queryParams.acidity) || 0],
      body: [Number(queryParams.body) || 0],
      carbonation: [Number(queryParams.carbonation) || 0],
      bitterness: [Number(queryParams.bitterness) || 0],
      aroma: [Number(queryParams.aroma) || 0],
    })

    if (Object.keys(queryParams).length === 0) {
      setFilters({
        keyword: '',
        selectedFeatures: [],
        sweetness: [0],
        acidity: [0],
        body: [0],
        carbonation: [0],
        bitterness: [0],
        aroma: [0],
      })
    }
  }, [searchParams])

  const updateKeyword = (keyword: string) => {
    setFilters((prev) => ({ ...prev, keyword }))
  }

  const updateSelectedFeatures = (features: string[]) => {
    setFilters((prev) => ({ ...prev, selectedFeatures: features }))
  }

  const updateSliderValue = (key: keyof SearchFilters, value: number[]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return {
    filters,
    updateKeyword,
    updateSelectedFeatures,
    updateSliderValue,
  }
}
