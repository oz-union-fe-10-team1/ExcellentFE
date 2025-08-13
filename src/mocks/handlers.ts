import { authHandlers } from './handlers/auth/authHandlers'
import feedbackHandlers from './handlers/feedback/feedback'
import itemRowHandlers from './handlers/itemrow/itemrow'
import mypageHandlers from './handlers/mypage/mypage'
import orderHandlers from './handlers/order/order'
import packageHandlers from './handlers/package/package'
import packageDetailHandlers from './handlers/package/mocks/packageDetail'
import productHandlers from './handlers/product/product'
import productDetailHandlers from './handlers/product/mocks/productDetail'
import recommendationHandlers from './handlers/recommendation/recommendation'
import tastetestHandlers from './handlers/tastetest/tastetest'
import userHandlers from './handlers/user/user'

export const handlers = [
  ...authHandlers,
  ...feedbackHandlers,
  ...itemRowHandlers,
  ...mypageHandlers,
  ...orderHandlers,
  ...packageHandlers,
  ...packageDetailHandlers,
  ...productHandlers,
  ...productDetailHandlers,
  ...recommendationHandlers,
  ...tastetestHandlers,
  ...userHandlers,
]
