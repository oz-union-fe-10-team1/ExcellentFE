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
    <div className="flex items-center border-b border-[#e1e1e1] py-4 text-center text-[#666666]">
      <div className="w-[15%] min-w-[80px] text-lg">{order}</div>
      <div className="flex w-[40%] min-w-[250px] items-center gap-4 pl-2">
        <div className="ml-36 flex items-center justify-center overflow-hidden border">
          <img src={img} alt={name || '상품 이미지'} className="h-25 w-25" />
        </div>
        <p className="text-left text-lg font-bold">{name}</p>
      </div>
      <div className="mx-auto w-20 text-lg">{quantity}</div>
      <div className="w-[15%] min-w-[80px] text-lg">
        {price?.toLocaleString()}원
      </div>
      <div className="flex w-[20%] min-w-[100px] justify-center">
        <Button
          variant={reviewed ? 'VARIANT5' : 'VARIANT6'}
          className={clsx(
            'cursor-pointer text-lg',
            reviewed ? 'text-white' : 'text-[#333333]'
          )}
        >
          {reviewed ? '본품 구매하기' : '후기 남기기'}
        </Button>
      </div>
    </div>
  )
}

export default OrderItemRow
