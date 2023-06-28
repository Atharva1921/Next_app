import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieCard = (element) => {

    const {id, type, title, synopsis} = element.jawSummary

  return (
    <div className=' shadow-lg border border-slate-400 rounded-lg flex flex-col items-center hover:scale-110 transition-all ease-in-out duration-300'>
        <div className=' flex justify-center items-center w-[100%]'>
            <Image className=' w-[100%] rounded-t-lg' src={element.jawSummary.backgroundImage.url} alt='series/movie_image' width={250} height={200}/>
        </div>

        <div className=' flex flex-col justify-between items-center w-[100%] h-[70%] m-2'>
            <h2 className=' w-[70%] uppercase text-lg font-black flex justify-center items-center'>{title}</h2>

            <p className=' my-2 w-[70%] mx-10 text-sm line-clamp-4'>{synopsis}</p>

            <Link href={`/movie/${id}`} className=' w-[100%] p-2'>
                <button className=' hover:bg-nred hover:text-white transition-all ease-in-out duration-300 text-white bg-black rounded-full w-[100%] h-10 flex justify-center items-center'>
                    Read More
                </button>
            </Link>
        </div>
    </div>
  )
}

export default MovieCard