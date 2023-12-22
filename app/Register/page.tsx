import Register from '@/Components/RegisterForm/Register'
import Image from 'next/image'
import React from 'react'



const page = () => {
  return (
    <div className='flex items-center py-16'>
        <div className='cursor-pointer w-full '>
          
            <Image src="login.png" alt=""   priority />
        </div>
        <div className='w-full'>
            <Register/>
        </div>
      
    </div>
  )
}

export default page
