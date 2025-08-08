export interface FeedbackRequest {
  order_item_id: number
  sweetness: number
  acidity: number
  body: number
  confidence: number
  overall_rating: number
  taste_tag: string
  photo_url?: string
  comment?: string
  files: FileList | null
}
