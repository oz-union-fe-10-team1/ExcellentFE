import type { UserProfile } from '@/types/user'
import { tokenStorage } from '@/utils/tokenStorage'
import { create } from 'zustand'

interface AuthState {
  isLoggedIn: boolean
  user: UserProfile | null
  login: () => void
  logout: () => void
  initializeAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,

  login: () => {
    set({ isLoggedIn: true })
    // const user = await getUser()
    // try {
    //   set({ user, isLoggedIn: true })
    // } catch (error) {
    //   set({ isLoggedIn: false, user: null })
    // }
  },

  logout: () => {
    tokenStorage.removeAccessToken()
    tokenStorage.removeRefreshToken()
    set({ isLoggedIn: false, user: null })
  },

  initializeAuth: () => {
    const token = tokenStorage.getAccessToken()
    set({ isLoggedIn: !!token })
  },
}))
