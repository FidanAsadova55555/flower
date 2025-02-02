import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import { SkeletonTheme } from 'react-loading-skeleton';
const Layout = ({children}) => {
  return (
    <div>

<SkeletonTheme
                duration={1}
                baseColor="#e9e9e9" highlightColor="#d7d7d7">        <Header/>
<main>{children}</main> 
<Footer />
        </SkeletonTheme>
    </div> )
}

export default Layout