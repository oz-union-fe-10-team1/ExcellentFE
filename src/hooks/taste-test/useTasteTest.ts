import { tasteTestApi } from '@/api/taste-test/index'
import { useMutation, useQuery } from '@tanstack/react-query'

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
