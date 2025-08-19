import { tasteTestApi } from '@/api/taste-test/index'
import { useAuthStore } from '@/stores/authStore'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useTasteTestProfile = () => {
  const { isLoggedIn } = useAuthStore() // 로그인 상태 가져오기

  return useQuery({
    queryKey: ['tasteTestProfile'],
    queryFn: tasteTestApi.getTasteTestProfile,
    enabled: isLoggedIn, // 로그인 되어 있을 때만 서버 호출
  })
}

export const useTasteTestQuestion = () => {
  return useQuery({
    queryKey: ['tasteTestQuestion'],
    queryFn: tasteTestApi.getTestQuestion,
  })
}

export const useTasteTestResult = () => {
  return useMutation({
    mutationFn: tasteTestApi.postTestResult,
  })
}

export const useTasteTestRetake = () => {
  return useMutation({
    mutationFn: tasteTestApi.putTestResult,
  })
}
