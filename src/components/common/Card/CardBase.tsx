import type { CardBaseProps } from '@/types/cardProps'
import HeartButton from '@/components/common/HeartButton.tsx'
import { useState } from 'react'

const CardBase = ({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  price,
}: CardBaseProps) => {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <div className="flex w-[300px] flex-col">
      <div className="relative mb-5 flex h-[290px] w-full items-center justify-center overflow-hidden rounded-[6px] border border-[#D9D9D9] bg-gray-200">
        <img src={imgSrc} alt={imgAlt} className="h-full w-full object-cover" />
        <HeartButton
          isLiked={isLiked}
          onClick={() => setIsLiked((prev) => !prev)}
          className="absolute right-2 bottom-2"
        />
      </div>

      <h2 className="text-lg text-balance text-[#333333]">{title}</h2>
      <p className="mt-1 text-[#666666]">{subtitle}</p>
      <p className="mt-1 text-[15px] text-[#333333]">
        {price?.toLocaleString()}원
      </p>
    </div>
  )
}

export default CardBase
