import CartIcon from '@/assets/icons/header/cart.svg?react'
import MypageIcon from '@/assets/icons/header/mypage.svg?react'
import Logo from '@/assets/logos/logo.svg'
import Icon from '@/components/common/Icon'
import { Z_INDEX } from '@/foundations/zIndex'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)

  /* 로그아웃 UI 체크 용 */
  const handleLogout = () => {
    setIsLogin(false)
  }

  const NAV_ITEMS = [
    { label: '패키지', path: '/package' },
    { label: '테스트', path: '/test' },
    { label: '제품 검색', path: '/search' },
    { label: '후기', path: '/feedback' },
  ]

  const USER_ICONS = [
    { label: '마이페이지', icon: MypageIcon, path: '/mypage' },
    { label: '장바구니', icon: CartIcon, path: '/cart' },
  ]

  return (
    <header
      className="fixed top-0 left-0 flex h-[90px] w-full items-center justify-around border-b border-[#d9d9d9] bg-white"
      style={{ zIndex: Z_INDEX.HEADER }}
    >
      <div className="flex w-full items-center justify-around">
        {/* 로고 */}
        <Link to="/" aria-label="홈으로 이동">
          <img src={Logo} alt="모은 한잔취향 로고" />
        </Link>

        {/* 메뉴 */}
        <div className="flex items-center gap-15">
          <nav>
            <ul className="flex gap-15">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-lg font-semibold text-[#333]"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </nav>

          {/* 로그인 / 유저 아이콘 (로그인 전)*/}
          <div className="flex items-center">
            {!isLogin ? (
              <Link
                to="/login"
                className="h-13 w-41 rounded-[60px] bg-[#f2544b] text-center leading-[52px] font-semibold text-white hover:bg-[#e04439]"
              >
                로그인/회원가입
              </Link>
            ) : (
              <>
                {/* 마이페이지, 장바구니 (로그인 이후) */}
                <div className="flex items-center gap-8">
                  {USER_ICONS.map((icon) =>
                    icon.label === '마이페이지' ? (
                      <Link
                        key={icon.label}
                        to={icon.path}
                        aria-label={icon.label}
                      >
                        <Icon icon={icon.icon} size={32} />
                      </Link>
                    ) : (
                      <Link
                        key={icon.label}
                        to={icon.path}
                        aria-label={icon.label}
                      >
                        <Icon icon={icon.icon} size={32} />
                      </Link>
                    )
                  )}
                  <button
                    type="button"
                    className="h-13 w-30 cursor-pointer rounded-4xl border border-[#d9d9d9] font-semibold text-[#666666]"
                    onClick={handleLogout}
                  >
                    로그아웃
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
