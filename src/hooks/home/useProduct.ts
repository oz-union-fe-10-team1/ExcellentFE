import { useMutation, useQuery } from '@tanstack/react-query'
import { mainProductApi, getProductDetail, cartApi } from '@/api/productApi'
import type { ProductDetail } from '@/types/product'
import type { ProductResponse } from '@/types/home'

export const commonQueryOptions = {
  staleTime: 5 * 60 * 1000,
  gcTime: 10 * 60 * 1000,
  retry: 3,
  refetchOnWindowFocus: false,
}

export const useMonthProducts = () => {
  return useQuery<ProductResponse>({
    queryKey: ['month-products'],
    queryFn: mainProductApi.MonthProducts,
    ...commonQueryOptions,
  })
}

export const usePopularProducts = () => {
  return useQuery<ProductResponse>({
    queryKey: ['popular-products'],
    queryFn: mainProductApi.PopularProducts,
    ...commonQueryOptions,
  })
}
export const useRecommendedProducts = () => {
  return useQuery<ProductResponse>({
    queryKey: ['recommended-products'],
    queryFn: mainProductApi.RecommendedProducts,
    ...commonQueryOptions,
  })
}

/* 패키지 페이지 */
export const useFeaturedPackages = () => {
  return useQuery({
    queryKey: ['featured-packages'],
    queryFn: mainProductApi.FeaturedPackages,
    ...commonQueryOptions,
  })
}

export const useAwardPackages = () => {
  return useQuery<ProductResponse>({
    queryKey: ['award-packages'],
    queryFn: mainProductApi.AwardPackages,
    ...commonQueryOptions,
  })
}

export const useMakgeolliPackages = () => {
  return useQuery<ProductResponse>({
    queryKey: ['makgeolli-packages'],
    queryFn: mainProductApi.MakgeolliPackages,
    ...commonQueryOptions,
  })
}

export const useRegionalPackages = () => {
  return useQuery<ProductResponse, Error>({
    queryKey: ['regional-packages'],
    queryFn: mainProductApi.RegionalPackages,
    ...commonQueryOptions,
  })
}

/* 상세페이지 */
export const useProductDetail = (id: string) => {
  return useQuery<ProductDetail, Error>({
    queryKey: ['product-detail', id],
    queryFn: () => getProductDetail(id),
    enabled: !!id,
    ...commonQueryOptions,
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
