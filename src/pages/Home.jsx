import React from 'react'

import Navbar from '../components/Navbar'
import Creative from '../components/Creative'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import { BlogContext } from '../components/Context/BlogContext'




const Home = () => {

  return (
    <>
        <Navbar/>
        <Creative/>
        <Blog/>
        <Footer/>
        
      
       

    
    </>
  )
}

export default Home