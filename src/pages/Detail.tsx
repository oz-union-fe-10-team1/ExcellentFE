import DetailProduct from '@/components/detail/DetailProduct'
import DetailInformation from '@/components/detail/DetailInformation'
import DetailFeedback from '@/components/detail/DetailFeedback'
import { useDetailPage } from '@/hooks/home/useDetailPage'

const Detail = () => {
  const {
    data,
    isLoading,
    error,
    dropdownValues,
    handleDropdownChange,
    localQuantity,
    onIncreaseQuantity,
    onDecreaseQuantity,
    handleAddToCart,
    handlePurchase,
  } = useDetailPage()

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        로딩 중...
      </div>
    )
  }
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        오류 발생: {error.message}
      </div>
    )
  }
  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        상품 정보를 찾을 수 없습니다.
      </div>
    )
  }

  return (
    <div className="mx-auto mt-25 flex max-w-320 flex-col gap-25">
      <DetailProduct
        data={data}
        quantity={localQuantity}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
        dropdownValues={dropdownValues}
        handleDropdownChange={handleDropdownChange}
        onAddCart={handleAddToCart}
        onPurchase={handlePurchase}
      />

      <DetailInformation data={data} />

      <div>
        <div className="border-b-2 pb-5 text-lg font-bold">
          구매 및 수령 방식
        </div>
        <div className="mt-[35px] h-40 w-313 bg-[#f2f2f2]">
          <span className="flex h-full items-center justify-center font-semibold">
            수도권 픽업 가능한 상품입니다.
          </span>
        </div>
      </div>

      <DetailFeedback />
    </div>
  )
}

export default Detail
