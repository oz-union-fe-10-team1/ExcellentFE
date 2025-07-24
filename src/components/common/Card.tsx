interface Card {
  imgSrc?: string
  imgAlt?: string
  title: string
  subtitle: string
}

export function Card({ imgSrc, imgAlt, title, subtitle }: Card) {
  return (
    <div className="flex flex-col">
      {imgSrc ? (
        <div className="mb-[20px] flex h-[290px] w-[300px] items-center justify-center overflow-hidden rounded-[6px] border-[1px] border-[#D9D9D9]">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="mb-[20px] h-48 w-full rounded-lg bg-gray-200" />
      )}

      {title && (
        <h2 className="w-[300px] text-[18px] text-balance text-[#333333]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-[4px] w-[300px] text-[15px] text-[#666666]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
