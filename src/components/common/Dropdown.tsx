import chevron from '@/assets/icons/dropdown/chevron.svg?react'
import Icon from '@/components/common/Icon'
import { useState, useRef, useEffect } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => setIsOpen(!isOpen)

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const selectedOption = options.find((option) => option.value === value)

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <button
        type="button"
        className="flex h-10 w-full items-center justify-between rounded border border-[#D9D9D9] bg-white p-2 text-[12px] text-[#666666] transition-colors hover:border-gray-400"
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
                'cursor-pointer p-2 transition-colors hover:bg-gray-100',
                option.value === value && 'bg-gray-100 font-semibold'
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
