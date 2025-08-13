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
