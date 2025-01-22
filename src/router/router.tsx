import Cart from '../pages/cart-page/CartPage'
import Detail from '../pages/detail-page/DetailPage'
import Home from '../pages/Home/Home'
import Layout from '../pages/Layout/Layout'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/detail/:id' element={<Detail/>}/>
            </Route>
        </Routes>   
    </>
  )
}

export default Router