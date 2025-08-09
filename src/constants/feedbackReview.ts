export const TASTE_TAGS = [
  {
    label: '#단맛',
    value: 'sweet',
  },
  {
    label: '#꽃향기',
    value: 'flower',
  },
  {
    label: '#곡물향',
    value: 'grain',
  },
  {
    label: '#상큼한',
    value: 'sour',
  },
  {
    label: '#고소한',
    value: 'rich',
  },
  {
    label: '#부드러운',
    value: 'soft',
  },
  {
    label: '#톡쏘는',
    value: 'tart',
  },
  {
    label: '#달콤한',
    value: 'sweet',
  },
  {
    label: '#묵직한',
    value: 'thick',
  },
  {
    label: '#드라이',
    value: 'dry',
  },
  {
    label: '#나무향',
    value: 'wood',
  },
  {
    label: '#누룩향',
    value: 'yeast',
  },
] as const

export const TASTE_SLIDERS = [
  { key: 'sweetness' as const, label: '단맛', variant: 'sweetness' as const },
  { key: 'acidity' as const, label: '산미', variant: 'acidity' as const },
  { key: 'body' as const, label: '바디감', variant: 'body' as const },
] as const

export const MAX_SELECTED_TAGS = 3
