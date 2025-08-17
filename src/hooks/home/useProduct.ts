import { useMutation, useQuery } from '@tanstack/react-query'
import { mainProductApi, getProductDetail, cartApi } from '@/api/productApi'
import type { ProductDetail } from '@/types/product'
import type { ProductResponse } from '@/types/home'

export const useMonthProducts = () => {
  return useQuery<ProductResponse>({
    queryKey: ['month-products'],
    queryFn: mainProductApi.MonthProducts,
    staleTime: 5 * 60 * 1000,
  })
}

export const usePopularProducts = () => {
  return useQuery<ProductResponse>({
    queryKey: ['popular-products'],
    queryFn: mainProductApi.PopularProducts,
    staleTime: 5 * 60 * 1000,
  })
}
export const useRecommendedProducts = () => {
  return useQuery<ProductResponse>({
    queryKey: ['recommended-products'],
    queryFn: mainProductApi.RecommendedProducts,
    staleTime: 5 * 60 * 1000,
  })
}

/* 패키지 페이지 */
export const useFeaturedPackages = () => {
  return useQuery({
    queryKey: ['featured-packages'],
    queryFn: mainProductApi.FeaturedPackages,
    staleTime: 5 * 60 * 1000,
  })
}

export const useAwardPackages = () => {
  return useQuery<ProductResponse>({
    queryKey: ['award-packages'],
    queryFn: mainProductApi.AwardPackages,
    staleTime: 5 * 60 * 1000,
  })
}

export const useMakgeolliPackages = () => {
  return useQuery<ProductResponse>({
    queryKey: ['makgeolli-packages'],
    queryFn: mainProductApi.MakgeolliPackages,
    staleTime: 5 * 60 * 1000,
  })
}

export const useRegionalPackages = () => {
  return useQuery<ProductResponse, Error>({
    queryKey: ['regional-packages'],
    queryFn: mainProductApi.RegionalPackages,
    staleTime: 5 * 60 * 1000,
  })
}

/* 상세페이지 */
export const useProductDetail = (id: string) => {
  return useQuery<ProductDetail, Error>({
    queryKey: ['product-detail', id],
    queryFn: () => getProductDetail(id),
    enabled: !!id, // id가 있을 때만 쿼리 실행
    staleTime: 5 * 60 * 1000,
  })
}

export const useAddCart = () => {
  return useMutation({
    mutationFn: ({
      product_id,
      quantity,
    }: {
      product_id: string
      quantity: number
    }) => cartApi.ADD(product_id, quantity),
  })
}
