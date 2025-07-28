import type { CartItemRowProps } from '@/types/ItemRow/itemRows'
import PlusIcon from '@/assets/icons/cart/plus.svg?react'
import MinusIcon from '@/assets/icons/cart/minus.svg?react'
import Icon from '@/components/common/Icon'

const CartItemRow = ({
  img,
  name,
  quantity,
  price,
  pickup,
  onQuantityChange,
  onCheckChange,
  checked,
}: CartItemRowProps) => {
  // 수량 변경 핸들러
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      onQuantityChange?.(newQuantity)
    }
  }

  // 수량 증가 핸들러
  const handleIncreaseQuantity = () => {
    handleQuantityChange((quantity || 0) + 1)
  }

  // 수량 감소 핸들러
  const handleDecreaseQuantity = () => {
    handleQuantityChange((quantity || 0) - 1)
  }

  return (
    <tr className="border-b border-[#e1e1e1] text-center text-[#333333]">
      <td className="py-5">
        <div className="flex items-center justify-start gap-3 pl-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckChange(e.target.checked)}
            className="h-5 w-5"
          />
          <img
            src={img || '상품 이미지'}
            alt={name || '상품 이름'}
            className="h-20 w-20 rounded border border-[#d9d9d9]"
          />
          <p className="text-left text-lg font-bold">{name || '상품 이름'}</p>
        </div>
      </td>

      <td>
        <div className="inline-flex h-8 w-20 items-center justify-center gap-1 rounded-[5px] bg-[#f6f6f6]">
          <button aria-label="수량 감소" onClick={handleDecreaseQuantity}>
            <Icon
              icon={MinusIcon}
              size={16}
              wrapperClassName="rounded-[4px] bg-[#e1e1e1]"
            />
          </button>
          <span className="w-6 text-center">{quantity || '상품 수량'}</span>
          <button aria-label="수량 증가" onClick={handleIncreaseQuantity}>
            <Icon
              icon={PlusIcon}
              size={16}
              wrapperClassName="rounded-[4px] bg-[#000000]"
            />
          </button>
        </div>
      </td>

      <td className="font-medium">{price?.toLocaleString()}원</td>

      <td className="text-sm text-[#666666]">{pickup}</td>
    </tr>
  )
}

export default CartItemRow
