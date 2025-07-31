import { useFeedbackList } from '@/hooks/itemrow/useHistory'
import Pagination from '@/components/common/Pagination'
import ItemRow from '@/components/common/ItemRow'
import useTastingHistory from '@/hooks/itemrow/useTastingHistory'

const ITEMS_PER_PAGE = 3

const TastingHistory = () => {
  const { data, isLoading, isFetched } = useFeedbackList()

  const { paginatedItems, currentPage, setCurrentPage, totalPages } =
    useTastingHistory({
      data: isFetched ? data : undefined,
      itemsPerPage: ITEMS_PER_PAGE,
    })

  if (isLoading) return <div>로딩중</div>
  if (!isFetched || !data) return <div>데이터 불러오는 중</div>

  return (
    <div className="flex flex-col gap-6">
      <div className="min-h-151">
        <ItemRow items={paginatedItems} type="tasting" />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default TastingHistory
