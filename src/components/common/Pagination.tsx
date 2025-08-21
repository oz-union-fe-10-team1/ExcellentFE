import NextIcon from '@/assets/icons/pagination/next.svg?react'
import PrevIcon from '@/assets/icons/pagination/prev.svg?react'
import Icon from '@/components/common/Icon'
import { cn } from '@/utils/cn'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  if (totalPages === 0) return null

  const handlePrevious = () => {
    if (currentPage === 1) return
    onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    if (totalPages === 1) return
    onPageChange(currentPage + 1)
  }

  return (
    <nav
      aria-label="pagination"
      className={cn('flex items-center justify-center gap-4', className)}
    >
      <button
        type="button"
        aria-label="이전 페이지"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <Icon
          icon={PrevIcon}
          size={32}
          color={currentPage === 1 ? '#E0E0E0' : '#F2544B'}
        />
      </button>
      <ol className="flex gap-4">
        {pages.map((pageNumber) => {
          return (
            <li key={pageNumber}>
              <button
                type="button"
                aria-label="페이지"
                aria-current={pageNumber === currentPage ? 'page' : undefined}
                onClick={() => onPageChange(pageNumber)}
                className={cn(
                  `h-8 w-8 cursor-pointer rounded-sm text-[#333]`,
                  pageNumber === currentPage &&
                    'bg-[#F2544B] font-semibold text-white'
                )}
              >
                {pageNumber}
              </button>
            </li>
          )
        })}
      </ol>
      <button
        type="button"
        aria-label="다음 페이지"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <Icon
          icon={NextIcon}
          size={32}
          color={currentPage === totalPages ? '#E0E0E0' : '#F2544B'}
        />
      </button>
    </nav>
  )
}

export default Pagination
