import type { ItemRowType } from '@/types/ItemRow/itemRows'

const TastingItemRow = ({ img, name, order, feedback }: ItemRowType) => {
  return (
    <div className="flex items-center border-b border-[#e1e1e1] py-4 text-[#666666]">
      <div className="ml-10 flex items-center justify-center gap-4">
        <img
          src={img}
          alt={name}
          className="h-25 w-25 rounded-[5px] border border-[#d9d9d9] object-cover"
        />
        <p className="w-36 text-left text-base font-bold whitespace-nowrap">
          {name}
        </p>
      </div>
      <div className="ml-38 w-[20%] text-center text-lg">{order}</div>
      <div className="ml-34 w-95 text-left text-lg leading-6 font-medium tracking-[0.05em] text-[#666666]">
        {feedback}
      </div>
    </div>
  )
}

export default TastingItemRow
