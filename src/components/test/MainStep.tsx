import testMain from '@/assets/images/tasteTest/testMain.png'
import arrowUp from '@/assets/icons/tasteTest/arrowUp.svg'
import Modal from '../common/Modal'
import kakaotalk from '@/assets/icons/tasteTest/kakaotalk.svg'
import facebook from '@/assets/icons/tasteTest/facebook.svg'
import instagram from '@/assets/icons/tasteTest/instagram.svg'

import { useState } from 'react'

//테스트 시작의 메인 단계
const MainStep = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  //공유하기 버튼을 눌렀을 때, 모달 띄우기
  const handleShare = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
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
      <button className="mb-[57px] h-[59px] w-[460px] rounded-[60px] bg-[#2E2F2F] text-[#FFFFFF]">
        테스트 시작하기
      </button>
      {/* 공유하기 파트 */}
      <div className="mb-[88px] flex">
        <img src={arrowUp} alt="공유하기" className="mr-5 h-[20px] w-[18px]" />
        <p onClick={handleShare}>공유하기</p>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal} title="공유하기">
            <div className="mt-[51px] flex space-x-[46px]">
              {[
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
              ].map((option, index) => (
                <div key={index} className="">
                  <img
                    src={option.src}
                    alt={option.alt}
                    className="mb-3 h-[90px] w-[90px]"
                  />
                  <p> {option.label}</p>
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
