export interface Feedback {
  id: number
  user: number | string
  order_item: number | string
  rating: number
  comment: string
  masked_username: string
  product: string
  created_at: string
  sweetness?: string
  acidity?: string
  body?: string
  carbonation?: string
  bitterness?: string
  aroma?: string
  confidence?: number
  selected_tags?: string
  view_count?: number
  last_viewed_at?: string
  updated_at?: string
  main_image_url?: string
}

export type FeedbackResponse = Feedback[]
