'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import Image from 'next/image';

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <nav>
        <div className=' hidden sm:block'>
            <div className=' flex list-none gap-10 mr-10'>
                <li className=' text-white hover:text-nred'>
                    <Link href="/">
                        Home
                    </Link>
                </li>

                <li className=' text-white hover:text-nred'>
                    <Link href="/about">
                        About
                    </Link>
                </li>

                <li className=' text-white hover:text-nred'>
                    <Link href="/movie">
                        Movie
                    </Link>
                </li>

                <li className=' text-white hover:text-nred'>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
         </div>
        </div>

        <div className=' block sm:hidden mr-6 h-full'>

            <button className=' z-40' onClick={() => setOpen(true)}>
                <i> <RxHamburgerMenu size={30} color='#E50914' /> </i>
            </button>

           
            <div className={ open === true ? 'transition-all ease-in-out duration-500 transform -translate-x-0 flex list-none flex-col justify-center items-center bg-black absolute top-0 w-full h-full gap-y-10 z-10 right-0 left-0':
                'transition-all ease-in-out duration-500 transform -translate-x-full flex list-none flex-col justify-center items-center bg-black absolute top-0 w-full h-full gap-y-10 z-10 right-0 left-0'}>

                <Link href="/"> 
                    <Image src="/Netflix.png" alt="logo image" width={100} height={30}/>
                </Link>
                
                <button className=' absolute top-0 right-0 m-10' onClick={() => setOpen(false)}>
                    <i> <MdOutlineClose size={40} color='#E50914' /> </i>
                </button>

                <li className=' text-white text-4xl hover:text-nred'>
                    <Link href="/">
                        <button onClick={() => setOpen(false)}>
                            Home
                        </button>
                    </Link>
                </li>

                <li className=' text-white text-4xl hover:text-nred'>
                    <Link href="/about">
                        <button onClick={() => setOpen(false)}>
                        About
                        </button>
                    </Link>
                </li>

                <li className=' text-white text-4xl hover:text-nred'>
                    <Link href="/movie">
                        <button onClick={() => setOpen(false)}>
                        Movie
                        </button>
                    </Link>
                </li>

                <li className=' text-white text-4xl hover:text-nred'>
                    <Link href="/contact">
                        <button onClick={() => setOpen(false)}>
                        Contact
                        </button>
                    </Link>
                </li>
            </div> 

        </div>
    </nav>
  )
}

export default Navbar