import type { ItemRowType } from '@/types/ItemRow/itemRows'

export const mockOrderItems: ItemRowType[] = [
  {
    order: '2025.07.24 22:00',
    img: 'https://picsum.photos/id/101/80/80',
    name: '독도소주 블루',
    quantity: 2,
    price: 34000,
    reviewed: false,
  },
  {
    order: '2025.07.22 19:30',
    img: 'https://picsum.photos/id/102/80/80',
    name: '흑임자 막걸리',
    quantity: 1,
    price: 12000,
    reviewed: true,
  },
  {
    order: '2025.07.20 17:00',
    img: 'https://picsum.photos/id/103/80/80',
    name: '유자 에일 맥주',
    quantity: 3,
    price: 27000,
    reviewed: false,
  },
]

export const mockTastingItems: ItemRowType[] = [
  {
    order: '2025.07.18',
    img: 'https://picsum.photos/id/104/80/80',
    name: '전통 누룩 막걸리',
    feedback: '단맛 3.5점, 산미 4.0점, 바디감4.0점 (신뢰도 90%)',
  },
  {
    order: '2025.07.17',
    img: 'https://picsum.photos/id/105/80/80',
    name: '유자 막걸리',
    feedback: '향은 좋았지만 제 입맛엔 약간 셌어요. 여름에 마시기엔 좋아요.',
  },
]

export const mockCartItems: ItemRowType[] = [
  {
    img: 'https://picsum.photos/id/106/80/80',
    name: '청포도 스파클링',
    quantity: 1,
    price: 15000,
    pickup: '서울 직배송',
  },
  {
    img: 'https://picsum.photos/id/107/80/80',
    name: '한라봉 와인',
    quantity: 2,
    price: 26000,
    pickup: '편의점 픽업',
  },
]
