import Container from '@/Components/ui/container'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="bg-white h-screen w-full">
    <Container>
      <div className="px-4 py-10 sm:px-6  lg:px-8 ">
        <div className="text-md font-semibold  text-gray-600 mb-10">
          <span className="pr-4">Home</span>
          <span>/</span>

          <span className="text-black px-4">404 Error
          </span>
        </div>

        <div className='flex items-center justify-center flex-col mt-20 h-full text-black gap-10'>
            <h1 className='text-7xl text-black font-medium'>404 Not Found</h1>
            <span>Your visited page not found. You may go home page.</span>
            
             <Link href="/">
             <button  className='px-4 bg-[#DB4444] py-2 rounded-sm shadow-sm text-white'>Back to home page</button>
             </Link>
           
        </div>
    
    </div>
    </Container>
    </div>
  )
}