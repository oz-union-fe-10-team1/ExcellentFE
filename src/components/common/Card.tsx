import type { CardProps } from '@/types/cardProps'

const Card = ({ imgSrc, imgAlt, title, subtitle, price }: CardProps) => {
  return (
    <div className="flex w-[300px] flex-col">
      <div className="mb-5 flex h-[290px] w-full items-center justify-center overflow-hidden rounded-[6px] border border-[#D9D9D9] bg-gray-200">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>

      {title && (
        <h2 className="text-lg text-balance text-[#333333]">{title}</h2>
      )}

      {subtitle && <p className="mt-1 text-[#666666]">{subtitle}</p>}

      {price && <p className="mt-1 text-[15px] text-[#333333]">{price}원</p>}
    </div>
  )
}

export default Card
