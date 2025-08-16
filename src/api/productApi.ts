import { axiosInstance } from '@/utils/axios'
import { API_PATHS } from '@/constants/apiPaths'
import type { ProductDetail } from '@/types/product'

export const mainProductApi = {
  MonthProducts: async () => {
    const response = await axiosInstance.get(API_PATHS.PRODUCTS.MONTH)
    return response.data
  },
  PopularProducts: async () => {
    const response = await axiosInstance.get(API_PATHS.PRODUCTS.POPULAR)
    return response.data
  },
  RecommendedProducts: async () => {
    const response = await axiosInstance.get(API_PATHS.PRODUCTS.RECOMMENDED)
    return response.data
  },
  FeaturedPackages: async () => {
    const response = await axiosInstance.get(API_PATHS.PRODUCTS.FEATURED)
    return response.data
  },
  AwardPackages: async () => {
    const response = await axiosInstance.get(API_PATHS.PRODUCTS.AWARD)
    return response.data
  },
  MakgeolliPackages: async () => {
    const response = await axiosInstance.get(API_PATHS.PRODUCTS.MAKGEOLLI)
    return response.data
  },
  RegionalPackages: async () => {
    const response = await axiosInstance.get(API_PATHS.PRODUCTS.REGIONAL)
    return response.data
  },
}

export const getProductDetail = async (id: string): Promise<ProductDetail> => {
  const response = await axiosInstance.get(API_PATHS.PRODUCTS.DETAIL(id))
  return response.data
}
