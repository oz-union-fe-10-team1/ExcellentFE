import { API_PATHS } from '@/constants/apiPaths'
import type { AnswerType } from '@/types/tasteTypes'
import { axiosInstance } from '@/utils/axios'

export const tasteTestApi = {
  //테스트 문항 가져오기 함수
  getTestQuestion: async () => {
    const { data } = await axiosInstance.get(API_PATHS.TASTE_TEST.QUESTIONS)
    return data
  },

  //테스트 결과 보내고 결과 가져오기 함수
  postTestResult: async (answers: AnswerType) => {
    const { data } = await axiosInstance.post(API_PATHS.TASTE_TEST.RESULT, {
      answers,
    })
    return data
  },

  //테스트 결과 업데이트 함수 (put)
  putTestResult: async (answers: AnswerType) => {
    const { data } = await axiosInstance.put(API_PATHS.TASTE_TEST.RETAKE, {
      answers,
    })
    return data
  },
}
