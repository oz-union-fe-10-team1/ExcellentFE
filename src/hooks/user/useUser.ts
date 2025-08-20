import { userApi } from '@/api/user'
import { useAuthStore } from '@/stores/authStore'
import { useMutation, useQuery } from '@tanstack/react-query'
import { commonQueryOptions } from '@/hooks/home/useProduct'
import type { UpdateProfilePayload } from '@/types/user'

// export const useGetProfile = () => {
//   return useQuery({
//     queryKey: ['user'],
//     queryFn: userApi.getProfile,
//   })
// }

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: (payload: UpdateProfilePayload) =>
      userApi.updateProfile(payload),
  })
}

export const useDeleteProfile = () => {
  return useMutation({
    mutationFn: userApi.deleteProfile,
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
