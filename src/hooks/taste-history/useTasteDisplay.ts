export const useTasteDisplay = (tasteData: {
  sweetness?: string
  acidity?: string
  body?: string
  carbonation?: string
  aroma?: string
  bitterness?: string
  confidence?: string
}) => {
  const tasteInfo = {
    단맛: tasteData.sweetness + '점',
    신맛: tasteData.acidity + '점',
    바디감: tasteData.body + '점',
    탄산감: tasteData.carbonation + '점',
    향: tasteData.aroma + '점',
    쓴맛: tasteData.bitterness + '점',
  }

  const tasteInfoArray = Object.entries(tasteInfo)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key} ${value}`)

  const tasteDisplay = tasteInfoArray.join(', ')
  const confidenceDisplay = tasteData.confidence
    ? ` (신뢰도 ${tasteData.confidence}%)`
    : ''

  return {
    tasteDisplay,
    confidenceDisplay,
    fullTasteDisplay: tasteDisplay + confidenceDisplay,
  }
}
