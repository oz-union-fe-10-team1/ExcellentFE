import type { SocialProvider } from '@/types/auth'

export const BASE_URL = import.meta.env.VITE_API_URL

export const API_PATHS = {
  AUTH: {
    LOGIN: (provider: SocialProvider) => `/auth/login/${provider}`,
    REFRESH: '/auth/refresh',
    STATE: '/auth/state',
  },
  PRODUCTS: {
    LIST: '/api/v1/products',
  },
  PACKAGES: {
    LIST: '/api/v1/packages/',
  },

  SEARCHPRODUCTS: {
    SEARCH: 'api/v1/products/search',
    FEEDBACK: {
      SUBMIT: '/api/v1/feedbacks/',
    },
  } as const
}