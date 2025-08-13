import { axiosInstance } from '@/utils/axios'
import { API_PATHS } from '@/constants/apiPaths'
import type {
  Package,
  PackageApiResponse,
  PackageDetail,
} from '@/types/package'

export const fetchPackageDetail = async (
  packageId: number | string
): Promise<PackageDetail> => {
  const response = await axiosInstance.get<PackageDetail>(
    `${API_PATHS.PACKAGES.LIST}${packageId}/`
  )
  return response.data
}

// 전체 패키지 데이터 가져오기 (featured만)
export const fetchPackages = async (): Promise<Package[]> => {
  const response = await axiosInstance.get<PackageApiResponse>(
    API_PATHS.PACKAGES.LIST,
    {
      params: {
        is_featured: 'true',
        page_size: 12,
      },
    }
  )

  const allPackages: Package[] = []
  Object.values(response.data.categories).forEach((category) => {
    if (category) {
      allPackages.push(...category.packages)
    }
  })

  return allPackages
}

// 카테고리별 패키지 데이터 가져오기
export const fetchPackagesByCategory = async (
  category: string
): Promise<Package[]> => {
  const response = await axiosInstance.get<PackageApiResponse>(
    API_PATHS.PACKAGES.LIST,
    {
      params: {
        category: category,
        page_size: 50,
      },
    }
  )

  const categoryData = response.data.categories[category]
  return categoryData ? categoryData.packages : []
}
