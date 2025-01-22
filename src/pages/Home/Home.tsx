import Brands from '../../components/Brand'
import Comments from '../../components/Comment'
import Dress from '../../components/Casual'
import Hero from '../../components/Hero'
import Products from '../../components/Product'

const Home = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <Products/>
      <Dress/>
      <Comments/>
    </>
  )
}

export default Home