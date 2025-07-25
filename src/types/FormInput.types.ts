export interface FormInputProps {
  id?: string
  label?: string
  type?: 'text' | 'email' | 'password' | 'number'
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  hasError?: boolean
  errorMessage?: string
  hasSuccess?: boolean
  successMessage?: string
  disabled?: boolean
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  className?: string

  variant?: 'default' | 'search'

  onSearch?: () => void
}
