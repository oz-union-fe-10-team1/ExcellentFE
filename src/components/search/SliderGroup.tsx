import Slider from '@/components/common/Slider'
import { SLIDER_CONFIGS } from '@/constants/search'
import type { SliderGroupProps, SearchFilters } from '@/types/search'
import type { SliderVariant } from '@/constants/search'

const SliderGroup = ({ filters, onSliderChange }: SliderGroupProps) => {
  const leftSliders = SLIDER_CONFIGS.filter((s) =>
    ['sweetness', 'acidity', 'body'].includes(s.id)
  )

  const rightSliders = SLIDER_CONFIGS.filter((s) =>
    ['carbonation', 'bitter', 'aroma'].includes(s.id)
  )

  const renderSliders = (sliders: Array<(typeof SLIDER_CONFIGS)[number]>) => (
    <div className="flex h-[181px] flex-col justify-between gap-[30px]">
      {sliders.map(({ id, label }) => (
        <Slider
          key={id}
          variant={id as SliderVariant}
          label={label}
          value={filters[id as keyof SearchFilters] as number[]}
          onValueChange={(value) =>
            onSliderChange(id as keyof SearchFilters, value)
          }
        />
      ))}
    </div>
  )

  return (
    <div className="flex gap-8">
      {renderSliders(leftSliders)}
      {renderSliders(rightSliders)}
    </div>
  )
}

export default SliderGroup
