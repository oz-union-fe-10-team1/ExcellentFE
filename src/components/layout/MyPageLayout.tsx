import { Z_INDEX } from '@/foundations/zIndex'
import { NavLink, Outlet } from 'react-router-dom'

const menuItems = [
  { to: 'taste-profile', label: '나의 입맛 프로필' },
  { to: 'order-history', label: '주문/배송 내역' },
  { to: 'tasting-history', label: '나의 시음 히스토리' },
  { to: 'account-edit', label: '회원정보 수정' },
]

const MyPageLayout = () => {
  return (
    <>
      <nav
        className="fixed top-0 left-0 h-screen w-[260px] bg-[#F2F2F2] px-[52px] pt-[152px]"
        style={{ zIndex: Z_INDEX.SIDEBAR }}
      >
        <h2 className="mb-8 text-3xl font-bold text-[#333]">마이페이지</h2>
        <ul className="text-18px flex flex-col gap-4 text-[#666]">
          {menuItems.map(({ to, label }) => {
            return (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? 'border-b-2 font-bold' : 'font-medium'
                  }
                >
                  {label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <section className="mx-auto ml-[320px] w-[1280px] min-w-[1280px] pt-[106px] pb-[100px]">
        <Outlet />
      </section>
    </>
  )
}

export default MyPageLayout
