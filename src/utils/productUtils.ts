import type { Product } from '@/mocks/handlers/product/mocks/productMockData'
import type { Package } from '@/types/package'
import type { CardBaseProps } from '@/types/cardProps'

export class HomeUtils {
  // Product를 CardBaseProps로 변환
  static productToCard(product: Product): CardBaseProps {
    return {
      id: product.id,
      productType: 'PRODUCT',
      imgSrc: product.main_image_url,
      imgAlt: product.name,
      title: product.name,
      subtitle: product.short_description,
      price: product.price,
    }
  }

  // Package를 CardBaseProps로 변환
  static packageToCard(pkg: Package): CardBaseProps {
    return {
      id: pkg.id,
      productType: 'PACKAGE',
      imgSrc: pkg.main_image,
      imgAlt: pkg.name,
      title: pkg.name,
      subtitle: pkg.short_description,
      price: pkg.final_price,
    }
  }

  // 이달의 상품 필터링 및 변환
  static getMonthlyProducts(products: Product[]): CardBaseProps[] {
    return products
      .filter((product) => product.is_featured)
      .map(this.productToCard)
  }

  // 인기 패키지 변환
  static getPopularPackages(packages: Package[]): CardBaseProps[] {
    return packages.map(this.packageToCard)
  }

  // 추천 상품 생성 및 변환 (기존 로직 유지)
  static getRecommendedProducts(products: Product[]): CardBaseProps[] {
    const extendedProducts = [...products, ...products.slice(0, 5)]
    return extendedProducts.map(this.productToCard)
  }
}
