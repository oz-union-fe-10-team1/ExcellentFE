export interface FeedbackRequest {
  order_item_id: number
  sweetness: number
  acidity: number
  body: number
  carbonation: number
  bitter: number
  aroma: number
  confidence: number
  overall_rating: number
  taste_tag: string[]
  photo_url?: string
  comment?: string
  files: FileList | null
}

export interface Feedback {
  id: number
  order_item: number | string
  rating: number
  sweetness?: string
  acidity?: string
  body?: string
  carbonation?: string
  bitterness?: string
  aroma?: string
  confidence?: number
  comment: string
  selected_tags?: string
  image_url?: string
  product_name: string
  masked_username: string
  has_image?: boolean
  view_count?: number
  created_at: string
  updated_at?: string
}

export type FeedbackResponse = Feedback[]
