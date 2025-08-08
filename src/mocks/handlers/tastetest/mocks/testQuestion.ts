import type { TestQuestionType } from '@/types/tasteTypes'

const testQuestion: TestQuestionType = {
  test: {
    id: 1,
    title: '나만의 전통주 취향 찾기',
    description: '몇 가지 질문을 통해 당신에게 맞는 전통주 유형을 찾아보세요!',
  },
  questions: [
    {
      id: 1,
      question_text: '카페에 가면 주로 시키는 메뉴는?',
      sequence: 1,
      answers: [
        {
          id: 1,
          answer_text: '달콤한 바닐라 라떼나 과일 에이드',
        },
        {
          id: 2,
          answer_text: '깔끔한 아메리카노나 고소한 곡물 라떼',
        },
      ],
    },
    {
      id: 2,
      question_text: '둘 중 더 좋아하는 과일 스타일은?',
      sequence: 2,
      answers: [
        {
          id: 3,
          answer_text: '침이 고이는 레몬,유자,자몽',
        },
        {
          id: 4,
          answer_text: '잘 익은 달콤한 수박,복숭아',
        },
      ],
    },
    {
      id: 3,
      question_text: '디저트를 딱 하나만 고른다면?',
      sequence: 3,
      answers: [
        {
          id: 5,
          answer_text: '입안이 상쾌해지는 과일 소르베나 요거트 아이스크림',
        },
        {
          id: 6,
          answer_text: '커피나 위스키가 생각나는 진한 치즈케이크나 티라미수',
        },
      ],
    },
    {
      id: 4,
      question_text: '평소 즐겨 마시는 음료는?',
      sequence: 4,
      answers: [
        {
          id: 7,
          answer_text: '톡 쏘는 탄산수나 상큼한 콤부차',
        },
        {
          id: 8,
          answer_text: '시원하고 깔끔한 보리차나 녹차',
        },
      ],
    },
    {
      id: 5,
      question_text: '맛있는 식사 후, 입안의 마무리는?',
      sequence: 5,
      answers: [
        {
          id: 9,
          answer_text: '입안이 싹 정리되는 깔끔한 느낌',
        },
        {
          id: 10,
          answer_text: '맛의 여운이 은은하게 남는 느낌',
        },
      ],
    },
    {
      id: 6,
      question_text: '특별한 날을 기념하기 위해, 술을 고른다면?',
      sequence: 6,
      answers: [
        {
          id: 11,
          answer_text: '달콤해서 파티 분위기를 띄워주는 술',
        },
        {
          id: 12,
          answer_text: '오랜 시간 숙성되어 깊고 진한 풍미를 가진 술',
        },
      ],
    },
  ],
  total_questions: 6,
  instructions: '각 질문에 답변을 선택해주세요.',
  estimated_time: '약 3-5분',
}

export default testQuestion
