interface TasteAverageProps {
  colors?: string
  title: string
  score: number
}

const TasteAverage = ({ title, score, colors }: TasteAverageProps) => {
  // 네모 박스 렌더링 함수
  const renderBox = (index: number) => {
    const diff = score - index

    if (diff >= 1) {
      // 꽉 찬 네모
      return (
        <div
          key={index}
          className="h-6 w-6 rounded-[2px]"
          style={{ backgroundColor: colors }}
        />
      )
    } else if (diff >= 0.5) {
      // 반만 찬 네모
      return (
        <div
          key={index}
          className="relative h-6 w-6 overflow-hidden rounded-[2px] border border-gray-300 bg-gray-200"
        >
          <div
            className="absolute top-0 left-0 h-full"
            style={{ width: '50%', backgroundColor: colors }}
          />
        </div>
      )
    } else {
      // 빈 네모
      return (
        <div
          key={index}
          className="h-6 w-6 rounded-[2px] border border-gray-300 bg-gray-200"
        />
      )
    }
  }

  return (
    <div className="flex w-[587px] items-center border border-blue-500 p-4">
      {/* title: 고정 폭 90px + 줄임 처리 */}
      <p className="w-[90px] truncate text-[#333333]">{title}</p>

      {/* 중간에 띄우기 위한 공간 */}
      <div className="w-[40px]" />

      {/* 나머지 텍스트 + 네모 박스 + 텍스트 */}
      <div className="flex items-center gap-[12px]">
        <p className="text-sm text-[#666666]">둔감하게</p>

        {/* 네모 박스 5개 */}
        <div className="flex gap-[4px]">
          {Array.from({ length: 5 }).map((_, index) => renderBox(index))}
        </div>

        <p className="text-sm text-[#666666]">예민하게</p>
      </div>
    </div>
  )
}

export default TasteAverage
