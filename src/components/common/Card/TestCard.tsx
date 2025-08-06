import type { TestCardProps } from '@/types/cardProps'

const TestCard = ({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  firstLabel,
  secondLabel,
}: TestCardProps) => {
  return (
    <div className="flex w-[130px] flex-col">
      <div className="relative mb-[9px] flex h-[125px] w-full items-center justify-center overflow-hidden rounded-[6px] border border-[#D9D9D9] bg-gray-200">
        <img src={imgSrc} alt={imgAlt} className="h-full w-full object-cover" />
      </div>
      <p className="mb-[13px] text-sm font-bold text-[#333333]"> {title} </p>
      <p className="mb-2.5 text-xs font-bold text-[#666666]">{subtitle}</p>
      <div className="flex justify-between">
        <p className="flex h-[25px] items-center justify-center bg-[#FFFFFF] px-2 py-[5px] text-[11px] text-[#F2544B]">
          {firstLabel}
        </p>
        <p className="flex h-[25px] items-center justify-center bg-[#FFFFFF] px-2 py-[5px] text-[11px] text-[#F2544B]">
          {secondLabel}
        </p>
      </div>
    </div>
  )
}

export default TestCard
