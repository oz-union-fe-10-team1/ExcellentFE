import {
  BUTTON_VARIANTS,
  DEFAULT_BUTTON_VARIANT,
  type ButtonVariant,
} from '@/constants/button'
import { cn } from '@/utils/cn'

type ButtonProps = {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  variant?: ButtonVariant
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = DEFAULT_BUTTON_VARIANT,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        BUTTON_VARIANTS[variant],
        { 'cursor-not-allowed': disabled },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
