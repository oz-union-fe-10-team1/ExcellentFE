export const PAGE_SIZE = 8

export const FEATURE_OPTIONS = [
  { id: 1, label: '선물용', key: 'gift_suitable' },
  { id: 2, label: '지역 특산주', key: 'regional_specialty' },
  { id: 3, label: '주류 대상 수상', key: 'award_winning' },
  { id: 4, label: '리미티드 에디션', key: 'limited_edition' },
] as const

export const SLIDER_CONFIGS = [
  { id: 'sweetness', label: '단\u00A0\u00A0\u00A0\u00A0맛' },
  { id: 'acidity', label: '산\u00A0\u00A0\u00A0\u00A0미' },
  { id: 'body', label: '바디감' },
  { id: 'carbonation', label: '탄산감' },
  { id: 'bitter', label: '쓴\u00A0\u00A0\u00A0\u00A0맛' },
  { id: 'aroma', label: '풍\u00A0\u00A0\u00A0\u00A0미' },
] as const

export type SliderVariant = (typeof SLIDER_CONFIGS)[number]['id']
