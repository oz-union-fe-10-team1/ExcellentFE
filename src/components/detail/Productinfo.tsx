interface ProductInfoTableProps {
  productInfo: {
    alcoholType?: string
    alcoholContent?: number | null
    flavorNotes?: string
  }
}

export const ProductInfoTable = ({ productInfo }: ProductInfoTableProps) => {
  const { alcoholType, alcoholContent, flavorNotes } = productInfo

  const infoRows = [
    { label: '맛 정보', value: flavorNotes },
    { label: '주종', value: alcoholType },
    {
      label: '도수',
      value: alcoholContent ? `${alcoholContent}도` : '패키지 상품',
    },
    { label: '특징', value: flavorNotes },
  ]

  return (
    <div className="mt-[50px] w-full">
      {infoRows.map((row, index) => (
        <div
          key={row.label}
          className={`flex h-[80px] items-center border-t border-[#D9D9D9] ${
            index === infoRows.length - 1 ? 'border-b' : ''
          }`}
        >
          <div className="flex h-full w-[380px] items-center justify-center bg-[#F2F2F2]">
            <span className="text-[18px] font-bold text-[#333333]">
              {row.label}
            </span>
          </div>
          <div className="flex flex-1 items-center px-[40px]">
            <span className="text-[18px] font-normal text-[#666666]">
              {row.value}
            </span>
          </div>
        </div>
      ))}

      {/* 상세 이미지 */}
      <div className="mx-auto mt-[50px] flex h-[2194px] w-[1000px] items-center justify-center bg-[#D9D9D9]">
        <span className="text-gray-600">상세 이미지 영역</span>
      </div>
    </div>
  )
}
