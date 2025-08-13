import { JustifiedText } from '@/components/common/JustifiedText'
import { tasteMetaMap } from '@/constants/tasteMeta'
import type { TasteScore } from '@/types/tasteTypes'

const GaugeBar = ({ type, score }: TasteScore) => {
  const { label, color } = tasteMetaMap[type]

  return (
    <div className="mb-5 flex items-center font-medium">
      <dt className="mr-11 flex w-[50px] justify-between text-lg text-[#333]">
        {JustifiedText(label)}
      </dt>
      <dd className="flex items-center gap-7 text-[#666]">
        <span className="shrink-0 text-sm">둔감하게</span>
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => {
            const diff = score - i
            let content = null

            if (diff >= 1) {
              // 꽉 찬 박스
              content = (
                <span
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
                <span
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
                </span>
              )
            } else {
              // 빈 박스
              content = (
                <span
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
        <span className="shrink-0 text-sm">민감하게</span>
      </dd>
    </div>
  )
}

export default GaugeBar
