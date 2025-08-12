import { getTasteTestProfile } from '@/api/tasteTest'
import { tokenStorage } from '@/utils/tokenStorage'
import { useQuery } from '@tanstack/react-query'

export const useTasteTestProfile = () => {
  const accessToken = tokenStorage.getAccessToken()

  return useQuery({
    queryKey: ['tasteTestProfile', accessToken],
    queryFn: getTasteTestProfile,
    enabled: !!accessToken,
  })
}
