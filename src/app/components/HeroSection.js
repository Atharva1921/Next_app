import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = ({title, imageUrl}) => {
  return (
    <main className='h-[100vh]'>
    <div className=' p-10 flex-col items-center sm:flex-row  flex h-full sm:h-[65%] w-[100%] bg-gradient-to-br from-purple-300 via-blue-400 to-green-400 '>
        <div className='h-[100%]  flex flex-col items-center sm:items-start justify-center'>

          <h1 className=' my-4 w-[70%] mx-10 uppercase text-4xl font-black'>{title}</h1>
          
          <p className=' mx-10 w-[70%]'>
            From award winning dramas to blockbuster action movies we got you covered. Brouse our seletion of the latest and greatest movies and find your new favourite today.
          </p>
          <Link href='/movie' className=' self-start mx-10 sm:mx-0'>
            <button className=' hover:bg-white hover:text-black transition-all ease-in-out duration-300 mx-10 my-6 text-white bg-black rounded-full w-40 h-10 flex justify-center items-center'>
              Explore Movies
            </button>
          </Link>
        </div>

        <div className=' flex items-center p-40 h-[40%] sm:h-full w-[50%] relative'>
          <Image src={imageUrl} alt='home image' fill />
        </div>
      </div>
    </main>
  )
}

export default HeroSection