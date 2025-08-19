import { ROUTE_PATHS } from '@/constants/routePaths'
import { useSocialLogin } from '@/hooks/auth/useSocialLogin'
import { type SocialProvider } from '@/types/auth'
import { tokenStorage } from '@/utils/tokenStorage'
import { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const SocialCallback = () => {
  const { provider } = useParams() as { provider: SocialProvider }
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const navigate = useNavigate()
  const tempToken = tokenStorage.getTempToken()

  const { mutateAsync: socialLogin, isPending } = useSocialLogin(provider)

  // useEffect 없으면 무한 렌더링 발생
  useEffect(() => {
    if (!provider || !code) {
      navigate(ROUTE_PATHS.LOGIN, { replace: true })
      return
    }

    const run = async () => {
      // 소셜 로그인 요청
      try {
        if (provider === 'naver' && state) {
          await socialLogin({ code, state })
        } else {
          await socialLogin({ code })
        }

        // 신규 유저: 임시 토큰 존재 시 성인 인증 페이지로 이동
        if (tempToken) {
          navigate(ROUTE_PATHS.ADULT_AUTH_BEFORE, { replace: true })
        } else {
          navigate(ROUTE_PATHS.HOME, { replace: true })
        }
      } catch {
        navigate(ROUTE_PATHS.LOGIN, { replace: true })
      }
    }

    run()
  }, [])

  if (isPending) return <p>{provider} 로그인 처리 중입니다...</p>

  return null
}

export default SocialCallback
