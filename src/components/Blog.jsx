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
        <div className="w-1/3">
          <hr className=" bg-black h-1 w-2/3" />
          <h1>Test</h1>
          <h1 className="bg-black text-white h-10 z-10 w-20 text-sm p-1">
            Contact Us
          </h1>
          <div className="flex justify-between mt-3 w-2/3">
            <div>
              <FaYoutube />
              <p className="text-xs text-gray-500 mt-3 ">76859</p>
            </div>
            <div>
              <BsTwitterX />
              <p className="text-xs text-gray-500 mt-3 ">76859</p>
            </div>
            <div>
              <FaLinkedinIn />
              <p className="text-xs text-gray-500 mt-3 ">76859</p>
            </div>
          </div>

          {/* most viewed stories */}

          <div className="w-72 mt-5 container">
            <div>
              <hr className="bg-black h-1 w-2/3 mt-5" />
              <button className="text-white font-sans h-10 w-22 text-xs z-10 bg-black p-1">
                MOST VIEWED
              </button>
            </div>

            <div>
              <div className="w-75 mt-5 flex ">
                <img
                  src="../../public/images/image8.jpg"
                  alt="image one description"
                  className="h-14 w-24 mt-3 font-mono"
                />

                <div className="mx-3 mt-1 ">
                  <h1 className="text-xs  ">
                    Which Locations From Famous do yo
                  </h1>
                  <p className="text-xs font-serif text-gray-400">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="w-75 mt-5 flex ">
                <img
                  src="../../public/images/image6.jpg"
                  alt="image one description"
                  className="h-14 w-24 mt-3 font-mono"
                />

                <div className="mx-3 mt-1 ">
                  <h1 className="text-xs  ">
                    Which Locations From Famous do yo
                  </h1>
                  <p className="text-xs font-serif text-gray-400">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="w-75 mt-5 flex ">
                <img
                  src="../../public/images/imageseven.jpg"
                  alt="image one description"
                  className="h-14 w-24 mt-3 font-mono"
                />

                <div className="mx-3 mt-1 ">
                  <h1 className="text-xs  ">
                    Which Locations From Famous do yo
                  </h1>
                  <p className="text-xs font-serif text-gray-400">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* closure of most viewed */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
