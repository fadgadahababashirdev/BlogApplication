import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between text-sm px-5 py-2 shadow-xl fixed w-screen top-0 bg-black text-white'>
        <div ><h1 className='hello-fashion'>Fan Fashion</h1></div>
        <ul className='flex justify-between'>
           <Link to="/"><li className='mx-2 hello-fashion font-sans'>Blog</li></Link>
            <li  className='mx-2 hello-fashion  font-sans'>Fashion</li>
            <li  className='mx-2 hello-fashion  font-sans'>Family</li>
            <li  className='mx-2 hello-fashion  font-sans'>Holiday</li>
            <li  className='mx-2 hello-fashion  font-sans'>Fashion</li>
            <li  className='mx-2 hello-fashion  font-sans'>Life</li>
        </ul>

        <div>
           <Link to="/LoginPage"> <span className='mx-2 hello-fashion  font-sans'>Login</span></Link>
           <Link to="/Register"> <span className='mx-2 hello-fashion  font-sans'>SignUp</span></Link>
        </div>
    </div>
  )
}

export default Navbar


// import React from 'react'
// import {Link} from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <nav className='flex items-center justify-between py-1 w-full px-4 bg-slate-400 text-white top-0 fixed z-10'>
//       <img src="../../public/images/ras.svg" alt="" />

//         <ul className='text-current-500 flex px-10'>
//          <Link to ="/"><li className='m-2 text-gray-50 font-bold-900 text-sm'>Blog</li></Link>
//             <li  className='m-2 text-gray-50 font-bold-900 text-sm'>Fashion</li>
//             <li  className='m-2 text-gray-50 font-bold-900 text-sm'>Music</li>
//             <li  className='m-2 text-gray-50 font-bold-900 text-sm'>Health</li>
//             <li  className='m-2 text-gray-50 font-bold-900 text-sm'>Contact Us</li>
            
//         </ul>

//         <div>SignUp / Login</div>

//     </nav>
//   )
// }

// export default Navbar