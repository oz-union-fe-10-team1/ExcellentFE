import Pagination from '@/components/common/Pagination'
import type { ItemRowType } from '@/types/ItemRow/itemRows'
import { usePagination } from '@/hooks/usePagination'
import ItemRowContent from '@/components/common/ItemRowContent'
import { useTasteHistory } from '@/hooks/user/useUser'

const ITEMS_PER_PAGE = 3

const TastingHistory = () => {
  const { data, isLoading, isFetched } = useTasteHistory()

  const {
    paginatedData: paginatedItems,
    currentPage,
    totalPages,
    handlePageChange,
  } = usePagination<ItemRowType>({
    items: data ?? [],
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
