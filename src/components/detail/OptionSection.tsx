import Button from '@/components/common/Button'
import Dropdown from '@/components/common/Dropdown'
import { QuantitySelector } from '@/components/detail/QuantitySelector'

interface DropdownOption {
  label: string
  value: string
}

interface OptionsSectionProps {
  quantity: number
  selectedStore: string
  selectedRegion: string
  selectedDate: string
  totalPrice: number
  storeOptions: DropdownOption[]
  regionOptions: DropdownOption[]
  dateOptions: DropdownOption[]
  selectedDateInfo?: DropdownOption
  onQuantityChange: (delta: number) => void
  onStoreChange: (value: string) => void
  onRegionChange: (value: string) => void
  onDateChange: (value: string) => void
  onAddToCart: () => void
  onPurchase: () => void
}

const OptionsSection = ({
  quantity,
  selectedStore,
  selectedRegion,
  selectedDate,
  totalPrice,
  storeOptions,
  regionOptions,
  dateOptions,
  onQuantityChange,
  onStoreChange,
  onRegionChange,
  onDateChange,
  onAddToCart,
  onPurchase,
}: OptionsSectionProps) => {
  const getDateStatusMessage = () => {
    if (!selectedDate) return null

    const today = new Date().toISOString().split('T')[0]
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0]

    if (selectedDate === today) {
      return '오늘 픽업 시 영업시간 내에만 가능합니다. (오후 5시 마감)'
    }
    if (selectedDate === tomorrow) {
      return '내일 픽업 예약입니다.'
    }
    return `${selectedDate} 픽업 예약입니다.`
  }

  return (
    <div className="absolute top-[155px] left-[690px] flex flex-col gap-[26px]">
      {/* 수량 선택 */}
      <QuantitySelector
        quantity={quantity}
        onQuantityChange={onQuantityChange}
      />

      {/* 픽업 매장 */}
      <div className="flex items-center">
        <span className="text-[16px] font-medium text-[#333333]">
          픽업 매장
        </span>
        <div className="ml-[59px]">
          <Dropdown
            options={storeOptions}
            value={selectedStore}
            onChange={onStoreChange}
            placeholder="픽업하실 매장을 선택해 주세요."
            className="h-[30px] w-[200px]"
          />
        </div>
      </div>

      {/* 주문 지역 선택 */}
      <div className="flex items-center">
        <span className="text-[16px] font-medium text-[#333333]">
          주문 지역 선택
        </span>
        <div className="ml-[28px] w-[463px]">
          <Dropdown
            options={regionOptions}
            value={selectedRegion}
            onChange={onRegionChange}
            placeholder="지역을 선택해 주세요."
            className="h-[30px]"
          />
        </div>
      </div>

      {/* 픽업날짜 */}
      <div className="flex items-center">
        <span className="text-[16px] font-medium text-[#333333]">픽업날짜</span>
        <div className="ml-[62px] w-[463px]">
          <Dropdown
            options={dateOptions}
            value={selectedDate}
            onChange={onDateChange}
            placeholder="날짜를 선택해 주세요."
            className="h-[30px]"
          />
          {selectedDate && (
            <div className="mt-1 text-[12px] leading-relaxed text-[#666666]">
              {getDateStatusMessage()}
            </div>
          )}
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-[1px] w-[600px] bg-[#E1E1E1]" />

      {/* 총 상품 금액 */}
      <div className="flex items-center justify-between">
        <span className="text-[16px] font-medium text-[#666666]">
          총 상품 금액
        </span>
        <div className="text-right">
          <span className="text-[30px] font-bold tracking-[-0.02em] text-[#333333]">
            {totalPrice.toLocaleString()}원
          </span>
          {quantity > 1 && (
            <div className="mt-1 text-[12px] text-[#666666]">
              개당 {Math.round(totalPrice / quantity).toLocaleString()}원 ×{' '}
              {quantity}개
            </div>
          )}
        </div>
      </div>

      {/* 버튼들 */}
      <div className="flex gap-[10px]">
        <Button variant="VARIANT3" onClick={onAddToCart}>
          장바구니
        </Button>
        <Button variant="VARIANT2" onClick={onPurchase}>
          구매하기
        </Button>
      </div>
    </div>
  )
}

export default OptionsSection
