import type { SocialProvider } from '@/types/auth'

export const BASE_URL = import.meta.env.VITE_API_URL

export const API_PATHS = {
  AUTH: {
    LOGIN: (provider: SocialProvider) => `/auth/login/${provider}`,
    STATE: '/auth/state',
    TOKEN_REFRESH: '/auth/token/refresh',
  },
  USER: {
    PROFILE: '/user',
    TASTE_PROFILE: '/user/taste-profile/',
  },
  TASTE_TEST: {
    PROFILE: '/taste-test/profile/',
    QUESTIONS: '/taste-test/questions/',
    RESULT: '/taste-test/submit/',
    RETAKE: '/taste-test/retake/',
  },
  FEEDBACK: {
    SUBMIT: '/feedbacks/',
    RECENT: '/feedbacks/recent/',
    POPULAR: '/feedbacks/popular/',
    PERSONALIZED: '/feedbacks/personalized/',
    TASTING_HISTORY: '/feedbacks/my/',
  },
  PRODUCTS: {
    DETAIL: (id: string | number) => `/products/${id}/`,
    MONTH: '/products/monthly/',
    POPULAR: '/products/popular/',
    FEATURED: '/products/featured/',
    RECOMMENDED: '/products/recommended/',
    AWARD: '/products/award-winning/',
    MAKGEOLLI: '/products/makgeolli/',
    REGIONAL: '/products/regional/',
  },
  SEARCHPRODUCTS: {
    SEARCH: '/products/search/',
  },
  ORDER: {
    LIST: '/orders/order-items',
    CREATE_FROM_CART: '/orders/create_from_cart/',
  },
  CART: {
    ADD: '/cart/',
    GET: '/cart/',
    DELETE: (id: string) => `/cart/${id}/`,
    UPDATE: (id: string) => `/cart/${id}/`,
  },
} as const
