interface productBrewery {
  id: number
  name: string
}

interface resultProduct {
  id: string
  name: string
  brewery: productBrewery
  price: number
  main_image_url: string
  alcohol_content: number
  volume_ml: number
}

interface productOrderItem {
  id: number
  order_id: number
  quantity: number
  purchase_date: string
  unit_price: number
}

interface resultTasteFeedback {
  sweetness_impact: string
  aroma_impact: string
  body_impact: string
  overall_satisfaction: string
}

interface historyResultType {
  id: number
  product: resultProduct
  order_item: productOrderItem
  rating: number
  confidence: number
  comment: string
  days_after_purchase: number
  is_verified_purchase: boolean
  created_at: string
  taste_feedback: resultTasteFeedback
  helpful_count: number
  can_edit: boolean
  can_delete: boolean
}

interface summaryRating_distributionType {
  '1': number
  '2': number
  '3': number
  '4': number
  '5': number
}

interface summaryRecent_activityType {
  last_review_date: string
  reviews_this_month: number
}

interface Filters_appliedType {
  rating: number
  ordering: string
}

interface summaryType {
  total_feedbacks: number
  average_rating: number
  most_reviewed_category: string
  total_helpful_votes: number
  rating_distribution: summaryRating_distributionType
  recent_activity: summaryRecent_activityType
}

export interface historyMockDataType {
  count: number
  next: string
  previous: null
  results: historyResultType[]
  summary: summaryType
  filters_applied: Filters_appliedType
}
