import SearchForm from '@/components/search/SearchForm'
import { useSearchFilters } from '@/hooks/useSearchFilters'
import { buildSearchParamsRecommended } from '@/utils/searchParams'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '@/components/common/Button'
import FeatureFilter from '@/components/search/FeatureFilter'
import SliderGroup from '@/components/search/SliderGroup'
import SearchResults from '@/components/search/SearchResults'
import { useProductSearch } from '@/hooks/useProductSearch'
import { usePagination } from '@/hooks/usePagination'
import { PAGE_SIZE } from '@/constants/search'
import type { Product } from '@/types/search'

const Search = () => {
  const [searchParams] = useSearchParams()
  const { filters, updateKeyword, updateSelectedFeatures, updateSliderValue } =
    useSearchFilters()
  const navigate = useNavigate()

  const queryParams = Object.fromEntries(searchParams.entries())
  const hasQuery = Object.keys(queryParams).length > 0

  const { data, isLoading, isError } = useProductSearch(
    hasQuery ? queryParams : null
  )

  const { currentPage, totalPages, paginatedData, handlePageChange } =
    usePagination<Product>({
      items: data?.results ?? [],
      pageSize: PAGE_SIZE,
    })

  const handleSearch = () => {
    const queryString = buildSearchParamsRecommended(filters)
    navigate(`/search?${queryString}`)
  }

  return (
    <div>
      <SearchForm
        keyword={filters.keyword}
        onKeywordChange={updateKeyword}
        onSearch={handleSearch}
      />
      <div className="mb-25 flex flex-col items-center">
        <div className="mb-[17px] flex w-320 items-center justify-between">
          <h2 className="text-[24px] font-bold text-[#333333]">상세 검색</h2>
          <Button
            onClick={handleSearch}
            variant="VARIANT7"
            className="h-[39px] w-[117px]"
          >
            필터 적용하기
          </Button>
        </div>

        <div className="flex h-[266px] w-320 items-center justify-center gap-[59px] rounded-[6px] bg-[#F2F2F2]">
          <FeatureFilter
            selectedFeatures={filters.selectedFeatures}
            onFeatureChange={updateSelectedFeatures}
          />
          <SliderGroup filters={filters} onSliderChange={updateSliderValue} />
        </div>
      </div>

      <SearchResults
        data={paginatedData}
        isLoading={isLoading}
        isError={isError}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Search
