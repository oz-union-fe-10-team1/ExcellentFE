import Header from '@/components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/common/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
