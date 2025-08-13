export const TASTE_TAGS = [
  {
    label: '#단맛',
    value: '단맛',
  },
  {
    label: '#꽃향기',
    value: '꽃향기',
  },
  {
    label: '#곡물향',
    value: '곡물향',
  },
  {
    label: '#상큼한',
    value: '상큼한',
  },
  {
    label: '#고소한',
    value: '고소한',
  },
  {
    label: '#부드러운',
    value: '부드러운',
  },
  {
    label: '#톡쏘는',
    value: '톡쏘는',
  },
  {
    label: '#달콤한',
    value: '달콤한',
  },
  {
    label: '#묵직한',
    value: '묵직한',
  },
  {
    label: '#드라이',
    value: '드라이',
  },
  {
    label: '#나무향',
    value: '나무향',
  },
  {
    label: '#누룩향',
    value: '누룩향',
  },
] as const

export const TASTE_SLIDERS = [
  { key: 'sweetness' as const, label: '단맛', variant: 'sweetness' as const },
  { key: 'acidity' as const, label: '산미', variant: 'acidity' as const },
  { key: 'body' as const, label: '바디감', variant: 'body' as const },
  {
    key: 'carbonation' as const,
    label: '탄산감',
    variant: 'carbonation' as const,
  },
  { key: 'bitter' as const, label: '쓴맛', variant: 'bitter' as const },
  { key: 'aroma' as const, label: '향', variant: 'aroma' as const },
] as const

export const MAX_SELECTED_TAGS = 3
