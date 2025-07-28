import type { ItemRowType } from '@/types/ItemRow/itemRows'
import minus from '@/assets/icons/cart/minus.svg'
import plus from '@/assets/icons/cart/plus.svg'

const CartItemRow = ({
  img,
  name,
  quantity,
  price,
  pickup,
  onQuantityChange,
}: ItemRowType) => {
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
        <div className="flex items-center justify-start gap-5 pl-8">
          <img
            src={img || '상품 이미지'}
            alt={name || '상품 이름'}
            className="h-20 w-20 rounded border border-[#d9d9d9]"
          />
          <p className="text-lg font-bold">{name || '상품 이름'}</p>
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
          <span className="w-6 text-center">{quantity || '상품 수량'}</span>
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

export default CartItemRow
