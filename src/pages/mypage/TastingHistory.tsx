import Pagination from '@/components/common/Pagination'
import type { ItemRowType } from '@/types/ItemRow/itemRows'
import useHistory from '@/hooks/useHistory'
import { usePagination } from '@/hooks/usePagination'
import ItemRowContent from '@/components/common/ItemRowContent'

const ITEMS_PER_PAGE = 3

const TastingHistory = () => {
  const { data, isLoading, isFetched } = useHistory()

  const {
    paginatedData: paginatedItems,
    currentPage,
    totalPages,
    handlePageChange,
  } = usePagination<ItemRowType>({
    items: data?.results ?? [],
    pageSize: ITEMS_PER_PAGE,
  })

  if (isLoading) return <div>로딩중</div>
  if (!isFetched || !data) return <div>데이터 불러오는 중</div>

  return (
    <div className="flex flex-col gap-6">
      <div className="min-h-151">
        <ItemRowContent items={paginatedItems} type="tasting" />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default TastingHistory
