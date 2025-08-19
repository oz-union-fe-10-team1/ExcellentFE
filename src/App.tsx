import Layout from '@/components/layout/Layout'
import MyPageLayout from '@/components/layout/MyPageLayout'
import { RequireAuth } from '@/components/RequireAuth'
import { ROUTE_PATHS } from '@/constants/routePaths'
import Login from '@/pages/auth/Login'
import SocialCallback from '@/pages/auth/SocialCallback'
import Cart from '@/pages/Cart'
import Home from '@/pages/Index'
import AccountEdit from '@/pages/my-page/AccountEdit'
import OrderHistory from '@/pages/my-page/OrderHistory'
import TasteProfile from '@/pages/my-page/TasteProfile'
import TastingHistory from '@/pages/my-page/TastingHistory'
import NotFound from '@/pages/NotFound'
import Search from '@/pages/Search'
import TestMain from '@/pages/tasteTest'
import { useAuthStore } from '@/stores/authStore'
import { setOnUnauthorized } from '@/utils/axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Package from '@/pages/Package'
import Feedback from '@/pages/Feedback'
import Detail from '@/pages/Detail'
import ScrollToTop from '@/components/common/ScrollToTop'
import AdultCallback from '@/pages/auth/AdultCallback'
import AdultAuthBefore from '@/pages/auth/AdultAuthBefore'

const queryClient = new QueryClient()

function App() {
  const navigate = useNavigate()
  const { initializeAuth } = useAuthStore()

  useEffect(() => {
    setOnUnauthorized(() => {
      navigate(ROUTE_PATHS.LOGIN)
    })
  }, [navigate])

  useEffect(() => {
    initializeAuth()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/auth/:provider/callback" element={<SocialCallback />} />
        <Route path="/auth/adult-before" element={<AdultAuthBefore />} />
        <Route
          path="/auth/adult-verification/callback"
          element={<AdultCallback />}
        />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="package" element={<Package />} />
          <Route path="test" element={<TestMain />} />
          <Route path="search" element={<Search />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="product/:id" element={<Detail />} />
          <Route path="package/:id" element={<Detail />} />
          <Route
            path="cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />

          {/* 마이페이지 라우팅 */}
          <Route
            path="mypage"
            element={
              <RequireAuth>
                <MyPageLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="taste-profile" replace />} />
            <Route path="taste-profile" element={<TasteProfile />} />
            <Route path="account-edit" element={<AccountEdit />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="tasting-history" element={<TastingHistory />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
