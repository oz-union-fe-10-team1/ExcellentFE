import CartIcon from '@/assets/icons/header/cart.svg?react'
import Logo from '@/assets/icons/header/logo.svg'
import MypageIcon from '@/assets/icons/header/mypage.svg?react'
import Icon from '@/components/common/Icon'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  /* 로그인 UI 체크 용 */
  const handleLogin = () => {
    setIsLogin(true)
  }

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
    <header className="flex h-20 w-full items-center justify-around border-b border-[#d9d9d9]">
      <div className="flex w-full items-center justify-around">
        {/* 로고 */}
        <img
          src={Logo}
          alt="모은 한잔취향 로고"
          className="h-11 cursor-pointer"
          onClick={() => navigate('/')}
        />

        {/* 메뉴 */}
        <div className="flex items-center gap-15">
          <nav>
            <ul className="flex gap-15">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.path}
                  className="cursor-pointer text-lg font-semibold active:text-[#123123]"
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>

          {/* 로그인 / 유저 아이콘 (로그인 전)*/}
          <div className="flex items-center">
            {!isLogin ? (
              <button
                className="h-13 w-41 cursor-pointer rounded-[60px] bg-[#f2544b] font-semibold text-white hover:bg-[#e04439]"
                onClick={handleLogin}
              >
                로그인 / 회원가입
              </button>
            ) : (
              <>
                {/* 마이페이지, 장바구니 (로그인 이후) */}
                <div className="flex gap-8">
                  {USER_ICONS.map((icon) =>
                    icon.label === '마이페이지' ? (
                      <div key={icon.label} className="group relative flex">
                        <button
                          aria-label={icon.label}
                          onClick={() => navigate(icon.path)}
                        >
                          <Icon icon={icon.icon} size={32} />
                        </button>
                      </div>
                    ) : (
                      <button
                        key={icon.label}
                        aria-label={icon.label}
                        onClick={() => navigate(icon.path)}
                        className="relative"
                      >
                        <Icon icon={icon.icon} size={32} />
                      </button>
                    )
                  )}
                  <button
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
