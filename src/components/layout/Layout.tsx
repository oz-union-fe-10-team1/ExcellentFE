import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto w-full pt-[90px]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
