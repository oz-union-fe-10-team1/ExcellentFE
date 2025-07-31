import GoogleIcon from '@/assets/icons/login/google.svg?react'
import KaKaoIcon from '@/assets/icons/login/kakao.svg?react'
import NaverIcon from '@/assets/icons/login/naver.svg?react'
import LoginBackground from '@/assets/images/backgrounds/login.jpg'
import LogoLeft from '@/assets/logos/logo-login.svg'
import LogoRight from '@/assets/logos/logo.svg'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex h-screen w-full p-5">
      <div
        className="relative hidden h-full w-full rounded-[20px] bg-cover bg-center bg-no-repeat xl:block xl:w-[55%]"
        style={{ backgroundImage: `url('${LoginBackground}')` }}
      >
        <Link
          to="/"
          aria-label="홈으로 이동"
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <img src={LogoLeft} alt="모은 한잔취향 로고" />
        </Link>
      </div>
      <main className="flex w-full items-center justify-center xl:w-[45%]">
        <div className="flex flex-col">
          <header className="flex flex-col items-center">
            <Link to="/" aria-label="홈으로 이동" className="mb-5">
              <img
                src={LogoRight}
                alt="모은 한잔취향 로고"
                className="h-[60px] w-[118px]"
              />
            </Link>
            <h1 className="mb-20 text-xl text-[#333]">
              로그인하고 나만의 전통주를 즐겨보세요!
            </h1>
          </header>
          <section className="flex flex-col gap-5">
            <Button variant={'VARIANT8'} className="bg-[#FFE812] text-[#333]">
              <Icon icon={KaKaoIcon} size={16} />
              <span className="w-full text-center">카카오 로그인</span>
            </Button>
            <Button variant={'VARIANT8'} className="bg-[#1EC800] text-[#FFF]">
              <Icon icon={NaverIcon} size={16} />
              <span className="w-full text-center"> 네이버 로그인</span>
            </Button>
            <Button
              variant={'VARIANT8'}
              className="border border-[#DFDFDF] bg-[#FFF] text-[#333]"
            >
              <Icon icon={GoogleIcon} size={16} />
              <span className="w-full text-center"> 구글 로그인</span>
            </Button>
          </section>
          <button
            type="button"
            className="mt-[80px] cursor-pointer text-[#666] underline underline-offset-4"
          >
            계정 찾기
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login
