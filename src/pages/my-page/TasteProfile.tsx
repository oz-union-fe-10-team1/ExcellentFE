import RefreshIcon from '@/assets/icons/taste-profile/refresh.svg?react'
import summaryIcon from '@/assets/icons/taste-profile/summary.svg?react'
import Button from '@/components/common/Button'
import GaugeBar from '@/components/common/GaugeBar'
import Icon from '@/components/common/Icon'
import PackageMakeupModal from '@/components/my-page/PackageMakeupModal'
import { ROUTE_PATHS } from '@/constants/routePaths'
import { useTasteTestProfile } from '@/hooks/taste-test/useTasteTest'
import { useModal } from '@/hooks/useModal'
import { useFeedbackProfile } from '@/hooks/user/useUser'
import type { TasteType } from '@/types/tasteTypes'
import { cn } from '@/utils/cn'
import { insertLineBreaks } from '@/utils/stringUtils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TasteProfile = () => {
  const {
    data: tasteTestProfileData,
    isLoading: isTasteTestLoading,
    isError: isTasteTestError,
  } = useTasteTestProfile()
  const {
    data: feedbackProfileData,
    isLoading: isFeedbackLoading,
    isError: isFeedbackError,
  } = useFeedbackProfile()

  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { handleClose } = useModal({
    isOpen: isModalOpen,
    onClose: () => setIsModalOpen(false),
  })

  if (isTasteTestLoading || isFeedbackLoading) {
    return <div>로딩 중 ...</div>
  }

  if (isTasteTestError || isFeedbackError) {
    return <div>정보를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.</div>
  }

  const { user, has_test, prefer_taste_display, taste_description, image_url } =
    tasteTestProfileData ?? {}
  const { taste_scores, description: feedbackDescription } =
    feedbackProfileData ?? {}
  const sortedTasteScores = Object.entries(taste_scores ?? {}).sort(
    (a, b) => b[1] - a[1]
  )

  return (
    <div className="whitespace-pre-wrap">
      <div className="mb-25 w-320">
        <div className="mb-5 flex justify-between border-b-2 pb-3">
          <h1 className="text-2xl font-bold text-[#333333]">
            나의 입맛 프로필
          </h1>
          <Button variant="VARIANT7" onClick={() => setIsModalOpen(true)}>
            나만의 패키지 구성하기
          </Button>
        </div>
        <PackageMakeupModal
          isOpen={isModalOpen}
          onClose={handleClose}
          userName={user ?? ''}
        />
        <div className="flex flex-col items-center gap-10">
          <section className="relative flex h-92 w-315 flex-col items-center justify-center rounded-md bg-[#F2544B] py-13 text-white">
            <h2 className="absolute top-5 left-5 flex h-11 w-35 items-center justify-center rounded-full border text-lg font-bold">
              나의 취향 유형
            </h2>
            {has_test ? (
              <>
                <div
                  className="mb-4 h-20 w-20 bg-cover bg-center bg-no-repeat"
                  aria-hidden="true"
                  style={{ backgroundImage: `url(${image_url})` }}
                ></div>
                <h3 className="mb-3 text-2xl font-bold">{`${user}님의 취향 유형은 '${prefer_taste_display}' 입니다.`}</h3>
                <p className="mb-7 text-center text-lg">
                  {insertLineBreaks(taste_description ?? '', '!')}
                </p>
              </>
            ) : (
              <h3 className="mb-5 text-lg">
                테스트를 통해 나의 취향 유형을 알아보세요!
              </h3>
            )}
            <Button
              variant="VARIANT11"
              className="font-bold"
              onClick={() => {
                navigate(ROUTE_PATHS.TEST)
              }}
            >
              <Icon icon={RefreshIcon} size={16} />
              {has_test ? '테스트 다시하기' : '테스트 시작하기'}
            </Button>
          </section>
          <section
            className={cn(
              'relative flex h-92 w-315 items-center justify-evenly rounded-md bg-[#F2F2F2] px-10 text-[#333]',
              isExpanded && 'h-auto py-15'
            )}
          >
            <h2 className="absolute top-5 left-5 flex h-11 w-35 items-center justify-center rounded-full border text-lg font-bold">
              나의 맛의 지문
            </h2>
            <section className="mt-11 flex w-[452px] flex-col items-center">
              <figure
                className={cn(
                  'mb-6 h-36 overflow-hidden transition-all duration-500 ease-in-out',
                  isExpanded && 'h-auto'
                )}
              >
                {sortedTasteScores.map(([type, score]) => (
                  <GaugeBar type={type as TasteType} score={score} key={type} />
                ))}
              </figure>
              <Button
                variant="VARIANT11"
                className="h-9 w-30 text-sm text-[#333]"
                onClick={() => {
                  setIsExpanded((prev) => !prev)
                }}
              >
                {isExpanded ? '접기' : '펼쳐보기'}
                <ChevronDown
                  size={16}
                  color="white"
                  className={cn(
                    'rounded-full bg-[#333]',
                    isExpanded && 'rotate-180'
                  )}
                />
              </Button>
            </section>
            <hr className="h-55 border-r-1 border-[#D9D9D9]" />
            <section className="w-[392px]">
              <h3 className="mb-5 flex items-center gap-3 text-lg font-bold">
                <Icon
                  icon={summaryIcon}
                  size={40}
                  wrapperClassName="bg-[#D9D9D9] rounded-full"
                  cursor={false}
                />
                나의 지문 요약
              </h3>
              <p>{insertLineBreaks(feedbackDescription ?? '', '!', true)}</p>
            </section>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TasteProfile
