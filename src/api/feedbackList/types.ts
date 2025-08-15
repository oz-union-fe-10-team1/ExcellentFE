export interface FeedbackResponse {
  count: number
  next: string | null
  previous: string | null
  results: Feedback[]
}

export interface Feedback {
  id: number
  user_id: string
  product: {
    id: string
    name: string
    brewery: {
      id: number
      name: string
    }
    price: number
    main_image_url: string
    alcohol_content: number
    volume_ml: number
  }
  order_item: {
    id: number
    order_id: number
    quantity: number
    purchase_date: string
    unit_price: number
  }
  rating: number
  confidence: number
  comment: string
  days_after_purchase: number
  is_verified_purchase: boolean
  created_at: string
  taste_feedback: {
    sweetness_impact: string
    aroma_impact: string
    body_impact: string
    overall_satisfaction: string
  }
  helpful_count: number
  can_edit: boolean
  can_delete: boolean
}
