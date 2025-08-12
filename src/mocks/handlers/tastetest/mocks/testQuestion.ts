import type { TestQuestionType } from '@/types/tasteTypes'

const testQuestion: TestQuestionType[] = [
  {
    id: 'Q1',
    question: '카페에 가면 주로 시키는 메뉴는?',
    options: {
      A: '달콤한 바닐라 라떼나 과일 에이드',
      B: '깔끔한 아메리카노나 고소한 곡물 라떼',
    },
  },
  {
    id: 'Q2',
    question: '둘 중 더 좋아하는 과일 스타일은?',
    options: {
      A: '침이 고이는 레몬,유자,자몽',
      B: '잘 익은 달콤한 수박,복숭아',
    },
  },
  {
    id: 'Q3',
    question: '디저트를 딱 하나만 고른다면?',
    options: {
      A: '입안이 상쾌해지는 과일 소르베나 요거트 아이스크림',
      B: '커피나 위스키가 생각나는 진한 치즈케이크나 티라미수',
    },
  },
  {
    id: 'Q4',
    question: '평소 즐겨 마시는 음료는?',
    options: {
      A: '톡 쏘는 탄산수나 상큼한 콤부차',
      B: '시원하고 깔끔한 보리차나 녹차',
    },
  },
  {
    id: 'Q5',
    question: '맛있는 식사 후, 입안의 마무리는?',
    options: {
      A: '입안이 싹 정리되는 깔끔한 느낌',
      B: '맛의 여운이 은은하게 남는 느낌',
    },
  },
  {
    id: 'Q6',
    question: '특별한 날을 기념하기 위해, 술을 고른다면?',
    options: {
      A: '달콤해서 파티 분위기를 띄워주는 술',
      B: '오랜 시간 숙성되어 깊고 진한 풍미를 가진 술',
    },
  },
]

export default testQuestion
