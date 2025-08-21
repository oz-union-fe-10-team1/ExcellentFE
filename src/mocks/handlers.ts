import mypageHandlers from './handlers/mypage/mypage'
import recommendationHandlers from './handlers/recommendation/recommendation'
import tastetestHandlers from './handlers/tastetest/tastetest'

export const handlers = [
  ...mypageHandlers,
  ...recommendationHandlers,
  ...tastetestHandlers,
]
