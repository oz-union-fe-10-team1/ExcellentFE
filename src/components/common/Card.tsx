import type { CardProps } from '@/types/cardProps'

const Card = ({ imgSrc, imgAlt, title, subtitle }: CardProps) => {
  return (
    <div className="flex flex-col">
      {imgSrc ? (
        <div className="mb-5 flex h-[290px] w-[300px] items-center justify-center overflow-hidden rounded-[6px] border-[1px] border-[#D9D9D9]">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="mb-5 h-48 w-full rounded-lg bg-gray-200" />
      )}

      {title && (
        <h2 className="w-[300px] text-lg text-balance text-[#333333]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-[4px] w-[300px] text-[#666666]">{subtitle}</p>
      )}
    </div>
  )
}

export default Card
