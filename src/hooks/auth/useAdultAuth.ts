import { authApi } from '@/api/auth'
import { ERROR_MESSAGE } from '@/constants/message'
import { ROUTE_PATHS } from '@/constants/routePaths'
import { useAuthStore } from '@/stores/authStore'
import type { SocialLoginUser } from '@/types/auth'
import { getAxiosErrorMessage, showError } from '@/utils/feedbackUtils'
import { tokenStorage } from '@/utils/tokenStorage'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useAdultAuthToken = () => {
  return useMutation({
    mutationFn: async (code: string) => {
      const { access_token } = await authApi.adultAuthToken(code)
      await authApi.adultAuthUser(access_token)
    },

    onError: (error) => {
      tokenStorage.removeTempToken()
      showError(getAxiosErrorMessage(error) ?? ERROR_MESSAGE.ADULT_AUTH_FAILED)
    },
  })
}

export const useAdultAuthComplete = () => {
  const { login } = useAuthStore()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (tempToken: string) => authApi.adultAuthComplete(tempToken),

    onSuccess: (data: SocialLoginUser) => {
      tokenStorage.setAccessToken(data.access)
      tokenStorage.setRefreshToken(data.refresh)

      login()
      navigate(ROUTE_PATHS.HOME, { replace: true })
      tokenStorage.removeTempToken()
    },

    onError: (error) => {
      tokenStorage.removeTempToken()
      showError(getAxiosErrorMessage(error) ?? ERROR_MESSAGE.ADULT_AUTH_FAILED)
    },
  })
}
