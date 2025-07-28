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
    <div className="flex items-center border-b border-[#e1e1e1] py-5 text-center text-[#333333]">
      {/* 체크박스, 이미지, 상품명 */}
      <div className="flex w-[40%] min-w-[250px] items-center gap-12">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckChange?.(e.target.checked)}
          className="ml-12 h-5 w-5"
        />
        <img
          src={img || '상품 이미지'}
          alt={name || '상품 이름'}
          className="h-25 w-25 rounded border border-[#d9d9d9]"
        />
        <p className="text-left text-lg font-bold">{name || '상품 이름'}</p>
      </div>

      {/* 수량 조절 */}
      <div className="mx-auto inline-flex h-8 w-20 items-center justify-center gap-1 rounded-[5px] bg-[#f6f6f6]">
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

      {/* 가격 */}
      <div className="w-[15%] min-w-[80px] font-medium">
        {price?.toLocaleString()}원
      </div>

      {/* 픽업 매장 */}
      <div className="w-[25%] min-w-[150px] text-sm text-[#666666]">
        {pickup}
      </div>
    </div>
  )
}

export default CartItemRow
