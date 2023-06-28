import Link from 'next/link'
import React from 'react'
import { HiOutlineMail, HiChatAlt2, HiUserGroup } from "react-icons/hi";

const ContactCard = () => {
  return (
    <div className=' p-8 grid w-[100%] sm:w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className=' border border-slate-200 shadow-lg flex flex-col items-center p-4'>
            <i className=' m-1'> <HiOutlineMail  size={30} color='#E50914'/> </i>
            <h2 className='uppercase text-md font-bold'> Email </h2>
            <p className=' text-sm text-gray-500'> Monday to Friday </p>
            <p className=' text-sm text-gray-500'> Response time 72 hours </p>
            <Link className=' mt-4 hover:text-nred transition-all ease-in-out duration-300' href="/"> Send Email</Link>
        </div>

        <div className=' border border-slate-200 shadow-lg flex flex-col items-center p-4'>
            <i className=' m-1'><HiChatAlt2 size={30} color='#E50914'/></i>
            <h2 className='uppercase text-md font-bold'> Live Chat </h2>
            <p className=' text-sm text-gray-500'> Weekdays: 9AM - 6PM ET </p>
            <p className=' text-sm text-gray-500'> Weekends: 9AM - 5PM ET </p>
            <Link className=' mt-4 hover:text-nred transition-all ease-in-out duration-300' href="/"> Chat Now </Link>
        </div>

        <div className=' border border-slate-200 shadow-lg flex flex-col items-center p-4'>
            <i className=' m-1'><HiUserGroup size={30} color='#E50914'/></i>
            <h2 className='uppercase text-md font-bold'> Community Forum </h2>
            <p className=' text-sm text-gray-500'> Monday to Friday </p>
            <p className=' text-sm text-gray-500'> Response time 72 hours </p>
            <Link className=' mt-4 hover:text-nred transition-all ease-in-out duration-300' href="/"> Ask The Community </Link>
        </div>
    </div>
  )
}

export default ContactCard