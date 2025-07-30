interface TasteProfileType {
  sweetness_level: number
  acidity_level: number
  body_level: number
  carbonation_level: number
  bitterness_level: number
  aroma_level: number
}

interface TasteProfileMockDataType {
  user_id: number
  username: string
  taste_profile: TasteProfileType
  updated_at: string
}

const TasteProfileMockData: TasteProfileMockDataType = {
  user_id: 1,
  username: 'example_user',
  taste_profile: {
    sweetness_level: 3.5,
    acidity_level: 2.0,
    body_level: 4.5,
    carbonation_level: 1.0,
    bitterness_level: 2.5,
    aroma_level: 4.0,
  },
  updated_at: '2025-07-22T13:00:00Z',
}

export default TasteProfileMockData
