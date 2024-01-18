import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { BlogContext } from './Context/BlogContext';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
const BlogTable = () => {
  const { blog, setBlog } = useContext(BlogContext);
  const [model, setModel] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  // handleDelete function
  const handleDelete = async (id) => {
    try {
      confirm('are you sure you want to delete this', 'okay');
      const response = await axios.delete(
        `https://blogapi-se2j.onrender.com/api/v1/blogs/${id}`
      );
      alert('blog was deleted successfully');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  //   handle Form Update

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver,

    defaultValues: {
      title: selected ? selected.title : '',
      description: selected ? selected.description : '',
      image: selected ? selected.image : '',
    },
  });

  console.log(selected);

  React.useEffect(() => {
    reset(selected);
  }, [selected]);

  //    Form schema

  const schema = yup.object().shape({
    image: yup.string(),
    title: yup.string(),
    description: yup.string(),
  });

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();

    formData.append('image', data.image[0]);
    formData.append('title', data.title);
    formData.append('description', data.description);

    try {
      console.log('request started');

      await axios.put(
        `https://blogapi-se2j.onrender.com/api/v1/blogs/${selected._id}`,
        formData
      );
      alert('updated');
      console.log('request completed');
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="relative">
      <div className="font-sans bg-gray-100  relative">
        {/* Main Content */}
        <div className="container mx-auto">
          <nav className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto">
              <Link to="/BlogDashboard">
                {' '}
                <h1 className="text-2xl font-semibold">Dashboard</h1>
              </Link>
            </div>
          </nav>

          {/* <div className="mt-8"> */}
          <div
            className={`bg-gray-500  w-screen  h-full z-10 top-0 left-0 absolute justify-center ${
              model ? 'flex' : 'hidden'
            }`}
          >
            <form
              className="kubo flex bg-slate-300 shadow rounded px-5  mt-20 h-96"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="relative rounded-md shadow-sm">
                <input
                  type="file"
                  id="imageInput"
                  className="form-input py-2 pl-10 pr-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 mt-5"
                  style={{ width: '500px' }}
                  {...register('image')}
                />
                <input
                  type="text"
                  id="Description"
                  className="form-input py-2 pl-10 pr-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 mt-5"
                  {...register('description')}
                />
                <input
                  type="text"
                  className="form-input py-2 pl-10 pr-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 mt-5"
                  {...register('title')}
                />
                <button type='submit' className="text-white rounded bg-blue-400 p-1 text-center text-lg px-5 font-mono mt-2">
                  Edit
                </button>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
              </div>
            </form>
          </div>

          <table className="border w-screen  bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Blog Image</th>
                <th className="py-2 px-4 border-b">Blog Description</th>
                <th className="py-2 px-4 border-b">Blog Title</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blog.map((singleBlog, index) => {
                return (
                  <tr key={index}>
                    <td
                      className="py-2 px-4 mr-2 border-b text-center text-sm font-thin"
                      style={{ width: '150px' }}
                    >
                      {singleBlog.image}
                    </td>

                    <td
                      className="py-2 px-4 border-b text-center text-sm font-thin"
                      style={{ width: '54px' }}
                    >
                      {singleBlog.description}
                    </td>
                    <td className="py-2 px-4 border-b text-center font-thin">
                      {singleBlog.title}
                    </td>
                    <td className="py-2 px-4 border-b  text-center font-thin">
                      <button
                        className="bg-blue-500 text-white py-1 px-2 rounded-full mr-2 font-thin w-20 m-2"
                        onClick={() => {
                          setSelected(singleBlog);
                          setModel(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-2 rounded-full font-thin w-20 m-2"
                        onClick={() => {
                          handleDelete(singleBlog._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default BlogTable;
