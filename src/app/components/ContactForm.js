'use client'
import Link from 'next/link'

const ContactForm = () => {




  const handleSubmit = () => {

  };

  return (
    <form action={handleSubmit} className=' w-[90%] sm:w-[70%] md:w-[50%] shadow-lg border border-slate-300 p-4'>
  
      <div className=' flex flex-col m-3'>
        <label className=' text-md'>Enter your name:</label>
        <input className=' rounded-md text-sm h-10 p-2 border border-slate-300' type='text' name='username' id='username' 
        placeholder='Name'/>
      </div>

      <div className=' flex flex-col m-3'>
        <label className=' text-md'>Enter your Email:</label>
        <input className=' rounded-md text-sm h-10 p-2 border border-slate-300' type='text' name='username' id='username' 
        placeholder='Email'/>
      </div>

      <div className=' flex flex-col m-3'>
        <label className=' text-md'>Enter your Number:</label>
        <input className=' rounded-md text-sm h-10 p-2 border border-slate-300' type='number' name='username' id='username' 
        placeholder='Number'/>
      </div>

      <div className=' flex flex-col m-3'>
        <label className=' text-md'>Enter Message:</label>
        <input className=' rounded-md text-sm h-32 p-2 border border-slate-300' type='text' name='username' id='username' 
        placeholder='Message'/>
      </div>

      <Link href='/' className=' w-[100%] flex justify-start ml-3'>
        <button className=' text-sm hover:bg-nred hover:text-white transition-all ease-in-out duration-300 text-white
         bg-black rounded-full w-[45%] sm:w-[40%] h-10 flex justify-center items-center mb-4 '>
          Send Message
        </button>
      </Link>
   
    </form>
  )
}

export default ContactForm