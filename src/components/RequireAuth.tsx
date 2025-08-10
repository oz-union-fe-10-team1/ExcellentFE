import { ROUTE_PATHS } from '@/constants/routePaths'
import { useAuthStore } from '@/stores/authStore'
import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthStore()
  const location = useLocation()

  if (!isLoggedIn) {
    const redirect = encodeURIComponent(location.pathname + location.search)

    return <Navigate to={`${ROUTE_PATHS.LOGIN}?redirect=${redirect}`} replace />
  }

  return children
}
