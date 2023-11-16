import React from 'react'
import Image from 'next/image'
import Register from '@/Components/RegisterForm/Register'

const page = () => {
  return (
    <div className='flex items-center py-14 '>
        <div className='cursor-pointer w-full h-full'>
          
            <img src="login.png" alt="" />
        </div>
        <div className='w-full'>
            <Register/>
        </div>
      
    </div>
  )
}

export default page
