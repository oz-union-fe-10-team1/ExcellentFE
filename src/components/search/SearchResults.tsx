import Card from '@/components/common/cards/Card'
import Pagination from '@/components/common/Pagination'
import type { SearchResultsProps } from '@/types/search'
import { Link } from 'react-router-dom'

const SearchResults = ({
  data,
  isLoading,
  isError,
  currentPage,
  totalPages,
  onPageChange,
}: SearchResultsProps) => {
  const renderContent = () => {
    if (isLoading) {
      return <div className="text-center text-lg font-medium">로딩 중...</div>
    }

    if (isError) {
      return (
        <div className="text-center text-lg font-medium text-red-600">
          에러가 발생했습니다.
        </div>
      )
    }

    return (
      <div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-6">
          {data.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card
                type="default"
                data={{
                  id: product.id,
                  imgSrc: product.main_image_url,
                  imgAlt: product.name,
                  title: product.name,
                  subtitle: product.brewery_name ?? undefined,
                  price: product.price,
                }}
              />
            </Link>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          className="mt-20"
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="mb-[19px] text-[24px] font-bold text-[#333333]">
          검색 결과
        </h2>
        <hr className="mb-5 w-[1280px] border-2 border-[#000000]" />
      </div>
      <div className="mb-25 flex flex-col gap-20">{renderContent()}</div>
    </div>
  )
}

export default SearchResults
