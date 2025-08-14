import { getTestQuetion, postTestResult } from '@/api/tasteTest'
import type { AnswerType, TestQuestionType } from '@/types/tasteTypes'
import { useMutation, useQuery } from '@tanstack/react-query'

// 테스트 문항 불러온 데이터
export const useTasteTest = () => {
  return useQuery<TestQuestionType[]>({
    queryKey: ['getTest'],
    queryFn: getTestQuetion,
  })
}

//테스트 결과
export const useTasteTestResult = () => {
  return useMutation({
    mutationFn: postTestResult,
  })
}
