import chevron from '@/assets/icons/dropdown/chevron.svg?react'
import Icon from '@/components/common/Icon'

type DropdownProps = {
  options: { label: string; value: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer appearance-none rounded border border-[#D9D9D9] bg-white p-2 text-[12px] text-[#666666] transition-colors hover:border-gray-400"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon
        icon={chevron}
        size={12}
        className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 transform"
        color="#000"
        ariaLabel="Dropdown chevron icon"
      />
    </div>
  )
}

export default Dropdown
