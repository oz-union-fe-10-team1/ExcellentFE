import { useEffect, useState } from 'react'

interface UsePaginationProps<T> {
  items: T[]
  pageSize?: number
}

export const usePagination = <T>({
  items,
  pageSize = 10,
}: UsePaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / pageSize)

  useEffect(() => {
    if (items.length > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [items.length, totalPages])

  const paginatedData = items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return {
    currentPage,
    totalPages,
    paginatedData,
    handlePageChange,
  }
}
