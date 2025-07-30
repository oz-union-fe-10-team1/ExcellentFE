import { useState, useEffect } from 'react'
import Logo from '@/assets/icons/footer/logo.svg?react'
import Icon from '@/components/common/Icon'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 페이지 끝에 도달했을 때 푸터를 표시
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // 페이지 끝에서 100px 이내에 도달했을 때 푸터 표시
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
      setIsVisible(isNearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* 플로팅 푸터 */}
      <footer
        className={`fixed right-0 bottom-0 left-0 z-50 text-base text-white transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          backgroundColor: '#2E2F2F',
          height: '255px',
        }}
      >
        <div className="max-w-10xl mx-auto flex h-full flex-col justify-between px-80 py-[50px]">
          {/* 상단 정보 섹션 */}
          <div className="mb-4 flex flex-col items-start justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0">
            {/* 회사 정보 */}
            <div className="flex flex-col space-y-2">
              <span>상호명 : 모든 | 대표 : 정길동</span>
              <span>
                주소 : 서울특별시 | 전화번호 : 02-123-1234 | 팩스번호 :
                02-123-1234 | 이메일 : abc1234@daum.net
              </span>
              <span>
                사업자등록번호 : 123-45-67890 | 통신판매업신고번호 :
                제2025-서울강남-00123호
              </span>
            </div>
            {/* 로고 */}
            <div className="flex items-center">
              <Icon
                icon={Logo}
                size={120}
                color="#fff"
                cursor={false}
                ariaLabel="회사 로고"
                className="h-max w-max"
              />
            </div>
          </div>

          {/* 이용약관 및 개인정보 처리방침 */}

          {/* 하단 정보 섹션 */}
          <div className="flex flex-col items-start justify-between space-y-2 lg:flex-row lg:items-center lg:space-y-0"></div>

          {/* 저작권 */}
          <div className="border-t border-white/30 pt-8">
            <p className="text-white/50">
              Copyright © 모든. All right reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
