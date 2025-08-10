import { authState, socialLogin } from '@/api/auth'
import { ROUTE_PATHS } from '@/constants/routePaths'
import { SOCIAL_LOGIN } from '@/constants/socialLoginUrl'
import { useAuthStore } from '@/stores/authStore'
import {
  type SocialCallbackRequest,
  type SocialCallbackResponse,
  type SocialProvider,
} from '@/types/auth'
import { tokenStorage } from '@/utils/tokenStorage'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const useSocialLoginURL = () => {
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect')

  return useMutation({
    mutationFn: async (provider: SocialProvider) => {
      const state = crypto.randomUUID()
      await authState(state)

      // redirect 정보를 state에 포함시킴
      const stateWithRedirect = redirect ? `${state}:${redirect}` : state

      const url = SOCIAL_LOGIN[provider].getLoginUrl(stateWithRedirect)

      return url
    },
    onSuccess: (url) => {
      window.location.replace(url)
    },
    onError: (error) => {
      console.error('Social Login Error', error)
    },
  })
}

export const useSocialLogin = (provider: SocialProvider) => {
  const navigate = useNavigate()
  const { login } = useAuthStore()
  const [searchParams] = useSearchParams()

  // state에서 redirect 추출
  const state = searchParams.get('state')
  const redirect = state?.match(/^[^:]+:(.+)$/)?.[1] ?? null

  return useMutation({
    mutationFn: (payload: SocialCallbackRequest) =>
      socialLogin(provider, payload),

    onSuccess: (data: SocialCallbackResponse) => {
      tokenStorage.setAccessToken(data.access_token)
      tokenStorage.setRefreshToken(data.refresh_token)

      login()

      navigate(redirect ?? ROUTE_PATHS.HOME, { replace: true })
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.detail
        alert(
          message ?? `${provider} 로그인에 실패했습니다. 다시 시도해주세요.`
        )
      } else {
        alert(`${provider} 로그인에 실패했습니다. 다시 시도해주세요.`)
      }
      console.error('Social Login Error', error)

      navigate(ROUTE_PATHS.LOGIN, { replace: true })
    },
  })
}
