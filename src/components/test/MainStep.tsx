import testMain from '@/assets/images/tasteTest/testMain.png'
import arrowUp from '@/assets/icons/tasteTest/arrowUp.svg?react'
import Modal from '@/components/common/Modal'
import kakaotalk from '@/assets/icons/tasteTest/kakaotalk.svg'
import facebook from '@/assets/icons/tasteTest/facebook.svg'
import instagram from '@/assets/icons/tasteTest/instagram.svg'

import { useEffect, useState } from 'react'
import Icon from '@/components/common/Icon'
import TestButton from '@/components/test/TestButton.tsx'
import type { TestType } from '@/types/tasteTypes'

const SNS_SHARE = [
  {
    src: kakaotalk,
    alt: '카카오톡 공유하기',
    label: '카카오톡 공유',
  },
  {
    src: facebook,
    alt: '페이스북 공유하기',
    label: '페이스북 공유',
  },
  {
    src: instagram,
    alt: '인스타그램 공유하기',
    label: '인스타그램 공유',
  },
]

const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY

interface MainStepProps {
  step: TestType
  setStep: React.Dispatch<React.SetStateAction<TestType>>
}

//테스트 시작의 메인 단계
const MainStep = ({ setStep }: MainStepProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // 컴포넌트 마운트 시 카카오 SDK를 초기화합니다.
  useEffect(() => {
    if (window.Kakao && KAKAO_APP_KEY) {
      const kakao = window.Kakao
      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_APP_KEY)
      }
    }
  }, [])

  //공유하기 버튼을 눌렀을 때, 모달 띄우기
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // 카카오톡 공유 함수를 정의
  const shareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '내 입맛에 맞는 전통주는?',
          description:
            '나는 어떤 입맛일까? 테스트 후 나만의 전통주를 찾아보세요!',
          imageUrl: 'https://moeun.kro.kr/', // 이미지 URL을 절대 경로로 지정
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '테스트 시작하기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
      handleCloseModal() // 공유 후 모달을 닫음
    }
  }

  //페이스북 공유 함수
  const shareFacebook = () => {
    const shareUrl = encodeURIComponent(window.location.href)
    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`

    // 새 창에서 페이스북 공유 페이지 열기
    window.open(facebookShareLink, '_blank', 'noopener,noreferrer')

    // 공유 후 모달 닫기
    handleCloseModal()
  }

  return (
    <div className="flex flex-col items-center">
      <p className="mt-[80px] mb-[10px] text-[40px] font-bold text-[#333333]">
        내 입맛에 맞는 전통주는?
      </p>
      <p className="text-lg text-[#666666]">나는 어떤 입맛일까?</p>
      <p className="mb-[50px] text-lg text-[#666666]">
        테스트 후 나만의 전통주를 찾아보세요!
      </p>
      <img
        src={testMain}
        alt="모은 테스트 메인"
        className="mb-[50px] h-[340px] w-[380px]"
      />
      <TestButton
        className="mb-[57px] bg-[#2E2F2F] text-[#FFFFFF]"
        onClick={() => setStep('question')}
      >
        테스트 시작하기
      </TestButton>

      {/* 공유하기 파트 */}
      <div className="mb-[88px] flex items-center">
        <Icon
          icon={arrowUp}
          size={40}
          className="mr-5"
          onClick={handleOpenModal}
        />
        <p onClick={handleOpenModal} className="cursor-pointer">
          공유하기
        </p>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title="공유하기"
          >
            <div className="mt-[51px] flex space-x-[46px]">
              {SNS_SHARE.map((option, index) => (
                <div key={`${option.label} - ${index}`}>
                  <img
                    src={option.src}
                    alt={option.alt}
                    className="mb-3 h-[90px] w-[90px] cursor-pointer"
                    onClick={() => {
                      if (option.label === '카카오톡 공유') shareKakao()
                      if (option.label === '페이스북 공유') shareFacebook()
                    }}
                  />
                  <p className="cursor-pointer"> {option.label}</p>
                </div>
              ))}
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default MainStep
