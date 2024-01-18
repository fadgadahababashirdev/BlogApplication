import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const LoginPage = () => {
  return (
  <div>
    <Navbar/>
      <div className = "Login flex justify-between text-white pt-12">
                <div className='leading-tight py-10 px-5'>
                    <h1 className='font-mono text-6xl text '>Welcome At Fashionova</h1>
                    <p className="text-xl font-mono ">It is a long established fact that  a reader will be distracted by
                        the readable  content of apage when looking at it's layout.The point of using This fashion blog
                    
                    </p>
                </div>
                <form className='leading-tight rounded my-10 mx-10 py-3 px-5 font-sans w-60 colorado bg-black text-red'>
                    <h1 className='Sign bg-red-300  p-1 w-12 rounded-sm'>
                        Sign  in
                    </h1>
                            <div className='my-3'> 

                                    <label htmlFor="Email">Email Adress</label><br/>
                                    <input type="text" id="Email"/>
                            </div>

                            <div className='my-3'>
                                        <label htmlFor="password">Password</label><br/>
                                        <input type="password" id="password" />
                            </div>
                    <input type="checkbox" className='my-3'/><span className='mx-5'>Remember Me</span><br/>

                    <button className='w-20 bg-red-400  rounded p-1'>Login</button><br/>
                   <div className='text-center mt-5'> <span>Lost Your password? / or <Link to="/Register"><span className='text-blue-300'>Register</span></Link></span></div>

                   
                </form>
    </div>
  </div>
  )
}

export default LoginPage