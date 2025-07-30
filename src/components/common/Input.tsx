import { useId, useState } from 'react'
import type { BaseInputProps, SearchInputProps } from '@/types/input.types.ts'
import clsx from 'clsx'
import INPUT_VARIANTS from '@/foundations/input'
import Icon from '@/components/common/Icon'
import SearchIcon from '@/assets/icons/input/search.svg?react'

type InputProps = BaseInputProps | SearchInputProps

const Input = ({
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
  ...props
}: InputProps) => {
  const id = props.id ?? useId()
  const [isFocused, setIsFocused] = useState(false)

  const variant = 'variant' in props ? props.variant : 'default'
  const onSearch = 'onSearch' in props ? props.onSearch : undefined
  const isSearch = variant === 'search'

  const inputProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => key !== 'onSearch' && key !== 'variant'
    )
  )

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isSearch && e.key === 'Enter') {
      onSearch?.()
    }
  }

  const getBorderStyle = () => {
    if (disabled) return 'border-[#D9D9D9]'
    if (hasError) return 'border-[#F2544B]'
    if (hasSuccess) return 'border-[#46B882]'
    if (isFocused) return 'border-[#000000]'
    return 'border-[#D9D9D9]'
  }

  return (
    <div className={clsx('w-full')}>
      <div className="flex items-center gap-11">
        {label && (
          <label
            className="text-lg font-semibold whitespace-nowrap"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div
          className={clsx(
            'relative',
            variant === 'search' ? 'w-[360px]' : 'w-full'
          )}
        >
          <input
            {...inputProps}
            id={id}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={clsx(
              INPUT_VARIANTS[variant],
              getBorderStyle(),
              className
            )}
          />

          {isSearch && (
            <button
              type="button"
              onClick={onSearch}
              className="absolute right-[10px]"
              aria-label="search"
            >
              <Icon icon={SearchIcon} size={18} />
            </button>
          )}
        </div>
      </div>
      {hasError && errorMessage && (
        <p className="text-sm text-[#F43F5E]">{errorMessage}</p>
      )}
      {hasSuccess && successMessage && (
        <p className="text-sm text-[#46B882]">{successMessage}</p>
      )}
    </div>
  )
}

export default Input
