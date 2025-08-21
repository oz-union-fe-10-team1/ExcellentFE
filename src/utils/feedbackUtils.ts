import { ERROR_MESSAGE } from '@/constants/message'
import axios from 'axios'

export const getAxiosErrorMessage = (
  error: unknown,
  fallback = ERROR_MESSAGE.DEFAULT
) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.detail ?? fallback
  }
  return fallback
}

export const showError = (message: string) => {
  // 추후 모달로 교체 예정
  alert(message)
}

export const showSuccess = (message: string) => {
  // 추후 모달로 교체 예정
  alert(message)
}
