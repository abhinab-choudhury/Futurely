import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <section className='flex laptop:mt-[10%] tablet:mt-[60%] mobile:mt-[50%] mobile:m-20 w-[100vw] justify-center'>
        <div className='w-fit font-extrabold text-3x laptop:p-20 mobile:p-4 mobile:w-fit border-4 border-black mobile:rounded-[10px] laptop:rounded-[20px]'>
          <div className=' desktop:text-[4.2rem] laptop:text-[3.8rem] tablet:text-[3.8rem]'>
            Page Not Found
            <div className='font-normal leading-3 mobile:text-xl mt-6'>
              Oops! Looks like you've gotten lost. The page you're looking for may have been moved or removed.
            </div>
            <div className='font-extralight text-base'>return the <Link to="/" className='hover:underline text-blue-500 font-bold'> home page </Link> </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage
