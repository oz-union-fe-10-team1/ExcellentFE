import StarRating from '@/components/common/StarRating'

interface PriceInfoProps {
  name: string
  price: number
  originalPrice?: number
  discountRate: number
  statistics: {
    average_rating: number
    review_count: number
  }
}

const PriceInfo = ({
  name,
  price,
  originalPrice,
  discountRate,
  statistics,
}: PriceInfoProps) => {
  return (
    <div className="absolute top-0 left-[680px] h-[523px] w-[600px]">
      {/* 제품명 */}
      <h1 className="absolute top-0 left-[20px] text-[40px] leading-[120%] font-bold tracking-[0.005em] text-[#333333]">
        {name}
      </h1>

      {/* 리뷰 */}
      <div className="absolute top-[29px] left-[365px] flex items-center">
        <StarRating
          rating={statistics.average_rating}
          readOnly
          size={16}
          showRatingValue
          className="text-[#F2544B]"
        />
        <span className="ml-2 text-[16px] font-normal text-[#666666] underline">
          ({statistics.review_count}개의 리뷰)
        </span>
      </div>

      {/* 가격 */}
      <div className="absolute top-[61px] left-[22px] flex items-center">
        {discountRate > 0 && (
          <div className="mr-3 rounded-[5px] bg-[#FFE5E3] px-2 py-1">
            <span className="text-[12px] font-bold text-[#F2544B]">
              -{discountRate}%
            </span>
          </div>
        )}
        <span className="text-[30px] font-bold tracking-[0.005em] text-[#333333]">
          {price.toLocaleString()}원
        </span>
        {originalPrice && originalPrice > price && (
          <span className="ml-4 text-[16px] font-light text-[#666666] line-through">
            {originalPrice.toLocaleString()}원
          </span>
        )}
      </div>

      {/* 구분선 */}
      <div className="absolute top-[125px] left-0 h-[1px] w-[600px] bg-black" />
    </div>
  )
}

export default PriceInfo
