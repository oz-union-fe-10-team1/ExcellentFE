import Button from '@/components/common/Button'
import type { ItemRowType } from '@/types/ItemRow/itemRows'
import clsx from 'clsx'

const OrderItemRow = ({
  img,
  order,
  name,
  quantity,
  price,
  reviewed,
}: ItemRowType) => {
  return (
    <tr className="border-b border-[#e1e1e1] text-center text-[#666666]">
      <td className="text-lg">{order}</td>
      <td className="flex items-center justify-center gap-2 py-2">
        <img
          src={img}
          alt={name || '상품 이미지'}
          className="h-20 w-20 border"
          loading="lazy"
        />
        <p className="text-lg font-bold">{name}</p>
      </td>
      <td className="text-lg">{quantity}</td>
      <td className="text-lg">{price?.toLocaleString()}원</td>
      <td>
        <Button
          variant={reviewed ? 'VARIANT5' : 'VARIANT6'}
          className={clsx(
            'cursor-pointer text-lg',
            reviewed ? 'text-white' : 'text-[#333333]'
          )}
        >
          {reviewed ? '본품 구매하기' : '후기 남기기'}
        </Button>
      </td>
    </tr>
  )
}

export default OrderItemRow
