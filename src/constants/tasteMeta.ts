import type { TasteMeta, TasteType } from '@/types/tasteTypes'

// 각 타입에 대한 색상 + 라벨 정의
export const tasteMetaMap: Record<TasteType, TasteMeta> = {
  sweetness_level: { label: '단 맛', color: '#F2544B' },
  acidity_level: { label: '산 미', color: '#99B278' },
  body_level: { label: '바디감', color: '#3C72B4' },
  carbonation_level: { label: '탄산감', color: '#8C6BB1' },
  bitterness_level: { label: '쓴 맛', color: '#F08A5D' },
  aroma_level: { label: '향', color: '#F65A83' },
}
