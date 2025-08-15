import type { SocialProvider } from '@/types/auth'

export const BASE_URL = import.meta.env.VITE_API_URL

export const API_PATHS = {
  AUTH: {
    LOGIN: (provider: SocialProvider) => `/auth/login/${provider}`,
    STATE: '/auth/state',
    REFRESH: '/auth/refresh',
  },
  USER: {
    PROFILE: '/user',
    TASTE_PROFILE: '/user/taste-profile/',
  },
  TASTE_TEST: {
    PROFILE: '/taste-test/profile/',
    QUESTIONS: '/taste-test/questions/',
    RESULT: '/taste-test/submit/',
  },
  FEEDBACK: {
    SUBMIT: '/feedbacks/',
  },
  PRODUCTS: {
    DETAIL: (id: string | number) => `/products/${id}/`,
    MONTH: '/products/monthly',
    POPULAR: '/products/popular',
    FEATURED: '/products/featured',
    RECOMMENDED: '/products/recommended',
    AWARD: '/products/award-winning',
    MAKGEOLLI: '/products/makgeolli',
    REGIONAL: '/products/regional',
  },
  PACKAGES: {
    LIST: '/api/v1/packages/',
  },
  SEARCHPRODUCTS: {
    SEARCH: '/api/v1/products/search/',
  },
  ORDER: {
    LIST: '/orders/list/',
  },
  CART: {
    ADD: '/cart/',
  },
} as const
