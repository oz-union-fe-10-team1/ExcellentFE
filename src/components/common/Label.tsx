interface LabelProps {
  title: string
  subtitle: React.ReactNode
  className?: string
}

const Label = ({ title, subtitle, className }: LabelProps) => {
  return (
    <div className={` ${className}`}>
      <p className="text-[32px] font-semibold text-[#333333]">{title}</p>
      <p className="text-lg text-[#666666]">{subtitle}</p>
    </div>
  )
}

export default Label
