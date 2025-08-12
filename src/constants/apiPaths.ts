import type { SocialProvider } from '@/types/auth'

export const BASE_URL = import.meta.env.VITE_API_URL

export const API_PATHS = {
  AUTH: {
    LOGIN: (provider: SocialProvider) => `/auth/login/${provider}`,
    STATE: '/auth/state',
    REFRESH: '/auth/refresh',
  },
  USER: '/user',
  TASTE_TEST: {
    PROFILE: '/taste-test/profile',
  },
  FEEDBACK: {
    SUBMIT: '/feedbacks/',
    PROFILE: '/feedback/profile',
  },
  PRODUCTS: {
    LIST: '/api/v1/products',
  },
  PACKAGES: {
    LIST: '/api/v1/packages/',
  },
  SEARCHPRODUCTS: {
    SEARCH: 'api/v1/products/search',
  },

  TEST: {
    GETTEST: '/taste-test/questions',
  },
} as const
