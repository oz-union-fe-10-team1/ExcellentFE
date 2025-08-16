import type { ProductDetail } from '@/types/product'

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
  {
    label: '맛 정보',
    value: data.drink
      ? `단맛 ${data.drink.taste_profile.sweetness}, 산미 ${data.drink.taste_profile.acidity}, 쓴맛 ${data.drink.taste_profile.bitterness}, 바디감 ${data.drink.taste_profile.body}, 향 ${data.drink.taste_profile.aroma}`
      : '-',
  },
  { label: '주종', value: data.drink?.alcohol_type_display ?? '-' },
  { label: '도수', value: data.drink ? `${data.drink.abv}%` : '-' },
  {
    label: '특징',
    value: data.drink?.ingredients ?? '-',
  },
]
