import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './pages/Layout'
import HomePage from './pages'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* 각자 페이지 만들어지면 등록 */}
            <Route path="/" element={<HomePage />} />
            <Route path="package" element={<HomePage />} />
            <Route path="test" element={<HomePage />} />
            <Route path="search" element={<HomePage />} />
            <Route path="feedback" element={<HomePage />} />
            <Route path="mypage/profile" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
