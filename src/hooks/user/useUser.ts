import { userApi } from '@/api/user'
import { useAuthStore } from '@/stores/authStore'
import { useMutation, useQuery } from '@tanstack/react-query'
import { commonQueryOptions } from '@/hooks/home/useProduct'
import type { UpdateProfilePayload } from '@/types/user'
import { showError, showSuccess } from '@/utils/feedbackUtils'
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/message'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/routePaths'

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: (payload: UpdateProfilePayload) =>
      userApi.updateProfile(payload),
  })
}

export const useDeleteProfile = () => {
  const { logout } = useAuthStore()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: userApi.deleteProfile,
    onSuccess: () => {
      showSuccess(SUCCESS_MESSAGE.DELETE_PROFILE)
      logout()
      navigate(ROUTE_PATHS.HOME)
    },
    onError: () => {
      showError(ERROR_MESSAGE.DEFAULT)
    },
  })
}

export const useTasteTestProfile = () => {
  const { isLoggedIn } = useAuthStore() // 로그인 상태 가져오기

  return useQuery({
    queryKey: ['tasteTestProfile'],
    queryFn: userApi.getTasteTestProfile,
    enabled: isLoggedIn, // 로그인 되어 있을 때만 서버 호출
  })
}

export const useTasteProfile = () => {
  return useQuery({
    queryKey: ['feedbackProfile'],
    queryFn: userApi.getTasteProfile,
  })
}

export const useTasteHistory = () => {
  return useQuery({
    queryKey: ['tasteHistory'],
    queryFn: userApi.getFeedbacks,
    ...commonQueryOptions,
  })
}
