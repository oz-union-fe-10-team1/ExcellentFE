import type { ItemRowType } from '@/types/ItemRow/itemRows'

const tasting = ({ img, name, order, feedback }: ItemRowType) => {
  return (
    <tr className="border-b border-[#e1e1e1] text-[#666666]">
      <td className="py-4 align-middle">
        <div className="flex items-center justify-center gap-4">
          <img
            src={img}
            alt={name}
            className="h-20 w-20 min-w-[80px] border border-[#ccc] object-cover"
            loading="lazy"
          />
          <p className="w-36 truncate text-left text-base font-bold">{name}</p>
        </div>
      </td>
      <td className="text-center align-middle text-lg">{order}</td>
      <td className="px-4 text-left align-middle text-lg leading-6 tracking-[0.05em]">
        {feedback}
      </td>
    </tr>
  )
}

export default tasting
