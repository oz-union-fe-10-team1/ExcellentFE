import Icon from '@/components/common/Icon.tsx'
import kakaotalk from '@/assets/icons/tasteTest/kakaotalk.svg?react'
import shareWhite from '@/assets/icons/tasteTest/shareWhite.svg?react'
import CardList from '@/components/common/cards/CardList.tsx'
import type { TestCardProps } from '@/types/cardProps'
import TestButton from '@/components/test/TestButton.tsx'
import type { ProgressStepProps } from '@/components/test/ProgressStep.tsx'
import { useAuthStore } from '@/stores/authStore'
import exampl1 from '@/assets/images/tasteTest/example1.png'
import exampl2 from '@/assets/images/tasteTest/example2.png'
import exampl3 from '@/assets/images/tasteTest/example3.png'
import { useRef } from 'react'
import { captureAndSaveImage } from '@/utils/imageCapture'
import { useTasteTestProfile } from '@/hooks/user/useUser'
import { Link, useNavigate } from 'react-router-dom'

// 렌더링 확인용 더미데이터
const testCardData: TestCardProps[] = [
  {
    imgSrc: exampl1,
    imgAlt: 'A bottle of soju with glass',
    title: '한산 소곡주',
    subtitle: '한국 대표 소주',
    firstLabel: '부드러운',
    secondLabel: '쓴맛',
  },
  {
    imgSrc: exampl2,
    imgAlt: 'Whiskey glass with ice',
    title: '싱글 몰트 위스키',
    subtitle: '풍부한 향과 깊은 맛',
    firstLabel: '쓴맛',
    secondLabel: '스모키',
  },
  {
    imgSrc: exampl3,
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

  const navigate = useNavigate()

  // 다시 하기 눌렀을 때 비회원 로직
  const handleNonMemberReset = () => {
    localStorage.removeItem('selectedAnswers')
    setStep('main')
    setTestStep(0)
  }

  //이미지 저장 하기 위한 구역 지정
  const captureRef = useRef<HTMLDivElement>(null)

  //이미지 저장 위한 함수

  const handleCaptureClick = () => {
    if (captureRef.current) {
      captureAndSaveImage(captureRef.current)
    }
  }

  const { data: server } = useTasteTestProfile()

  return (
    <div className="flex flex-col items-center">
      <div
        ref={captureRef}
        className="flex w-full max-w-[560px] flex-col items-center"
      >
        {isLoggedIn ? (
          <p className="mt-20 mb-[50px] text-[22px] font-bold text-[#666666]">
            {server?.user}님의 취향 유형은...
          </p>
        ) : (
          <p className="mt-20 mb-[50px] text-[22px] font-bold text-[#666666]">
            게스트님의 취향 유형은...
          </p>
        )}

        <p className="mb-[10px] text-[40px] font-extrabold">
          {testResult?.type}
        </p>
        <p className="mx-[62px] mb-[28px] text-center text-[19px] whitespace-pre-line text-[#666666]">
          {testResult?.info?.description}
        </p>

        <img
          src={testResult?.info?.image_url}
          alt={testResult?.type}
          className="mb-[50px] h-[200px] w-[200px]"
          // crossOrigin="anonymous" //개발 땐 주석 처리 해야 함 (이미지 로딩 안됌)
        />
      </div>

      {/* 공유하기 섹션 */}
      <div className="mb-20 flex gap-3">
        <Icon icon={kakaotalk} size={50} />
        <Icon icon={shareWhite} size={50} onClick={handleCaptureClick} />
      </div>

      {/* 취향 패키지 추천 조합 섹션 */}
      <div className="mb-20 w-full">
        <p className="mb-4 ml-[57px] text-xl font-bold text-[#333333]">
          {testResult?.type} 유형을 위한 첫 번째 추천 조합
        </p>
        <div className="flex justify-center">
          <CardList type="test" cards={testCardData} columns={3} />
        </div>
      </div>

      {/* 버튼 섹션 */}
      {!isLoggedIn && (
        <TestButton
          className="mb-[10px] bg-[#FFFFFF] text-[#2E2F2F]"
          onClick={() => navigate('/login')}
        >
          회원 가입하고 결과 저장하기
        </TestButton>
      )}
      <Link to="/mypage/taste-profile" aria-label="나만의 패키지로 이동">
        <TestButton className="mb-5 bg-[#2E2F2F] text-[#FFFFFF]">
          이 조합으로 나만의 패키지 만들기
        </TestButton>
      </Link>
      <p className="mb-20">
        물론, 패키지 구성은 다음 단계에서 자유롭게 변경할 수 있어요.
      </p>

      {/* 하단 빨간 박스 섹션 */}
      <div className="relative flex h-[103px] w-[560px] items-center justify-center gap-2.5 rounded-br-[20px] rounded-bl-[20px] bg-[#F2544B]">
        <button
          className="h-[54px] w-[225px] cursor-pointer rounded-[60px] border border-[#FFFFFF] font-bold text-[#FFFFFF]"
          onClick={() => {
            if (!isLoggedIn) {
              handleNonMemberReset()
            } else {
              setStep('main')
              setTestStep(0)
            }
          }}
        >
          테스트 다시 하기
        </button>
        <Link to="/package" aria-label="다른 패키지 구경하기 ">
          <button className="h-[54px] w-[225px] cursor-pointer rounded-[60px] border border-[#FFFFFF] font-bold text-[#FFFFFF]">
            다른 패키지 둘러보기
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ResultStep
