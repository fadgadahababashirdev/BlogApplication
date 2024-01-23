import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
// import {useState,useRef,useEffect} from 'react'
const Register = () => {
const schema = yup.object().shape({
    email:yup.string().email("Email is required").required(),
    username:yup.string().required(),
    telephone:yup.number().required().positive().min(10).typeError("That does not look like a number").integer(),
    password:yup.string().required().min(6).max(30),
    confirmpassword:yup.string().oneOf([yup.ref('password'),null]).required()



})

const {register,handleSubmit,formState : {errors}} = useForm({
    resolver:yupResolver
})
const submit = (data)=>{  async()=>{
        const formData  = new FormData();
        formData.append('email',data.email);
        formData.append('username',data.username);
        formData.append('telephone',data.telephone);
        formData.append('password',data.password);
         try {
            const url = "https://blogapi-se2j.onrender.com/api/v1/users"
            const res = await axios.post(url, formData);
            console.log(res)

            
        } catch (error) {
            console.log(error)
        }
    }
}
  return (
    <div>
        <Navbar/>
        <ToastContainer/>
        <div className = "Login flex justify-between text-white py-12">
        <div className='leading-tight py-12 px-5'>
            <h1 className='font-mono text-6xl text '>Welcome At Fashionova</h1>
            <p className="text-xl font-mono ">It is a long established fact that  a reader will be distracted by
                the readable  content of apage when looking at it's layout.The point of using This fashion blog
              
            </p>
        </div>
        <form className='leading-tight rounded my-5 mx-10 py-3 px-5 font-sans w-60 colorado bg-black text-red h-96'
        onSubmit ={handleSubmit(submit)}
        >
            <h1 className='Sign bg-red-300  p-1 w-14 rounded-sm'>
                Register
            </h1>
           <div className='my-3'> 

                <label htmlFor="Email">Email Adress</label><br/>
                <input type="email"
                    placeholder='Email Address'
                    {...register("email")}
                    className='pl-3 text-black'

               
                />
            </div>

            <div className='my-3'> 

                <label htmlFor="Username">Username</label><br/>
                <input type="text" 
                    placeholder='Username'
                    {...register("username")}
                    className='pl-3 text-black'
              
                />
           </div>
           <div className='my-3'> 

                <label htmlFor="Tel">Telephone</label><br/>
                <input type="Tel" id="Tel" 
                    placeholder='Phone Number'
                    {...register("tel")}
                    className='pl-3 text-black'
              
                />
          </div>

           <div className='my-3'>
                    <label htmlFor="password">Password</label><br/>
                    <input type="password"
                        placeholder='Password'
                        {...register("password")}
                        className='pl-3 text-black'
                   
                     />
           </div>
           <div className='my-3'>
                    <label htmlFor="Confirm password">Confirm password</label><br/>
                    <input type="password" 
                        placeholder='Confirm password'
                        {...register("confirmpassword")}
                        className='pl-3 text-black'
                    
                     />
           </div>
          

            <button className='w-20 bg-red-400  rounded p-1'>Sign Up</button><br/>
           <div className='text-center mt-5'>  <span>Already with an account ?<Link to="/LoginPage"><span className='text-blue-300'>Login</span></Link></span></div>

            <p className='font-serif mt-7 p-2 '>By clicking "Register " You agree to our tems of service and Policy !</p>
        </form>
    </div>
    </div>
  )
}

export default Register