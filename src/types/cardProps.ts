//main + search 카드 데이터 타입
export interface CardBaseProps {
  id?: string
  type?: 'product' | 'package'
  imgSrc: string
  imgAlt: string
  title?: string
  subtitle?: string
  price?: number
}

// 리뷰 카드 데이터 타입
export interface ReviewCardProps {
  imgSrc: string
  imgAlt: string
  starRating?: number
  userId?: string
  review?: string
}

// 테스트 페이지 추천 카드 데이터  타입
export interface TestCardProps {
  imgSrc: string
  imgAlt: string
  title?: string
  subtitle?: string
  firstLabel?: string
  secondLabel?: string
}

// 카드 타입
interface DefaultType {
  type: 'default'
  data: CardBaseProps
}

interface ReviewType {
  type: 'review'
  data: ReviewCardProps
}

interface TestType {
  type: 'test'
  data: TestCardProps
}

export type CardType = DefaultType | ReviewType | TestType
