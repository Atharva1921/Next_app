import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        <div className=' shadow-lg px-4 p-2 bg-black flex justify-between items-center'>
            <Link href="/"> 
                <Image src="/Netflix.png" alt="logo image" width={100} height={30}/>
            </Link>

            <Navbar/>

        </div>

        
    </header>
  )
}

export default Header