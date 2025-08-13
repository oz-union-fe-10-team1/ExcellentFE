export const storeOptions: { label: string; value: string }[] = []
export const regionOptions: { label: string; value: string }[] = []

// 오늘부터 N일치 실제 날짜 옵션
export const generateDateOptions = (days: number = 7) => {
  const options = []
  const today = new Date()

  for (let i = 0; i < days; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')

    options.push({
      label: `${yyyy}-${mm}-${dd}`,
      value: `${yyyy}-${mm}-${dd}`,
    })
  }

  return options
}

export const dateOptions = generateDateOptions(14)

export const DETAIL_PAGE_CONSTANTS = {
  STYLES: {
    CONTAINER_WIDTH: '1280px',
    IMAGE_SIZE: '560px',
    MAIN_SECTION_HEIGHT: '560px',
    MAIN_SECTION_TOP: '190px',
  },
  TABS: [
    { id: 'detail', label: '상품상세정보' },
    { id: 'shipping', label: '배송/반품/교환 안내' },
    { id: 'inquiry', label: '상품문의' },
  ],
} as const

export type TabId = (typeof DETAIL_PAGE_CONSTANTS.TABS)[number]['id']
