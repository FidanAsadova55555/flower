import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Layout from './layout/layout';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
<div className='font-poppins'>
<Layout>
<Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
</Layout>
</div>  )
}

export default App