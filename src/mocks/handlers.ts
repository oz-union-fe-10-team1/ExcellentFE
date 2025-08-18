import mypageHandlers from './handlers/mypage/mypage'
import productHandlers from './handlers/product/product'
import recommendationHandlers from './handlers/recommendation/recommendation'
import tastetestHandlers from './handlers/tastetest/tastetest'

export const handlers = [
  ...mypageHandlers,
  ...productHandlers,
  ...recommendationHandlers,
  ...tastetestHandlers,
]
