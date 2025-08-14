import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
