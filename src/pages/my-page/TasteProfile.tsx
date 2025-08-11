import profileImage from '@/assets/decorations/taste-profile/profile-image.svg'
import summaryIcon from '@/assets/icons/taste-profile/summary.svg?react'
import RefreshIcon from '@/assets/icons/taste-profile/refresh.svg?react'
import Icon from '@/components/common/Icon'
import { ChevronDown } from 'lucide-react'
// import { LikeCounts } from '@/components/common/LikeCounts';

const TasteProfile = () => {
  return (
    <div>
      <div className="mb-25 w-320">
        <div className="mb-5 flex justify-between border-b-2 pb-3">
          <h1 className="text-2xl font-bold text-[#333333]">
            나의 입맛 프로필
          </h1>
          <button
            type="button"
            className="flex h-10 w-44 cursor-pointer items-center justify-center rounded-md border border-[#D9D9D9] bg-[#333] font-medium text-white"
          >
            나만의 패키지 구성하기
          </button>
        </div>
        <div className="flex flex-col items-center gap-10">
          <section className="relative flex h-92 w-315 flex-col items-center justify-center rounded-md bg-[#F2544B] text-white">
            <h2 className="absolute top-5 left-5 flex h-11 w-35 items-center justify-center rounded-full border text-lg font-bold">
              나의 취향 유형
            </h2>
            <div
              className="mb-4 h-20 w-20 bg-cover bg-center bg-no-repeat"
              aria-hidden="true"
              style={{ backgroundImage: `url(${profileImage})` }}
            ></div>
            <h3 className="mb-3 text-2xl font-bold">{`님의 취향 유형은 ''유형 입니다.`}</h3>
            <p className="mb-7 text-lg">{}</p>
            <button
              type="button"
              className="flex h-10 w-44 items-center justify-center gap-2 rounded-full bg-white font-bold text-[#F2544B]"
            >
              <Icon icon={RefreshIcon} size={16} />
              테스트 다시하기
            </button>
          </section>
          <section className="relative flex h-92 w-315 items-center justify-center gap-25 rounded-md bg-[#F2F2F2] text-[#333]">
            <h2 className="absolute top-5 left-5 flex h-11 w-35 items-center justify-center rounded-full border text-lg font-bold">
              나의 맛의 지문
            </h2>
            <section className="">
              {/* <LikeCounts /> */}
              <button
                type="button"
                className="flex h-9 w-30 cursor-pointer items-center justify-center gap-2 rounded-full bg-white text-sm"
              >
                펼쳐보기
                <ChevronDown
                  size={16}
                  color="white"
                  className="rounded-full bg-[#333]"
                />
              </button>
            </section>
            <hr className="h-55 border-r-1 border-[#D9D9D9]" />
            <section className="">
              <h3 className="flex items-center gap-3 text-lg font-bold">
                <Icon
                  icon={summaryIcon}
                  size={40}
                  wrapperClassName="bg-[#D9D9D9] rounded-full"
                  cursor={false}
                />
                나의 지문 요약
              </h3>
              <p>{}</p>
            </section>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TasteProfile
