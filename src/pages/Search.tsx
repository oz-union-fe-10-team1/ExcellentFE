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

  const productList: Product[] = (data?.results ?? []).map((item) => ({
    id: item.id,
    name: item.name,
    product_type: item.product_type,
    price: item.price,
    original_price: item.original_price ?? null,
    discount: item.discount ?? 0,
    discount_rate: item.discount_rate ?? 0,
    final_price: item.final_price,
    is_on_sale: item.is_on_sale,
    main_image_url: item.main_image_url,
    brewery_name: item.brewery_name ?? null,
    alcohol_type: item.alcohol_type ?? null,
    is_gift_suitable: item.is_gift_suitable,
    is_regional_specialty: item.is_regional_specialty,
    is_limited_edition: item.is_limited_edition,
    is_premium: item.is_premium,
    is_award_winning: item.is_award_winning,
    view_count: item.view_count,
    like_count: item.like_count,
    status: item.status,
    created_at: item.created_at,
  }))

  const { currentPage, totalPages, paginatedData, handlePageChange } =
    usePagination<Product>({
      items: productList,
      pageSize: PAGE_SIZE,
    })

  const handleKeywordSearch = (searchValue: string) => {
    const queryString = buildSearchParamsRecommended({
      ...filters,
      keyword: searchValue, // 이 부분은 buildSearchParamsRecommended 함수 내부에서 처리
      selectedFeatures: filters.selectedFeatures,
    })
    navigate(`/search?${queryString}`)
  }

  // 🎛 상세 필터 적용
  const handleFilterSearch = () => {
    const queryString = buildSearchParamsRecommended({ ...filters })
    navigate(`/search?${queryString}`)
  }

  return (
    <div>
      <SearchForm
        keyword={filters.keyword}
        onKeywordChange={updateKeyword}
        onSearch={handleKeywordSearch}
      />
      <div className="mb-25 flex flex-col items-center">
        <div className="mb-[17px] flex w-320 items-center justify-between">
          <h2 className="text-[24px] font-bold text-[#333333]">상세 검색</h2>
          <Button
            onClick={handleFilterSearch}
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
