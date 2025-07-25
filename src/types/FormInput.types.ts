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

  // 검색인풋 사용시
  isSearch?: boolean
  onSearch?: () => void
}
