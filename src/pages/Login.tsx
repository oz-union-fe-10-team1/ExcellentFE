import Logo from '@/assets/logos/logo.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Link to="/" aria-label="홈으로 이동">
        <img
          src={Logo}
          alt="모은 한잔취향 로고"
          className="h-[60px] w-[118px]"
        />
      </Link>
    </div>
  )
}

export default Login
