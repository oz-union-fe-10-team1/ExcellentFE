import { ROUTE_PATHS } from '@/constants/routePaths'
import { useSocialLogin } from '@/hooks/auth/useSocialLogin'
import { type SocialProvider } from '@/types/auth'
import { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const SocialCallback = () => {
  const { provider } = useParams() as { provider: SocialProvider }
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const navigate = useNavigate()

  const { mutate: socialLogin, isPending } = useSocialLogin(provider)

  // useEffect 없으면 무한 렌더링 발생
  useEffect(() => {
    if (!provider || !code) {
      navigate(ROUTE_PATHS.LOGIN, { replace: true })
      return
    }

    if (provider === 'naver' && state) {
      socialLogin({ code, state })
    } else {
      socialLogin({ code })
    }
  }, [provider, code, state, socialLogin, navigate])

  if (isPending) return <p>{provider} 로그인 처리 중입니다...</p>

  return null
}

export default SocialCallback
