import itemRowHandlers from './handlers/itemrow/itemrow'
import mypageHandlers from './handlers/mypage/mypage'
import productHandlers from './handlers/product/product'
import recommendationHandlers from './handlers/recommendation/recommendation'
import tastetestHandlers from './handlers/tastetest/tastetest'
import userHandlers from './handlers/user/user'

export const handlers = [
  ...itemRowHandlers,
  ...mypageHandlers,
  ...productHandlers,
  ...recommendationHandlers,
  ...tastetestHandlers,
  ...userHandlers,
]
