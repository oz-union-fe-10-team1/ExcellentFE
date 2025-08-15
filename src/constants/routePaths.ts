export const ROUTE_PATHS = {
  HOME: '/',
  PACKAGE: '/package',
  TEST: '/test',
  SEARCH: '/search',
  FEEDBACK: '/feedback',
  CART: '/cart',
  PRODUCT_DETAIL: (id: string) => `/product/${id}`,
  PACKAGE_DETAIL: (id: string) => `/package/${id}`,

  LOGIN: '/login',
  SOCIAL_CALLBACK: (provider: string) => `/auth/${provider}/callback`,

  // 마이페이지
  MYPAGE: {
    INDEX: '/mypage',
    TASTE_PROFILE: '/mypage/taste-profile',
    ACCOUNT_EDIT: '/mypage/account-edit',
    ORDER_HISTORY: '/mypage/order-history',
    TASTING_HISTORY: '/mypage/tasting-history',
  },

  NOT_FOUND: '*',
} as const
