import type { CartItemRowProps } from '@/types/ItemRow/itemRows'
import PlusIcon from '@/assets/icons/cart/plus.svg?react'
import MinusIcon from '@/assets/icons/cart/minus.svg?react'
import Icon from '@/components/common/Icon'
import useCartItem from '@/hooks/useCartItem'
import { cn } from '@/utils/cn'

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
  const {
    localQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    isDecreaseDisabled,
  } = useCartItem({ quantity, onQuantityChange })

  return (
    <div className="flex items-center border-b border-[#e1e1e1] py-5 text-center text-[#333333]">
      <div className="flex w-[40%] min-w-[250px] items-center gap-12">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckChange?.(e.target.checked)}
          className="ml-12 h-5 w-5 accent-[#f2544b]"
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
        <button
          aria-label="수량 감소"
          onClick={handleDecreaseQuantity}
          disabled={isDecreaseDisabled}
        >
          <Icon
            icon={MinusIcon}
            size={16}
            wrapperClassName={cn(
              'rounded-[4px]',
              isDecreaseDisabled
                ? 'bg-[#cccccc] cursor-not-allowed'
                : 'bg-[#e1e1e1]'
            )}
          />
        </button>
        <span className="w-6 text-center">{localQuantity}</span>
        <button aria-label="수량 증가" onClick={handleIncreaseQuantity}>
          <Icon
            icon={PlusIcon}
            size={16}
            wrapperClassName="rounded-[4px] bg-[#000000]"
          />
        </button>
      </div>

      <div className="w-[15%] min-w-[80px] font-medium">
        {parseInt(String(price ?? '0'), 10).toLocaleString()}원
      </div>

      {/* 추후 pickup 내용 더 추가될 예정 */}
      <div className="w-[25%] min-w-[150px] text-sm text-[#666666]">
        {pickup}
      </div>
    </div>
  )
}

export default CartItemRow
