import Pagination from '@/components/common/Pagination'
import type { ItemRowType } from '@/types/ItemRow/itemRows'
import { usePagination } from '@/hooks/usePagination'
import ItemRowContent from '@/components/common/ItemRowContent'
import { useOrders } from '@/hooks/useOrder'

const ITEMS_PER_PAGE = 4

const OrderHistory = () => {
  const { data, isLoading, isFetched } = useOrders()

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
      <div className="min-h-160">
        <ItemRowContent items={paginatedItems} type="order" />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default OrderHistory
