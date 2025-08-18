import Icon from '@/components/common/Icon.tsx'
import kakaotalk from '@/assets/icons/tasteTest/kakaotalk.svg?react'
import shareWhite from '@/assets/icons/tasteTest/shareWhite.svg?react'
import CardList from '@/components/common/cards/CardList.tsx'
import type { TestCardProps } from '@/types/cardProps'
import TestButton from '@/components/test/TestButton.tsx'
import type { ProgressStepProps } from './ProgressStep'
import { useAuthStore } from '@/stores/authStore'

//렌더링 확인을 위한 가짜 더미데이터 (추후 삭제 예정)
const testCardData: TestCardProps[] = [
  {
    imgSrc: 'https://example.com/soju.jpg',
    imgAlt: 'A bottle of soju with glass',
    title: '참이슬',
    subtitle: '한국 대표 소주',
    firstLabel: '단맛',
    secondLabel: '쓴맛',
  },
  {
    imgSrc: 'https://example.com/whiskey.jpg',
    imgAlt: 'Whiskey glass with ice',
    title: '싱글 몰트 위스키',
    subtitle: '풍부한 향과 깊은 맛',
    firstLabel: '쓴맛',
    secondLabel: '스모키',
  },
  {
    imgSrc: 'https://example.com/cocktail.jpg',
    imgAlt: 'Colorful cocktail glass',
    title: '모히토',
    subtitle: '상큼한 민트 칵테일',
    firstLabel: '신맛',
    secondLabel: '단맛',
  },
]

const ResultStep = ({
  setStep,
  testResult,

  setTestStep,
}: ProgressStepProps) => {
  const { isLoggedIn } = useAuthStore()

  //다시 하기 눌렀을 때 비회원 로직
  const handleNonMemberReset = () => {
    localStorage.removeItem('selectedAnswers')
    setStep('main')
    setTestStep(0)
  }

  return (
    <div className="flex flex-col items-center">
      <p className="mt-20 mb-[50px] text-[22px] font-bold text-[#666666]">
        김오즈님의 취향 유형은...
      </p>
      <p className="mb-[10px] text-[40px] font-extrabold">{testResult?.type}</p>
      <p className="mx-[62px] mb-[28px] text-center text-[19px] whitespace-pre-line text-[#666666]">
        {testResult?.info.description}
      </p>
      <img
        src={testResult?.info.image_url}
        alt={testResult?.type}
        className="mb-[50px] h-[200px] w-[200px]"
      />
      {/* 공유하기 섹션 */}
      <div className="mb-20 flex gap-3">
        <Icon icon={kakaotalk} size={50} />
        <Icon icon={shareWhite} size={50} />
      </div>
      {/* 취향 패키지 추천 조합 섹션 */}
      <div className="mb-20 w-full">
        <p className="mb-4 ml-[57px] text-xl font-bold text-[#333333]">
          {testResult?.type} 유형을 위한 첫 번째 추천 조합
        </p>
        <div className="flex grid-cols-3 justify-center">
          <CardList type="test" cards={testCardData} columns={3} />
        </div>
      </div>

      {/* 버튼 섹션 */}
      {!isLoggedIn && (
        <TestButton className="mb-[10px] bg-[#FFFFFF] text-[#2E2F2F]">
          회원 가입하고 결과 저장하기
        </TestButton>
      )}
      <TestButton className="mb-5 bg-[#2E2F2F] text-[#FFFFFF]">
        이 조합으로 나만의 패키지 만들기
      </TestButton>
      <p className="mb-20">
        물론, 패키지 구성은 다음 단계에서 자유롭게 변경할 수 있어요.
      </p>

      {/* 하단 빨간 박스 섹션 */}

      <div className="relative flex h-[103px] w-[560px] items-center justify-center gap-2.5 rounded-br-[20px] rounded-bl-[20px] bg-[#F2544B]">
        <button
          className="h-[54px] w-[225px] rounded-[60px] border border-[#FFFFFF] font-bold text-[#FFFFFF]"
          onClick={() => {
            if (!isLoggedIn) {
              handleNonMemberReset()
            }
          }}
        >
          테스트 다시 하기
        </button>
        <button className="h-[54px] w-[225px] rounded-[60px] border border-[#FFFFFF] font-bold text-[#FFFFFF]">
          다른 패키지 둘러보기
        </button>
      </div>
    </div>
  )
}

export default ResultStep
