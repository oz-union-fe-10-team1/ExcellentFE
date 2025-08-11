export interface TastingReview {
  sweetness: number
  acidity: number
  body: number
  confidence: number
  rating: number
}

export interface TastingSubmitData {
  order_item_id: number
  sweetness: number
  acidity: number
  body: number
  confidence: number
  overall_rating: number
  taste_tag: string[]
  comment: string
  files: File[] | null
}

export interface FeedbackRequest {
  order_item_id: number
  sweetness: number
  acidity: number
  body: number
  confidence: number
  overall_rating: number
  taste_tag?: string[]
  comment?: string
  files?: File[] | null
}
