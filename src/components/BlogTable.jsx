import React from 'react'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import { BlogContext } from './Context/BlogContext'
import axios from 'axios'
const BlogTable = () => {


    const{blog,setBlog} = useContext(BlogContext)

    // handleDelete function 
    const handleDelete =async (id) => {
        
        try{
            confirm("are you sure you want to delete this", "okay")
            const response = await axios.delete(`https://blogapi-se2j.onrender.com/api/v1/blogs/${id}`)
            alert('blog was deleted successfully')
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }


  return (
    <div>

<div className='font-sans bg-gray-100 p-8'>

{/* Main Content */}
<div className="container mx-auto">
  <nav className="bg-blue-500 p-4 text-white">
    <div className="container mx-auto">
     <Link to="/BlogDashboard"> <h1 className="text-2xl font-semibold">Dashboard</h1></Link>
    </div>
  </nav>


  <div className="mt-8">
    <table className=" min-w-full border bg-white">
      <thead>
        <tr>
         
      
          <th className="py-2 px-4 border-b">Blog Description</th>
          <th className="py-2 px-4 border-b">Blog Title</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
      

        {blog.map((singleBlog, index)=>{
            return (
                <tr key={index}>
                    
                        
                        <td className="py-2 px-4 border-b text-center">{singleBlog.description}</td>
                        <td className="py-2 px-4 border-b text-center">{singleBlog.title}</td>
                        <td className="py-2 px-4 border-b  text-center">
                        <button className="bg-blue-500 text-white py-1 px-2 rounded-full mr-2">Edit</button>
                        <button className="bg-red-500 text-white py-1 px-2 rounded-full"
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
    </div>
  )
}

export default BlogTable