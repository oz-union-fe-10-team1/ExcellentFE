import { Link } from 'react-router-dom'
import type { CardBaseProps } from '@/types/cardProps'
import HeartButton from '@/components/common/HeartButton.tsx'
import { useState } from 'react'

const CardBase = ({
  id,
  type,
  imgSrc,
  imgAlt,
  title,
  subtitle,
  price,
}: CardBaseProps) => {
  const [isLiked, setIsLiked] = useState(false)

  // ID와 타입에 따라 링크 경로 결정
  const linkPath =
    id && type
      ? type === 'product'
        ? `/products/detail/${id}`
        : `/packages/detail/${id}`
      : '#' // ID나 타입이 없으면 기본값

  const handleHeartClick = () => {
    setIsLiked((prev) => !prev)
  }

  // 하트 버튼 영역 클릭 시 링크 이동 방지
  const handleHeartAreaClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Link to={linkPath} className="block">
      <div className="flex w-[300px] cursor-pointer flex-col transition-opacity hover:opacity-80">
        <div className="relative mb-5 flex h-[290px] w-full items-center justify-center overflow-hidden rounded-[6px] border border-[#D9D9D9] bg-gray-200">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-full w-full object-cover"
          />
          <div
            onClick={handleHeartAreaClick}
            className="absolute right-2 bottom-2"
          >
            <HeartButton isLiked={isLiked} onClick={handleHeartClick} />
          </div>
        </div>

        <h2 className="text-lg text-balance text-[#333333]">{title}</h2>
        <p className="mt-1 text-[#666666]">{subtitle}</p>
        <p className="mt-1 text-[15px] text-[#333333]">
          {price?.toLocaleString()}원
        </p>
      </div>
    </Link>
  )
}

export default CardBase
