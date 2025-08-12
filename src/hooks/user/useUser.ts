import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/api/user'
import { tokenStorage } from '@/utils/tokenStorage'

export const useUser = () => {
  const accessToken = tokenStorage.getAccessToken()

  return useQuery({
    queryKey: ['user', accessToken],
    queryFn: getUser,
    enabled: !!accessToken,
  })
}
