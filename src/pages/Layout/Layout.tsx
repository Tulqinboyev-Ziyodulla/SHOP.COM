import Footer from "../../components/Footer"
import Header from "../../components/Navbar.tsx"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout