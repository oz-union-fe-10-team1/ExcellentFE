export interface SliderProps {
  defaultValue?: number[]
  max?: number
  step?: number
  label: string
  variant: 'sweetness' | 'acidity' | 'body'
  className?: string
}
