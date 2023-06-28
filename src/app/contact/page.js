import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className=' w-[100%] h-full flex flex-col items-center p-6'>
      <h1 className='uppercase text-4xl font-black'>Contact Us</h1>
      <ContactCard/>

      <section className=' w-full flex flex-col items-center'>
        <h2 className='text-2xl p-4 font-black'> We'd love to hear <span className=' text-2xl text-nred font-black'> from you </span> </h2>
        <ContactForm/>
      </section>
    </div>
  )
}

export default Contact