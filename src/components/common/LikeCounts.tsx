import { tasteMetaMap } from '@/constants/tasteMeta'
import type { TasteScore } from '@/types/tasteTypes'
import { JustifiedText } from './JustifiedText'

interface LikeCountsProps {
  data: TasteScore // 예: { type: 'sweet', score: 3.5 }
}

export const LikeCounts = ({ data }: LikeCountsProps) => {
  const { type, score } = data
  const { label, color } = tasteMetaMap[type]

  return (
    <div className="mb-2 flex items-center">
      <p className="flex w-[50px] justify-between text-lg text-[#333333]">
        {JustifiedText(label)}
      </p>
      <div className="w-[40px]" />
      <p className="w-[80px] text-gray-500">둔감하게</p>

      <div className="ml-[4px] flex gap-[8px]">
        {Array.from({ length: 5 }).map((_, i) => {
          const diff = score - i
          let content = null

          if (diff >= 1) {
            // 꽉 찬 박스
            content = (
              <div
                key={i}
                className="h-6 w-6 rounded-[2px] border"
                style={{
                  backgroundColor: color,
                  borderColor: color,
                }}
              />
            )
          } else if (diff >= 0.5) {
            // 반 채운 박스
            content = (
              <div
                key={i}
                className="relative h-6 w-6 overflow-hidden rounded-[2px] border-2"
                style={{
                  borderColor: color,
                }}
              >
                <div
                  className="absolute top-0 left-0 h-full w-1/2"
                  style={{ backgroundColor: color }}
                />
              </div>
            )
          } else {
            // 빈 박스
            content = (
              <div
                key={i}
                className="h-6 w-6 rounded-[2px] border-2"
                style={{
                  borderColor: color,
                }}
              />
            )
          }

          return content
        })}
      </div>

      <div className="w-[33px]" />
      <p className="w-[67px] text-gray-500">민감하게</p>
      <div className="w-[37px]" />
    </div>
  )
}
