import { socialLogin } from '@/api/auth'
import { ROUTE_PATHS } from '@/constants/routePaths'
import {
  type SocialCallbackRequest,
  type SocialCallbackResponse,
  type SocialProvider,
} from '@/types/auth'
import { tokenStorage } from '@/utils/tokenStorage'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const useSocialLogin = (provider: SocialProvider) => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (payload: SocialCallbackRequest) =>
      socialLogin(provider, payload),

    onSuccess: (data: SocialCallbackResponse) => {
      tokenStorage.setAccessToken(data.access_token)
      tokenStorage.setRefreshToken(data.refresh_token)

      navigate(ROUTE_PATHS.HOME)
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

      navigate(ROUTE_PATHS.LOGIN)
    },
  })
}
