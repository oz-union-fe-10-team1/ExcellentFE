export type SliderProps = {
  defaultValue?: number[]
  max?: number
  step?: number
  label: string
  variant: 'sweetness' | 'acidity' | 'body' | 'trust'
  className?: string
  value: number[]
  onValueChange: (value: number[]) => void
  formatValue?: (value: number) => string
}
