import Layout from '@/components/layout/Layout'
import MyPageLayout from '@/components/layout/MyPageLayout'
import HomePage from './pages/Index'
import Login from '@/pages/auth/Login'
import SocialCallback from '@/pages/auth/SocialCallback'
import Cart from '@/pages/Cart'
import AccountEdit from '@/pages/my-page/AccountEdit'
import OrderHistory from '@/pages/my-page/OrderHistory'
import TasteProfile from '@/pages/my-page/TasteProfile'
import TastingHistory from '@/pages/my-page/TastingHistory'
import NotFound from '@/pages/NotFound'
import Search from '@/pages/Search'
import TestMain from '@/pages/tasteTest'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { ROUTE_PATHS } from './constants/routePaths'
import { setOnUnauthorized } from './utils/axios'

const queryClient = new QueryClient()

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    setOnUnauthorized(() => {
      navigate(ROUTE_PATHS.LOGIN)
    })
  }, [navigate])

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/auth/:provider/callback" element={<SocialCallback />} />

        <Route element={<Layout />}>
          {/* 각자 페이지 만들어지면 등록 */}
          {/* 메인 페이지 라우팅 */}
          <Route path="/" element={<HomePage />} />
          <Route path="package" element={<HomePage />} />
          <Route path="test" element={<TestMain />} />
          <Route path="search" element={<Search />} />
          <Route path="feedback" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />

          {/* 마이페이지 라우팅 */}
          <Route path="mypage" element={<MyPageLayout />}>
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
