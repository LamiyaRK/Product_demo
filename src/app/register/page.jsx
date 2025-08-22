import Image from 'next/image'

import React from 'react'
import RegisterForm from './components/RegisterForm'


export default function RegisterPage() {
  return (
    <div className='max-w-7xl w-5/6 mx-auto my-20 '>
     <h2 className="text-5xl font-bold mb-6 text-center">Register</h2>
     <div className='flex items-center gap-10'>
    <div className='hidden lg:flex lg:w-[50%] my-10'>
         <Image
            src='/assets/log.webp'
            alt='login'
            width={1000}
            height={700}
            className="w-full h-[600px] object-cover object-center"
             />
     </div>
       
             <div className='w-full lg:w-[50%] mx-w-md mx-auto'>
           <RegisterForm></RegisterForm>
             </div>
             </div>
    </div>
  )
}