export const BASE_URL = import.meta.env.VITE_API_URL

export const API_PATH = {
  AUTH: {
    LOGIN: {
      KAKAO: '/api/v1/auth/login/kakao',
      NAVER: '/api/v1/auth/login/naver',
      GOOGLE: '/api/v1/auth/login/google',
    },
  },
}
