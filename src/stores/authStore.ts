import { tokenStorage } from '@/utils/tokenStorage'
import { create } from 'zustand'

interface AuthState {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
  initializeAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,

  login: () => {
    set({ isLoggedIn: true })
  },

  logout: () => {
    tokenStorage.removeAccessToken()
    tokenStorage.removeRefreshToken()
    set({ isLoggedIn: false })
  },

  initializeAuth: () => {
    const token = tokenStorage.getAccessToken()
    set({ isLoggedIn: !!token })
  },
}))
