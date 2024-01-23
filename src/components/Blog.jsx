import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import {useContext} from 'react'
import { BlogContext } from './Context/BlogContext';

const Blog = () => {
  const {blog} = useContext(BlogContext)

  return (
    <div className="container bg-white-500 mx-auto w-full py-4 px-12">
    <div className="flex flex-wrap -mx-4 kalibara">
      {blog.map((singleBlog) => (
        <div key={singleBlog._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mt-4">
          <img
            src={singleBlog.image}
            alt="image one description"
            className="h-56 w-full object-cover rounded"
          />
          <div className="mt-3">
            <h1 className="text-lg font-bold">{singleBlog.title}</h1>
            <p className="text-sm text-gray-500 mt-2">{singleBlog.body}</p>
            <div className="flex justify-end mt-3">
              <Link to={`${singleBlog.id}`}>
                <button className="bg-blue-300 rounded-sm text-center text-xs p-1">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Blog;
