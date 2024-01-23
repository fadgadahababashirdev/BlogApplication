import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {useState} from 'react'
import Navbar from './Navbar';
import { Axios } from 'axios';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (validation()) {
      // Use your API endpoint for user login
      fetch("https://blogapi-se2j.onrender.com//api/v1/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        console.log(res)
        .then((data) => {
          if (data.success) {
            // Successful login, navigate to the blog dashboard
            navigate('/blogDashboard');
          } else {
            toast.error('Login failed. Please check your credentials.');
          }
        })
        .catch((err) => {
          toast.error('Login failed due to: ' + err.message);
        });
    }
  };

  
  

  // form validation 

  const validation =  ()=>{
    let result=true;

    if(email === '' || email === null){
      result = false;
      toast.warning('please enter Your email')
    }
    if(password === ''|| password === null){
      result = false;
      toast.warning('please enter Your  password')
    }
     return result
   
  }
  return (
    
    <div>
      <ToastContainer/>
      {/* <Navbar /> */}
      <div className="Login flex justify-between text-white pt-12">
        <div className="leading-tight py-10 px-5">
          <h1 className="font-mono text-6xl text ">Welcome At Fashionova</h1>
          <p className="text-xl font-mono ">
            It is a long established fact that a reader will be distracted by
            the readable content of apage when looking at it's layout.The point
            of using This fashion blog
          </p>
        </div>
        <form className="leading-tight rounded my-10 mx-10 py-3 px-5 font-sans w-60 colorado bg-black"
        onSubmit ={handleLogin}
        >
          <h1 className="Sign bg-red-300  p-1 w-12 rounded-sm">Sign in</h1>


          <div className="my-3">
            <label htmlFor="Email">Email Adress</label>
            <br />
            <input type="text" id="Email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='px-3 text-gray-500'
            
            />
          </div>

          <div className="my-3">
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" 
            value={password}
            onChange = {(e)=>setPassword(e.target.value)}
            className='px-3 text-gray-500'
            />
          </div>

          <input type="checkbox" className="my-3" />
          <span className="mx-5">Remember Me</span>
          <br />

          <button className="w-20 bg-red-400  rounded p-1">Login</button>
          <br />
          <div className="text-center mt-5">
          
            <span>
              Lost Your password? / or
              <Link to="/Register">
                <span className="text-blue-300">Register</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
