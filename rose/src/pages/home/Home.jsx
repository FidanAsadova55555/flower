import React from 'react'
import SwiperComponent from '../../components/Swiper/swiper'
import FeatureProductSection from '../../components/productsheader/future'
import NewProducts from '../../components/new/newproducts'
import Tulip from '../../components/tulip'
const Home = () => {
  return (
    <div>
      <SwiperComponent/>
      <div className='max-w-[1200px] mx-auto'>
        <Tulip/>
      <FeatureProductSection/>
      <NewProducts/>
      </div>
    </div>
  )
}

export default Home