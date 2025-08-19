import { authApi } from '@/api/auth'
import { ERROR_MESSAGE } from '@/constants/message'
import { useAuthStore } from '@/stores/authStore'
import type { SocialLoginUser } from '@/types/auth'
import { getAxiosErrorMessage, showError } from '@/utils/feedbackUtils'
import { tokenStorage } from '@/utils/tokenStorage'
import { useMutation } from '@tanstack/react-query'

export const useAdultAuthToken = () => {
  return useMutation({
    mutationFn: async (code: string) => {
      const { access_token } = await authApi.adultAuthToken(code)
      await authApi.adultAuthUser(access_token)
    },

    onError: (error) => {
      showError(getAxiosErrorMessage(error) ?? ERROR_MESSAGE.ADULT_AUTH_FAILED)
    },
  })
}

export const useAdultAuthComplete = () => {
  const { login } = useAuthStore()

  return useMutation({
    mutationFn: (tempToken: string) => authApi.adultAuthComplete(tempToken),

    onSuccess: (data: SocialLoginUser) => {
      tokenStorage.setAccessToken(data.access)
      tokenStorage.setRefreshToken(data.refresh)
      tokenStorage.removeTempToken()

      login()
    },

    onError: (error) => {
      showError(getAxiosErrorMessage(error) ?? ERROR_MESSAGE.ADULT_AUTH_FAILED)
    },
  })
}
