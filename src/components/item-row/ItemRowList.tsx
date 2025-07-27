import clsx from 'clsx'
import type { ItemRowType } from '@/types/ItemRow/itemRows'
import minus from '@/assets/icons/cart/minus.svg'
import plus from '@/assets/icons/cart/plus.svg'
import { useCallback } from 'react'
import Button from '@/components/common/Button'

const ItemRowList: React.FC<ItemRowType> = ({
  type,
  order,
  img,
  name,
  quantity,
  price,
  reviewed,
  feedback,
  pickup,
  onQuantityChange,
}) => {
  // 수량 변경 핸들러
  const handleQuantityChange = useCallback(
    (newQuantity: number) => {
      if (newQuantity >= 1) {
        onQuantityChange?.(newQuantity)
      }
    },
    [onQuantityChange]
  )

  // 수량 증가 핸들러
  const handleIncreaseQuantity = useCallback(() => {
    handleQuantityChange((quantity || 0) + 1)
  }, [quantity, handleQuantityChange])

  // 수량 감소 핸들러
  const handleDecreaseQuantity = useCallback(() => {
    handleQuantityChange((quantity || 0) - 1)
  }, [quantity, handleQuantityChange])

  /* 주문 내역 */
  if (type === 'order') {
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

  /* 시음 히스토리 */
  if (type === 'tasting') {
    return (
      <tr className="border-b border-[#e1e1e1] text-[#666666]">
        <td className="py-4 align-middle">
          <div className="flex items-center justify-center gap-4">
            <img
              src={img}
              alt={name || '상품 이미지'}
              className="h-20 w-20 min-w-[80px] border border-[#ccc] object-cover"
              loading="lazy"
            />
            <p className="w-36 truncate text-left text-base font-bold">
              {name}
            </p>
          </div>
        </td>
        <td className="text-center align-middle text-lg">{order}</td>
        <td className="px-4 text-left align-middle text-lg leading-6 tracking-[0.05em]">
          {feedback}
        </td>
      </tr>
    )
  }

  /* 장바구니 상품 */
  if (type === 'cart') {
    return (
      <tr className="border-b border-[#e1e1e1] text-center text-[#333333]">
        <td className="py-5">
          <div className="flex items-center justify-start gap-5 pl-8">
            <img
              src={img}
              alt={name || '상품 이미지'}
              className="h-20 w-20 rounded border border-[#d9d9d9]"
              loading="lazy"
            />
            <p className="text-lg font-bold">{name}</p>
          </div>
        </td>

        <td>
          <div className="inline-flex h-8 w-20 items-center justify-center gap-1 rounded-[5px] bg-[#f6f6f6]">
            <div
              className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-md bg-[#e1e1e1]"
              onClick={handleDecreaseQuantity}
              role="button"
            >
              <img src={minus} alt="수량 감소" />
            </div>
            <span className="w-6 text-center">{quantity}</span>
            <div
              className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-md bg-[#000000]"
              onClick={handleIncreaseQuantity}
              role="button"
            >
              <img src={plus} alt="수량 증가" />
            </div>
          </div>
        </td>

        <td className="font-medium">{price?.toLocaleString()}원</td>

        <td className="text-gray-600">{pickup}</td>
      </tr>
    )
  }
  return null
}

export default ItemRowList
