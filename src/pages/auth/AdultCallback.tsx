import { ROUTE_PATHS } from '@/constants/routePaths'
import {
  useAdultAuthComplete,
  useAdultAuthToken,
} from '@/hooks/auth/useAdultAuth'
import { tokenStorage } from '@/utils/tokenStorage'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const AdultCallback = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const tempToken = tokenStorage.getTempToken()

  const { mutateAsync: adultAuthToken, isPending } = useAdultAuthToken()
  const { mutateAsync: adultAuthComplete } = useAdultAuthComplete()

  useEffect(() => {
    if (!code || !tempToken) {
      navigate(ROUTE_PATHS.ADULT_AUTH_MANUAL, { replace: true })
      return
    }

    const run = async () => {
      try {
        await adultAuthToken(code)
        await adultAuthComplete(tempToken)
      } catch (error) {
        navigate(ROUTE_PATHS.ADULT_AUTH_MANUAL, { replace: true })
      }
    }
    run()
  }, [])

  if (isPending) {
    return <p>성인인증 중입니다...</p>
  }

  return null
}

export default AdultCallback
