import type React from 'react'

interface TestButtonProps {
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

const TestButton = ({ className, onClick, children }: TestButtonProps) => {
  return (
    <button
      className={`h-[59px] w-[460px] rounded-[60px] text-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TestButton
