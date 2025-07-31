import { useState, useEffect } from 'react'
import type { ItemRowType } from '@/types/ItemRow/itemRows'

interface UseTastingHistoryParams {
  data?: { results: ItemRowType[]; count: number }
  itemsPerPage: number
}

interface UseTastingHistoryReturn {
  paginatedItems: ItemRowType[]
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
}

const useTastingHistory = ({
  data,
  itemsPerPage,
}: UseTastingHistoryParams): UseTastingHistoryReturn => {
  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedItems, setPaginatedItems] = useState<ItemRowType[]>([])

  useEffect(() => {
    if (!data) return
    const startIdx = (currentPage - 1) * itemsPerPage
    const sliced = data.results.slice(startIdx, startIdx + itemsPerPage)
    setPaginatedItems(sliced)
  }, [data, currentPage, itemsPerPage])

  const totalPages = data ? Math.ceil(data.count / itemsPerPage) : 0

  return {
    paginatedItems,
    currentPage,
    setCurrentPage,
    totalPages,
  }
}

export default useTastingHistory
