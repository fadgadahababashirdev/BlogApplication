import React from 'react'
import {useContext} from 'react'
import { BlogContext } from '../Context/BlogContext'
import { Link } from 'react-router-dom'
const BlogDashboard = () => {
    const {blog} = useContext(BlogContext)
    const blogLength = blog.length;


  return (
    <div className='font-sans'>

        <nav className="bg-blue-500 p-4 text-white fixed w-screen top-0 left-0 ">
          <div className="container mx-auto">
            <Link to="/BlogDashboard"><h1 className="text-2xl font-semibold">Dashboard</h1></Link>
          </div>
       </nav>

      <div className='flex mt-20'>

                <aside className='w-32 bg-blue-500 mt-3 h-screen'>
                    <Link to ="/AddBlog" > <div className='text-white  mx-3 pt-3'>Create Blog</div></Link>
                    <Link to ="/BlogTable">  <div className='text-white  mx-3 pt-3'>Edit Blog</div></Link>

                </aside>

                                <div className='flex justify-between mt-12'>

                                            <div className='container m-auto rounded box mt-3 mx-5 bg-white shadow text-center w-60'>
                                                <h1 className='text-blue-500'>Users</h1>
                                                <p className='text-yellow-500'>32</p>
                                            </div>

                                           <Link to="/BlogTable">
                                                <div className='container m-auto rounded box mt-3 mx-5 bg-white shadow text-center w-60'>
                                                        <h1 className='text-blue-500'>Blogs</h1>
                                                        <p className='text-yellow-500'>{blogLength}</p>
                                                    </div>
                                           </Link>

                                            <div className='container m-auto rounded box mt-3 mx-5 bg-white shadow text-center w-60'>
                                                <h1 className='text-blue-500'> New Blogs</h1>
                                                <p className='text-yellow-500'>23</p>
                                            </div>
                                </div>

                                <div className="mt-8">
                                <table className="border  bg-white"style={{width:'850px'}}>
                                <thead>
                                    <tr>
                                    
                                    <th className="py-2 px-4 border-b">Blog Image</th>
                                    <th className="py-2 px-4 border-b">Blog Description</th>
                                    <th className="py-2 px-4 border-b">Blog Title</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                

                                    {blog.map((singleBlog, index)=>{
                                        return (
                                            <tr key={index}>
                                                
                                                    <td className="py-2 px-4 mr-2 border-b text-center text-sm font-thin" style={{ width: '150px' }}>{singleBlog.image}</td>

                                                    <td className="py-2 px-4 border-b text-center text-sm font-thin"style={{width:'54px'}}>{singleBlog.description}</td>
                                                    <td className="py-2 px-4 border-b text-center font-thin">{singleBlog.title}</td>
                                                    <td className="py-2 px-4 border-b  text-center font-thin">
                                                    <button className="bg-blue-500 text-white py-1 px-2 rounded-full mr-2 font-thin w-20 m-2">Edit</button>
                                                    <button className="bg-red-500 text-white py-1 px-2 rounded-full font-thin w-20 m-2"
                                                    onClick ={()=>handleDelete(singleBlog._id)}
                                                    >Delete</button>
                                                    </td>
                                            </tr>
                                        )
                                    })}
                                


                                    {/* Add more rows as needed */}
                                </tbody>
                                </table>
  </div>
       </div>

  </div>
  )
}

export default BlogDashboard