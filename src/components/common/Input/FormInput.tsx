import { useId, useState } from 'react'
import type { FormInputProps } from './FormInput.types'
import clsx from 'clsx'
import Search from '@/assets/search.png'

const FormInput = ({
  label,
  hasError = false,
  errorMessage = '',
  hasSuccess = false,
  successMessage = '',
  className,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  isSearch = false,
  onSearch,
  ...props
}: FormInputProps) => {
  const id = props.id ?? useId()
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const getBorderStyle = () => {
    if (disabled) return 'border-[#D9D9D9]'
    if (hasError) return 'border-red-500'
    if (hasSuccess) return 'border-green-500'
    if (isFocused) return 'border-[#F2544B]'
    return 'border-[#D9D9D9]'
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isSearch && e.key === 'Enter') {
      onSearch?.()
    }
  }
  return (
    <div className="w-full">
      <div className={clsx('flex flex-col gap-5')}>
        {label && (
          <label className="text-lg font-semibold" htmlFor={id}>
            {label}
          </label>
        )}
        <div className={clsx('relative', isSearch ? 'w-[360px]' : 'w-full')}>
          <input
            {...props}
            id={id}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={clsx(
              'text-lg placeholder:text-[#666666] focus:outline-none',
              isSearch
                ? 'h-[33px] w-90 border-b-2 border-b-[#000000] pr-10 pb-3 pl-[10px]'
                : 'h-[60px] w-[560px] rounded-[6px] border p-5',
              getBorderStyle(),
              className
            )}
          />

          {isSearch && (
            <button
              type="button"
              onClick={onSearch}
              className="absolute right-[10px]"
            >
              <img
                src={Search}
                alt="search"
                className="h-[18px] w-[18px] cursor-pointer"
              />
            </button>
          )}
        </div>
      </div>
      {hasError && errorMessage && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}
      {hasSuccess && successMessage && (
        <p className="text-sm text-green-500">{successMessage}</p>
      )}
    </div>
  )
}

export default FormInput
