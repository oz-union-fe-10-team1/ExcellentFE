import type { SocialProvider } from '@/types/auth'

export const BASE_URL = import.meta.env.VITE_API_URL
export const PRODUCTS_SEARCH_PATH = '/products/search'

export const API_PATHS = {
  AUTH: {
    LOGIN: (provider: SocialProvider) => `/auth/login/${provider}`,
    REFRESH: '/auth/refresh',
    STATE: '/auth/state',
  },
} as const
