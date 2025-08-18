import { Minus, Plus } from 'lucide-react'
import DetailCard from '@/components/common/cards/DetailCard'
import StarRating from '@/components/common/StarRating'
import Dropdown from '@/components/common/Dropdown'
import Button from '@/components/common/Button'
import type { ProductDetail } from '@/types/product'
import { cn } from '@/utils/cn'
import { DROPDOWN_FIELDS } from '@/constants/detailPage'

interface DetailProductProps {
  data: ProductDetail
  quantity: number
  onIncreaseQuantity: () => void
  onDecreaseQuantity: () => void
  isDecreaseDisabled?: boolean
  dropdownValues: Record<string, string>
  handleDropdownChange: (key: string, value: string) => void
  onAddCart: () => void
  onPurchase: () => void
}

const DetailProduct = ({
  data,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  isDecreaseDisabled,
  dropdownValues,
  handleDropdownChange,
  onAddCart,
  onPurchase,
}: DetailProductProps) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <DetailCard
        className="h-50 w-50 sm:h-100 sm:w-100 md:h-100 md:w-100 lg:h-140 lg:w-140"
        imgSrc={
          Array.isArray(data.images)
            ? data.images.find((img) => img.is_main)?.image_url || ''
            : (data.images as unknown as string)
        }
        imgAlt={data.name}
      />

      <div className="space-y-4">
        <div className="grid grid-cols-2 border-b pb-4">
          <div className="ml-6">
            <h1 className="mb-3 text-[40px] font-bold text-[#333333]">
              {data.name}
            </h1>
            <div className="flex items-center gap-3">
              <span className="flex h-[26px] w-[45px] items-center justify-center rounded-[5px] bg-[#ffe5e3] text-sm font-bold text-[#f2544b]">
                -{data.discount_rate}%
              </span>
              <span className="text-[29px] font-bold text-[#333333]">
                {data.price.toLocaleString()}원
              </span>
              {data.original_price !== null && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  {data.original_price.toLocaleString()}원
                </span>
              )}
            </div>
          </div>
          <div className="mr-2 mb-3 flex items-center justify-end gap-2">
            <StarRating defaultRating={5} readOnly />
            <span className="mr-2 text-sm text-[#666666] underline">
              ({data.review_count}개의 리뷰)
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 border-b border-[#D9D9D9] pb-5">
          <div className="flex items-center">
            <div>수량</div>
            <div className="ml-[110px] inline-flex h-8 w-20 items-center justify-center rounded-[5px] bg-[#f6f6f6]">
              <button
                aria-label="수량 감소"
                onClick={onDecreaseQuantity}
                disabled={isDecreaseDisabled}
                className={cn(
                  'flex h-[15px] w-[15px] cursor-pointer items-center justify-center rounded-[4px]',
                  isDecreaseDisabled
                    ? 'cursor-not-allowed bg-[#e1e1e1]'
                    : 'bg-[#e1e1e1]'
                )}
              >
                <Minus size={16} />
              </button>
              <span className="w-6 text-center">{quantity}</span>
              <button
                aria-label="수량 증가"
                onClick={onIncreaseQuantity}
                className="flex h-[15px] w-[15px] cursor-pointer items-center justify-center rounded-[4px] bg-[#000000] text-white"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {DROPDOWN_FIELDS.map((field) => (
            <div
              key={field.key}
              className="flex items-center justify-between gap-2 text-[#333333]"
            >
              <div className="font-semibold text-[#333333]">{field.label}</div>
              <Dropdown
                options={field.options}
                value={dropdownValues[field.key]}
                onChange={(value) => handleDropdownChange(field.key, value)}
                placeholder={field.placeholder}
                className="h-[30px] w-[463px] cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="mb-9 flex items-center justify-between">
            <span className="text-[#666666]">총 상품 금액</span>
            <span className="text-[30px] font-bold text-[#333333]">
              {(data.price * quantity).toLocaleString()}원
            </span>
          </div>

          <div className="flex gap-[10px]">
            <Button variant="VARIANT12" onClick={onAddCart}>
              장바구니
            </Button>
            <Button variant="VARIANT13" onClick={onPurchase}>
              구매하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct
