interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (delta: number) => void
}

export const QuantitySelector = ({
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) => {
  return (
    <div className="flex items-center">
      <span className="w-[28px] text-[16px] font-medium text-[#333333]">
        수량
      </span>
      <div className="relative ml-[89px] flex h-[30px] w-[80px] items-center rounded-[5px] bg-[#F6F6F6]">
        <button
          onClick={() => onQuantityChange(-1)}
          className="absolute left-[7px] flex h-[15px] w-[15px] items-center justify-center rounded-[5px] bg-[#E1E1E1]"
        >
          <div className="h-[1px] w-[9px] bg-[#5E5E6D]" />
        </button>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[16px] text-[#29292E]">
          {quantity}
        </span>
        <button
          onClick={() => onQuantityChange(1)}
          className="absolute right-[7px] flex h-[15px] w-[15px] items-center justify-center rounded-[5px] bg-black"
        >
          <div className="relative h-[9px] w-[9px]">
            <div className="absolute top-0 left-1/2 h-[9px] w-[1px] -translate-x-1/2 transform bg-white" />
            <div className="absolute top-1/2 left-0 h-[1px] w-[9px] -translate-y-1/2 transform bg-white" />
          </div>
        </button>
      </div>
    </div>
  )
}
