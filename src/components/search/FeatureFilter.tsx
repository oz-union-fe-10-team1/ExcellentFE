import type { FeatureFilterProps } from '@/types/search'
import { Check } from 'lucide-react'
import { FEATURE_OPTIONS } from '@/constants/search'

const FeatureFilter = ({
  selectedFeatures,
  onFeatureChange,
}: FeatureFilterProps) => {
  const handleFeatureChange = (label: string) => {
    const newFeatures = selectedFeatures.includes(label)
      ? selectedFeatures.filter((item) => item !== label)
      : [...selectedFeatures, label]
    onFeatureChange(newFeatures)
  }

  return (
    <ul className="flex h-[180px] flex-col justify-between gap-3">
      {FEATURE_OPTIONS.map(({ id, label }) => (
        <li key={id}>
          <label className="inline-flex cursor-pointer items-center gap-[14px]">
            <div className="relative h-[30px] w-[30px]">
              <input
                type="checkbox"
                className="peer h-full w-full appearance-none rounded-[6px] border border-[#D9D9D9] bg-white checked:bg-blue-500"
                checked={selectedFeatures.includes(label)}
                onChange={() => handleFeatureChange(label)}
              />
              <Check className="pointer-events-none absolute inset-0 m-auto h-[20px] w-[20px] text-white opacity-0 peer-checked:opacity-100" />
            </div>
            <span className="text-[18px] text-[#333333] select-none">
              {label}
            </span>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default FeatureFilter
