import Layout from '@/components/layout/Layout'
import HomePage from '@/pages'
import Login from '@/pages/Login'
import SearchPage from '@/pages/SearchPage'
import TestMain from '@/pages/tasteTest'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import MyPageLayout from '@/components/layout/MyPageLayout'
import AccountEdit from '@/pages/my-page/AccountEdit'
import OrderHistory from '@/pages/my-page/OrderHistory'
import TasteProfile from '@/pages/my-page/TasteProfile'
import TastingHistory from '@/pages/my-page/TastingHistory'
import NotFound from '@/pages/NotFound'
import Cart from '@/pages/Cart'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<Layout />}>
            {/* 각자 페이지 만들어지면 등록 */}
            {/* 메인 페이지 라우팅 */}
            <Route path="/" element={<HomePage />} />
            <Route path="package" element={<HomePage />} />
            <Route path="test" element={<TestMain />} />
            <Route path="search" element={<SearchPage />} />
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
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
