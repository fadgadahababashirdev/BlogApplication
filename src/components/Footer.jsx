import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const Dat = new Date()
  const realDate = Dat.getFullYear()
  return (
    <div className='bg-black flex justify-between items-center text-3 text-white px-2 py-32 '>
        <h1 className='font-sans px-10 text-sm '>&copy; Copyright by lorem {realDate}</h1>
        {/* <Navbar className='bg-red-500'/> */}
        <div className='flex items-center px-5 justify-evenly '>
          <FaFacebookF/>
          <BsTwitterX />
          <FaLinkedinIn />
          </div>
    </div>
  )
}

export default Footer