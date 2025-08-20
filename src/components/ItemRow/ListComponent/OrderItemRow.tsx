import Button from '@/components/common/Button'
import { useOrderItemRow } from '@/hooks/useOrderItemRow'
import TastingReviewModal from '@/pages/my-page/TastingReviewModal'
import type { ItemRowType } from '@/types/ItemRow/itemRows'
import clsx from 'clsx'

const OrderItemRow = ({
  id,
  img,
  order,
  name,
  quantity,
  price,
  feedback_id,
  product,
}: ItemRowType) => {
  const {
    isModalOpen,
    handleClick,
    closeModal,
    getOrderItemId,
    getButtonConfig,
  } = useOrderItemRow({
    id,
    feedback_id,
    productId: product?.id,
  })

  const buttonConfig = getButtonConfig()
  const numericPrice = typeof price === 'number' ? price : Number(price ?? 0)
  const numericQuantity =
    typeof quantity === 'number' ? quantity : Number(quantity ?? 0)
  const totalPrice = numericPrice * numericQuantity
  const orderString = String(order ?? '')
  const datePart = orderString.slice(0, 10)
  const timePart = orderString.slice(11, 19)
  const orderDate = `${datePart} ${timePart}`

  return (
    <>
      <div className="flex items-center border-b border-[#e1e1e1] py-4 text-center text-[#666666]">
        <div className="w-[15%] min-w-[80px] text-lg">{orderDate}</div>

        <div className="flex w-[40%] min-w-[250px] items-center gap-4 pl-2">
          <div className="ml-36 flex items-center justify-center overflow-hidden border">
            <img src={img} alt={name || '상품 이미지'} className="h-25 w-25" />
          </div>
          <p className="text-left text-lg font-bold">{name}</p>
        </div>

        <div className="mx-auto w-20 text-lg">{quantity}</div>

        <div className="w-[15%] min-w-[80px] text-lg">
          {totalPrice.toLocaleString()}원
        </div>

        <div className="flex w-[20%] min-w-[100px] justify-center">
          <Button
            onClick={handleClick}
            variant={buttonConfig.variant}
            className={clsx('cursor-pointer text-lg', buttonConfig.className)}
          >
            {buttonConfig.text}
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <TastingReviewModal
          isOpen={isModalOpen}
          orderItemId={getOrderItemId()}
          onClose={closeModal}
        />
      )}
    </>
  )
}

export default OrderItemRow
