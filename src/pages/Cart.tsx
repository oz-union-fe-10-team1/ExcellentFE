import useUserPostOrder from '@/hooks/cart/useUserPostOrder'
import Button from '@/components/common/Button'
import ItemRowContent from '@/components/common/ItemRowContent'
import { useUserCart } from '@/hooks/cart/useUserCart'
import { Equal } from 'lucide-react'
import useCartItem from '@/hooks/cart/useCartItem'

const Cart = () => {
  const { data, invalidateCart } = useUserCart()
  const { postOrderMutation } = useUserPostOrder()
  const { onCheckChange, checkedTotalPrice, checkedItems } = useCartItem({
    data,
    onQuantityChange: invalidateCart,
    quantity: data?.cart_items?.reduce(
      (total, item) => total + item.quantity,
      0
    ),
  })

  return (
    <div className="mt-25 flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-bold text-[#333333]">장바구니</h1>
      <ItemRowContent
        type="cart"
        items={data?.cart_items || []}
        onQuantityChange={invalidateCart}
        checkedItems={checkedItems}
        onCheckChange={onCheckChange}
      />
      {data?.cart_items && data.cart_items.length > 0 && (
        <>
          <div className="mt-25 h-20 w-320 bg-[#f2f2f2]">
            <div className="flex h-full w-full items-center justify-center gap-7">
              <div className="text-[#333333]">
                상품금액 합계
                <span className="ml-3 text-2xl font-bold">
                  {checkedTotalPrice.toLocaleString()}원
                </span>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-[50%] bg-[#f2544b] text-center text-lg font-bold text-[#ffffff]">
                <Equal size={15} strokeWidth={4} />
              </div>
              <div className="text-[#333333]">
                총 결제 금액
                <span className="ml-3 text-2xl font-bold">
                  {checkedTotalPrice.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="VARIANT4"
            className="mt-12 mb-25"
            onClick={() => {
              if (checkedItems.length === 0) {
                alert('결제할 상품을 선택해주세요.')
                return
              }
              postOrderMutation.mutate(checkedItems)
            }}
            disabled={postOrderMutation.isPending}
          >
            {postOrderMutation.isPending ? '결제 처리 중...' : '결제하기'}
          </Button>
        </>
      )}
    </div>
  )
}

export default Cart
