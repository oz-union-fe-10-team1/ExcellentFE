import { useId, useState } from 'react'
import type { FormInputProps } from './FormInput.types'
import clsx from 'clsx'

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
  return (
    <div className="w-full">
      <div className={clsx('flex flex-col gap-5')}>
        {label && (
          <label className="text-[18px] font-semibold" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          {...props}
          disabled={disabled}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={clsx(
            'h-[60px] w-[560px] rounded-[6px] border p-5 text-[18px] placeholder:text-[#666666] focus:outline-none',
            getBorderStyle(),
            className
          )}
        />
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
