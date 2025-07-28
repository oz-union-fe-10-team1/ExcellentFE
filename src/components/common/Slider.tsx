import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'
import type { SliderProps } from '@/types/slider.types'
import { VARIANT_COLOR_MAP } from '@/constants/sliderColors'

const Slider = ({
  defaultValue = [0],
  max = 5,
  step = 0.5,
  label,
  variant = 'sweetness',
  value,
  onValueChange,
  className,
  formatValue,
}: SliderProps) => {
  const color = VARIANT_COLOR_MAP[variant]
  const displayValue = value?.[0] ?? 0

  return (
    <div className={clsx('flex items-center', className)}>
      <span className="text-5 mr-11 w-13 font-bold text-[#333333]">
        {label}
      </span>
      <div className="flex items-center">
        <div className="mr-3 text-[22px] font-light">
          {formatValue ? formatValue(0) : '0'}
        </div>
        <SliderPrimitive.Root
          defaultValue={defaultValue}
          value={value}
          onValueChange={onValueChange}
          max={max}
          step={step}
          className={clsx(
            'relative flex h-[20px] w-[388px] touch-none items-center select-none',
            className
          )}
        >
          <SliderPrimitive.Track className="relative h-full w-full rounded-full bg-[#DFDFDF]">
            <SliderPrimitive.Range
              className="absolute h-full rounded-full"
              style={{ backgroundColor: color }}
            />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb asChild>
            <div
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] bg-[#FFFFFF] outline-none"
              style={{ borderColor: color }}
            >
              <div
                className="h-[24px] w-[24px] rounded-full"
                style={{ backgroundColor: color }}
              />
            </div>
          </SliderPrimitive.Thumb>
        </SliderPrimitive.Root>
        <div className="ml-3 text-[22px] font-light">
          {formatValue ? formatValue(displayValue) : displayValue.toFixed(1)}
        </div>
      </div>
    </div>
  )
}

export default Slider
