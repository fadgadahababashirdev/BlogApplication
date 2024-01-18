import React from 'react';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import axios from 'axios';
import {yupResolver} from '@hookform/resolvers/yup'
import { FaArrowLeft } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddBlog = () => {



  const schema = yup.object().shape({
    title:yup.string().required(),
    description:yup.string().required(),
    image: yup.mixed().required("image is required")

  })
const {register,handleSubmit, formState: { errors }} = useForm({
  resolver:yupResolver(schema)
});

const submit = async (data) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('image', data.image[0]);
  try{
    const url = "https://blogapi-se2j.onrender.com/api/v1/blogs"
    const res = await axios.post(url, formData);
    toast.success('blog was created successfully')
    window.location.reload()
  } catch(err){
    console.log(err);
  }
}


  return (
    <>
    <ToastContainer />
    
      <Link to="/BlogDashboard">
        <div className="mx-5 my-5 bg-black rounded text-white w-9 p-2">
          <FaArrowLeft />
        </div>
      </Link>
      <div className="flex justify-center">
        <form className="bg-white shadow-2xl my-10 w-4/12 d-flex px-3"
        onSubmit={handleSubmit(submit)}
        >
          <h2 className="text-sans text-sm rounded bg-red-300 text-center text-white w-20 my-4">
            Create Blog
          </h2>
          <div>
            <div className="mx-5 my-5">
              <label htmlFor="image">
                <h2 className="text-sm ">Image</h2>
              </label>
              <input
                type="File"
                id="image"
                className="shadow-xxl bg-gray-100 px-2 rounded outline-none text-sm  text-sans w-full "
                {...register("image")}
              
              />
            
            </div>

            <div className="mx-5 my-5">
              <label htmlFor="title">
                <h2 className="text-sm ">Title</h2>
              </label>
              <input
                type="text"
                placeholder="Blog title"
                id="title"
                className="shadow-xxl bg-gray-100 px-2 rounded outline-none text-sm  text-sans w-full "
                {...register("title")}
               
               
              />
            </div>
            <div className="mx-5 my-5">
              <label htmlFor="description">
                <h2 className="text-sm ">Description</h2>
              </label>
              <input
                type="text"
                placeholder="Blog description"
                id="description"
                className="shadow-xxl bg-gray-100 px-2 rounded outline-none text-sm text-sans w-full "
                {...register("description")}
               
              
              />
            </div>

            <button
              type="submit"
              className="bg-blue-300 mx-5 rounded p-1 text-sm font-sans  mb-4"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
