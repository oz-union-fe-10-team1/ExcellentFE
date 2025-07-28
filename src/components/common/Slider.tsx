import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'
import type { SliderProps } from '@/types/slider.types'

const variantColorMap = {
  sweetness: '#F2544B',
  acidity: '#99B278',
  body: '#3C72B4',
} as const

const Slider = ({
  defaultValue = [0],
  max = 5,
  step = 0.5,
  label,
  variant = 'sweetness',
  className,
}: SliderProps) => {
  const color = variantColorMap[variant]

  return (
    <div className="flex items-center">
      <span className="font-[#333333 font-bold] mr-11">{label}</span>
      <div>
        <SliderPrimitive.Root
          defaultValue={defaultValue}
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
      </div>
    </div>
  )
}

export default Slider
