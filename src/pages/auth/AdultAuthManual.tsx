import Button from '@/components/common/Button'
import Modal from '@/components/common/Modal'
import { ROUTE_PATHS } from '@/constants/routePaths'
import { ADULT_VERIFICATION_URL } from '@/constants/socialLoginUrl'
import { tokenStorage } from '@/utils/tokenStorage'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const AdultAuthManual = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === ROUTE_PATHS.ADULT_AUTH_MANUAL) {
      tokenStorage.removeTempToken()
    }
  }, [location])

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="mb-7 text-5xl font-bold text-[#f2544b]">19+</p>
      <h1 className="mb-5 text-3xl font-bold text-[#333]">
        회원가입을 위해 최초 1회 성인 인증이 필요합니다
      </h1>
      <button
        onClick={() => {
          setIsModalOpen(true)
        }}
        className="mb-14 cursor-pointer font-bold text-[#666]"
      >
        성인인증 가이드 확인하기
      </button>
      <Button
        className="w-120"
        onClick={() => {
          window.location.replace(ADULT_VERIFICATION_URL)
        }}
      >
        성인인증 하러 가기
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        title="성인인증 가이드"
        className="w-145 px-22 text-[#333]"
      >
        <ol className="mt-6 flex list-inside list-decimal flex-col gap-2 text-lg">
          <li>
            비바톤 익명 인증을 처음 이용하는 사용자는 회원가입 버튼을 클릭하여
            비바톤 회원가입을 진행합니다.
          </li>
          <li>
            아이디와 패스워드를 자유롭게 입력하고 약관 동의 후 다음 버튼을
            클릭합니다.
          </li>
          <li>이용중이신 통신사와 인증 방식을 선택하여 인증을 진행합니다.</li>
          <li>
            회원가입을 완료하면 다시 처음 화면으로 돌아가 비밀번호 로그인을
            클릭하고 로그인을 진행합니다.
          </li>
        </ol>
      </Modal>
    </div>
  )
}

export default AdultAuthManual
