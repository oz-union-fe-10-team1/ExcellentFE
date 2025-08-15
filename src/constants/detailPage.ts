import type { ProductDetail } from '@/mocks/detailMock'

export const DROPDOWN_FIELDS = [
  {
    key: 'orderRegion',
    label: '주문 지역 선택',
    options: [
      { label: '서울', value: '서울' },
      { label: '경기', value: '경기' },
      { label: '인천', value: '인천' },
    ],
    placeholder: '주문지역 선택',
  },
  {
    key: 'pickupStore',
    label: '픽업 매장',
    options: [
      { label: '픽업매장1', value: '픽업매장1' },
      { label: '픽업매장2', value: '픽업매장2' },
      { label: '픽업매장3', value: '픽업매장3' },
    ],
    placeholder: '픽업매장 선택',
  },
  {
    key: 'pickupDate',
    label: '픽업 날짜',
    options: [
      { label: '2025-08-16', value: '2025-08-16' },
      { label: '2025-08-17', value: '2025-08-17' },
      { label: '2025-08-18', value: '2025-08-18' },
    ],
    placeholder: '픽업날짜 선택',
  },
]

export const DRINK_INFO_ROWS = (data: ProductDetail) => [
  { label: '맛 정보', value: data.drink?.flavor_profile ?? '-' },
  { label: '주종', value: data.drink?.type ?? '-' },
  { label: '도수', value: data.drink?.alcohol_content ?? '-' },
  {
    label: '특징',
    value:
      `${data.drink?.ingredients ?? ''} / ${data.drink?.brewing_method ?? ''}`.trim() ||
      '-',
  },
]
