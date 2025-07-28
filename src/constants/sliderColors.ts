export const VARIANT_COLOR_MAP = {
  sweetness: '#F2544B',
  acidity: '#99B278',
  body: '#3C72B4',
  trust: '#000000',
} as const

export type SliderVariant = keyof typeof VARIANT_COLOR_MAP
