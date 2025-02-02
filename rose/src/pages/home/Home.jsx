import React from 'react'
import SwiperComponent from '../../components/Swiper/swiper'
import FeatureProductSection from '../../components/justproducts'
import Tulip from '../../components/tulip'
const Home = () => {
  return (
    <div>
      <SwiperComponent/>
      <div className='max-w-[1200px] mx-auto'>
        <Tulip/>
      <FeatureProductSection/>
      </div>
    </div>
  )
}

export default Home