import { useSocialLogin } from '@/hooks/useSocialLogin'
import { ROUTE_PATHS } from '@/constants/routePaths'
import { type SocialProvider } from '@/types/auth'
import { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const SocialCallback = () => {
  const { provider } = useParams() as { provider: SocialProvider }
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const code = searchParams.get('code')
  const state = searchParams.get('state')

  const { mutate, isPending } = useSocialLogin(provider)

  useEffect(() => {
    if (!provider || !code || !state) {
      alert('유효하지 않은 접근입니다. 다시 시도해주세요.')
      navigate(ROUTE_PATHS.LOGIN)
      return
    }

    mutate({ code, state })
  }, [code, state, mutate, provider, navigate])

  if (isPending) return <p>{provider} 로그인 처리 중입니다...</p>

  return null
}

export default SocialCallback
