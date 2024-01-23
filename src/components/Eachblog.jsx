import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import {useContext} from 'react'
import { BlogContext } from './Context/BlogContext';

const Eachblog = () => {
     const {blog} = useContext(BlogContext)
    
    const { blogId } = useParams();
    const single = blog.find(blog => blog.id === blogId)
    console.log(single);


  return (
    <div>
        <Navbar/>
        <div className='bg-white shadow-2xl rounded mx-10  flex my-32 '>
            <img src={single.image} alt="" />
            <div >
               <h3 className='mx-3'>{single.title}</h3>
               <p className='mx-3 text-sans text-sm text-gray-500 my-10'>{single.body}</p>
            </div>
            </div>
    </div>
  )
}

export default Eachblog