import type { TasteScoreMap } from '@/types/tasteTypes'

export interface Feedback {
  id: number
  user: number
  order_item: number
  rating: number
  sweetness: string
  acidity: string
  body: string
  carbonation: string
  bitterness: string
  aroma: string
  confidence: number
  comment: string
  selected_tags: string
  view_count: number
  last_viewed_at: string
  created_at: string
  updated_at: string
  masked_username: string
  product: string
}

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

export interface FeedbackProfile {
  id: number
  taste_scores: TasteScoreMap
  description: string
}
