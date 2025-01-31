import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Layout from './layout/layout';
const App = () => {
  return (
<>
<Layout>
<Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
</Layout>
</>  )
}

export default App