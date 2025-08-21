import type { SliderVariant } from '@/constants/sliderColors'

export type SliderProps = {
  defaultValue?: number[]
  max?: number
  step?: number
  label?: string
  variant: SliderVariant
  className?: string
  value: number[]
  onValueChange: (value: number[]) => void
  formatValue?: (value: number) => string
}
