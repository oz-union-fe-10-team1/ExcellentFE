export const VARIANT_COLOR_MAP = {
  sweetness: '#F2544B',
  acidity: '#99B278',
  body: '#3C72B4',
  trust: '#000000',
  carbonation: '#6C4A5D',
  bitter: '#A17950',
  aroma: '#95AD75',
} as const

export type SliderVariant = keyof typeof VARIANT_COLOR_MAP
