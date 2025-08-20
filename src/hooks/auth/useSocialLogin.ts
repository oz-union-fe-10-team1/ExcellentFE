import { authApi } from '@/api/auth'
import { ERROR_MESSAGE } from '@/constants/message'
import { SOCIAL_LOGIN } from '@/constants/socialLoginUrl'
import { useAuthStore } from '@/stores/authStore'
import {
  type SocialLoginRequest,
  type SocialLoginTempToken,
  type SocialLoginUser,
  type SocialProvider,
} from '@/types/auth'
import { getAxiosErrorMessage, showError } from '@/utils/feedbackUtils'
import { tokenStorage } from '@/utils/tokenStorage'
import { useMutation } from '@tanstack/react-query'
import useNonMemberTasteTest from '../taste-test/nonMemberTest'

export const useSocialLoginURL = () => {
  // const [searchParams] = useSearchParams()
  // const redirect = searchParams.get('redirect')

  return useMutation({
    mutationFn: async (provider: SocialProvider) => {
      const state = crypto.randomUUID()
      // await authauthState(state)

      // redirect 정보를 state에 포함시킴
      // const stateWithRedirect = redirect ? `${state}:${redirect}` : state
      // const url = SOCIAL_LOGIN[provider].getLoginUrl(stateWithRedirect)
      const url = SOCIAL_LOGIN[provider].getLoginUrl(state)
      return url
    },

    onSuccess: (url) => {
      window.location.replace(url)
    },

    onError: (error) => {
      showError(getAxiosErrorMessage(error) ?? ERROR_MESSAGE.LOGIN_FAILED)
    },
  })
}

export const useSocialLogin = (provider: SocialProvider) => {
  const { login } = useAuthStore()
  // const [searchParams] = useSearchParams()

  // state에서 redirect 추출
  // const state = searchParams.get('state')
  // const redirect = state?.match(/^[^:]+:(.+)$/)?.[1] ?? null

  //비회원의 경우 로컬에서 값 꺼내서 서버에 저장하는 로직
  const { run: syncTest } = useNonMemberTasteTest()

  return useMutation({
    mutationFn: (payload: SocialLoginRequest) =>
      authApi.socialLogin(provider, payload),

    onSuccess: (data: SocialLoginTempToken | SocialLoginUser) => {
      if ('temp_token' in data) {
        tokenStorage.setTempToken(data.temp_token)
      }

      if ('access' in data && 'refresh' in data) {
        tokenStorage.setAccessToken(data.access)
        tokenStorage.setRefreshToken(data.refresh)

        login()
        syncTest('auth_type' in data ? data.auth_type : undefined)
      }
    },

    onError: (error) => {
      showError(getAxiosErrorMessage(error) ?? ERROR_MESSAGE.LOGIN_FAILED)
    },
  })
}
