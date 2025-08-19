export interface UserProfile {
  nickname: string
  email: string | null
  role: string
  created_at: string
  notification_agreed: boolean
}
