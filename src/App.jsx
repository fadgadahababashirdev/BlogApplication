import React, { useState,useEffect } from 'react'
import "./index.css"
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AddBlog from './components/Forms/AddBlog'
import BlogDashboard from './components/Forms/BlogDashboard'
import Eachblog from './components/Eachblog'
import LoginPage from './components/LoginPage'
import Register from './components/Register'
import { BlogContext } from './components/Context/BlogContext'
import BlogTable from './components/BlogTable'



const App = () => {
  const [blog, setBlog] = useState([]);

  useEffect(()=>{
    const blos = async()=>{
      try {
        const response = await fetch("https://blogapi-se2j.onrender.com/api/v1/blogs")
        const jsonify = await response.json()
        setBlog(jsonify.blogs)
        console.log(jsonify)
      } catch (error) {
        console.log(error)
      }
    }   
    blos() 

  }, [])
   

  return (
   <>
   <BlogContext.Provider value={{blog,setBlog}}>
                
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/AddBlog" element={<AddBlog/>}></Route>
              <Route path="/BlogDashBoard" element= {<BlogDashboard/>}></Route>
              <Route path ="/:blogId" element={<Eachblog/>}></Route>
              <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
              <Route path="/Register"element={<Register></Register>}></Route>
              <Route path="/BlogTable" element={<BlogTable/>}></Route>
              
              
            </Routes>

   </BlogContext.Provider>
   
   {/* <AddBlog/> */}
   </>
  )
}

export default App