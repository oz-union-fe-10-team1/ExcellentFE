import type { TasteScoreMap } from '@/types/tasteTypes'

export interface TastingReview {
  sweetness: number
  acidity: number
  body: number
  confidence: number
  carbonation: number
  bitter: number
  aroma: number
  rating: number
}

export interface TastingSubmitData {
  order_item_id: number
  sweetness: number
  acidity: number
  body: number
  confidence: number
  carbonation: number
  bitter: number
  aroma: number
  overall_rating: number
  taste_tag: string[]
  comment?: string
  files?: File[] | null
}

export interface TasteProfile {
  id: number
  taste_scores: TasteScoreMap
  description: string
}
