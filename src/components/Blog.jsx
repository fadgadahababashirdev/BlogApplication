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
    <div className="container bg-white-500 mx-auto w-full py-4 px-12 ">
      <div className=" flex kalibara">
        <div>
          <div className="w-3/16">
            <hr className="bg-black h-1 w-2/3" />
            <span className="bg-black text-white text-3xl">BLOG</span>
            <div>
              {blog.map((singleBlog) => {
                return (
                  <div className="w-75 mt-10 flex " key={singleBlog._id}>
                    <img
                      src={singleBlog.image}
                      alt="image one description"
                      className="h-56 w-56 mt-3 font-mono"
                    />
                    <div className="mx-3  mt-5 ">
                      <h1 className="text-lg  ">{singleBlog.title}</h1>
                      <p className="text-xs text-sans text-gray-500 font-sans mt-5">
                        {singleBlog.body}
                      </p>
                      <div className="flex justify-between">
                        <Link to={`${singleBlog.id}`}>
                          <button className="bg-blue-300  rounded-sm text-center text-xs p-1 mt-10">
                            Explore More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* deleted div  */}
      </div>
    </div>
  );
};

export default Blog;
