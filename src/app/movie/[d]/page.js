import axios from 'axios';
import Image from 'next/image';
import React from 'react'

const Page = async ({params}) => {

  const options = {
    method: 'GET',
    url: 'https://netflix54.p.rapidapi.com/title/details/',
    params: {
      ids: `${params.d}`,
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'd46180781bmsh17df882b9f87c60p16447djsn1b78bb4c7fa6',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

    const response = await axios.request(options);
    const mainData = response.data[0].details


  return (
    <>
      <div className=' flex justify-center items-center flex-col w-[100%]'>
        <h2 className=' text-black text-2xl font-bold m-6'>   Netflix \ <span className=' text-nred text-2xl font-bold '> {mainData.type} </span> </h2>
          <div className='w-[100%] px-8'>
            <div className=' pb-4'>
              <Image src={mainData.backgroundImage.url} alt={mainData.title} width={600} height={300} />
            </div>
            <div>
              <h1 className='uppercase text-4xl font-black' >{mainData.title}</h1>
              <p className='text-md '>{mainData.synopsis}</p>
            </div>
          </div>
      </div>

    </>
  )
}

export default Page