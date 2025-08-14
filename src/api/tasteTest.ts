import { API_PATHS } from '@/constants/apiPaths'
import type { AnswerType, TasteTestProfile } from '@/types/tasteTypes'
import { axiosInstance } from '@/utils/axios'

export const getTasteTestProfile = async (): Promise<TasteTestProfile> => {
  const { data } = await axiosInstance.get(API_PATHS.TASTE_TEST.PROFILE)
  return data
}
//테스트 문항 가져오기 함수
export const getTestQuetion = async () => {
  const res = await axiosInstance.get(API_PATHS.TASTE_TEST.GETTEST)
  return res.data
}

//테스트 결과 보내고 결과 가져오기 함수
export const postTestResult = async (answers: AnswerType) => {
  const res = await axiosInstance.post(API_PATHS.TASTE_TEST.RESULT, { answers })
  return res.data
}
