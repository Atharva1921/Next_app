import React from 'react'
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Movie = async () => {



  const options = {
    method: 'GET',
    url: process.env.RAPID_KEY,
    params: {
      query: 'stranger',
      offset: '0',
      limit_titles: '10',
      limit_suggestions: '20',
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'd46180781bmsh17df882b9f87c60p16447djsn1b78bb4c7fa6',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

 
  const response = await axios.request(options);
  const mainData = (response.data.titles);
 


  return (
    <>
      <section className='h-full'>
        <div className=' flex justify-center items-center flex-col'>
          
        <h1 className='uppercase text-4xl font-black m-8'> series & movies </h1>

          <div className=' m-10 w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-16 gap-12'>
            {
              mainData.map((element) => {
                return <MovieCard key={element.id} {...element} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie