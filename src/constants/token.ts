export const TOKEN_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
} as const

export type TokenKey = keyof typeof TOKEN_KEYS
