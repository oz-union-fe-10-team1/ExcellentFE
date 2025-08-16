import DetailProduct from '@/components/detail/DetailProduct'
import DetailInformation from '@/components/detail/DetailInformation'
import DetailFeedback from '@/components/detail/DetailFeedback'
import { useDetailPage } from '@/hooks/useDetailPage'

const Detail = () => {
  const {
    data,
    isLoading,
    error,
    pickupStore,
    setPickupStore,
    localQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    isDecreaseDisabled,
    dropdownValues,
    handleDropdownChange,
  } = useDetailPage()

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>로딩 중...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>오류가 발생했습니다: {error.message}</div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>상품 정보를 찾을 수 없습니다.</div>
      </div>
    )
  }

  return (
    <div className="mx-auto mt-41 flex max-w-320 flex-col gap-25 bg-white p-6">
      {/* 상단 상품 영역 */}
      <DetailProduct
        data={data}
        quantity={localQuantity}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        isDecreaseDisabled={isDecreaseDisabled}
        pickupStore={pickupStore}
        onChangePickupStore={setPickupStore}
        dropdownValues={dropdownValues}
        handleDropdownChange={handleDropdownChange}
      />
      <DetailInformation data={data} />

      {/* 구매 및 수령 방식 */}
      <div>
        <div className="border-b-2 pb-5 text-lg font-bold">
          구매 및 수령 방식
        </div>
        <div className="mt-[35px] h-40 w-313 bg-[#f2f2f2]">
          <span className="flex h-full items-center justify-center font-semibold">
            수도권에서 픽업 가능한 상품입니다.
          </span>
        </div>
      </div>

      {/* 상품 후기 */}
      <DetailFeedback />
    </div>
  )
}

export default Detail
