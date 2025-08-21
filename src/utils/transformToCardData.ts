import type { CardBaseProps } from '@/types/cardProps'
import type { Product } from '@/types/product'

export const transformToCardData = (products: Product[]): CardBaseProps[] => {
  if (!products) return []
  return products.map((product) => ({
    id: product.id,
    productType: product.product_type === 'package' ? 'PACKAGE' : 'PRODUCT',
    imgSrc: product.main_image_url ?? '',
    imgAlt: `${product.name} 이미지`,
    title: product.name,
    subtitle: product.brewery_name,
    price: product.price,
  }))
}
