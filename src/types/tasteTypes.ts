// 6가지 타입 선언
export type TasteType =
  | 'sweetness_level'
  | 'acidity_level'
  | 'body_level'
  | 'carbonation_level'
  | 'bitterness_level'
  | 'aroma_level'

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
