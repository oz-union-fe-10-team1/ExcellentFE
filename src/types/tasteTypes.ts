// 6가지 타입 선언
export type TasteType =
  | 'sweetness_level'
  | 'acidity_level'
  | 'body_level'
  | 'carbonation_level'
  | 'bitterness_level'
  | 'aroma_level'

export type TasteScoreMap = Record<TasteType, number>

// 맛 점수 데이터 타입
export interface TasteScore {
  type: TasteType
  score: number
}

// 내부에서 사용하는 매핑 정보 타입
export interface TasteMeta {
  label: string
  color: string
}

export interface TasteTestProfile {
  user: string
  has_test: boolean
  id: number
  prefer_taste: string
  prefer_taste_display: string
  taste_description: string
  image_url: string
  created_at: string
}

// 테스트 칠문 타입
export interface TestQuestionType {
  test: {
    id: number
    title: string
    description: string
  }
  questions: {
    id: number
    question_text: string
    sequence: number
    answers: {
      id: number
      answer_text: string
    }[]
  }[]
  total_questions: number
  instructions: string
  estimated_time: string
}
