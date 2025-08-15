import chevron from '@/assets/icons/dropdown/chevron.svg?react'
import Icon from '@/components/common/Icon'
import { useDropdown } from '@/hooks/useDropdown'
import { cn } from '@/utils/cn'

interface DropdownProps {
  options: { label: string; value: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
  className,
}: DropdownProps) => {
  const { isOpen, dropdownRef, handleToggle } = useDropdown()

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    handleToggle()
  }

  const selectedOption = options.find((option) => option.value === value)

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <button
        type="button"
        className="flex h-[30px] w-full cursor-pointer items-center justify-between rounded-[5px] border border-[#D9D9D9] bg-white p-2 text-[12px] text-[#666666] transition-colors hover:border-[#D9D9D9]"
        onClick={handleToggle}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <Icon
          icon={chevron}
          size={12}
          className={cn(
            'transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          color="#000"
          ariaLabel="Dropdown chevron icon"
        />
      </button>
      {isOpen && (
        <ul className="absolute top-full z-10 mt-1 w-full rounded border border-[#D9D9D9] bg-white text-[12px] text-[#666666] shadow-lg">
          {placeholder && (
            <li
              className="cursor-not-allowed p-2 text-gray-400"
              onClick={() => handleSelect('')}
            >
              {placeholder}
            </li>
          )}
          {options.map((option) => (
            <li
              key={option.value}
              className={cn(
                'p-2 transition-colors hover:bg-[#D9D9D9]',
                option.value === value && 'bg-[#D9D9D9] font-semibold'
              )}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
