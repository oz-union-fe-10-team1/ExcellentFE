import Layout from '@/components/layout/Layout'
import HomePage from '@/pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from '@/pages/Login'
import SearchPage from '@/pages/SearchPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<Layout />}>
            {/* 각자 페이지 만들어지면 등록 */}
            <Route path="/" element={<HomePage />} />
            <Route path="package" element={<HomePage />} />
            <Route path="test" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="feedback" element={<HomePage />} />
            <Route path="mypage" element={<HomePage />} />
            <Route path="cart" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
