import { authHandlers } from './handlers/auth/authHandlers'
import feedbackHandlers from './handlers/feedback/feedback'
import itemRowHandlers from './handlers/itemrow/itemrow'
import mypageHandlers from './handlers/mypage/mypage'
import orderHandlers from './handlers/order/order'
import productHandlers from './handlers/product/product'
import recommendationHandlers from './handlers/recommendation/recommendation'
import tastetestHandlers from './handlers/tastetest/tastetest'
import userHandlers from './handlers/user/user'

export const handlers = [
  ...authHandlers,
  ...feedbackHandlers,
  ...itemRowHandlers,
  ...mypageHandlers,
  ...orderHandlers,
  ...productHandlers,
  ...recommendationHandlers,
  ...tastetestHandlers,
  ...userHandlers,
]
