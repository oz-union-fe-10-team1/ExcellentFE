import mypageHandlers from './handlers/mypage/mypage'
import recommendationHandlers from './handlers/recommendation/recommendation'
import tastetestHandlers from './handlers/tastetest/tastetest'
import userHandlers from './handlers/user/user'

export const handlers = [
  ...mypageHandlers,
  ...recommendationHandlers,
  ...tastetestHandlers,
  ...userHandlers,
]
