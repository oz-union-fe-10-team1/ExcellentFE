import { tasteTestApi } from '@/api/taste-test/index'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useTasteTestProfile = () => {
  return useQuery({
    queryKey: ['tasteTestProfile'],
    queryFn: tasteTestApi.getTasteTestProfile,
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
