
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import RightBtn from './../assets/right-btn.png'
import Footer from '../components/Footer'

function Features() {
  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <section className='flex flex-col justify-center relative top-10 h-fit m-8'>
          <h1 className='tablet:text-4xl mobile:text-3xl w-[80vw] font-extrabold laptop:text-7xl flex ml-auto mr-auto justify-center'>Features</h1>
          <hr className='border-4 border-black w-[80vw] ml-auto mr-auto my-4' />
          <Link to='/features/marriagecall' className='hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-[80vw] mobile:block laptop:flex laptop:align-middle justify-between ml-auto mr-auto mt-10 border-black border-4 rounded-[30px] p-5'>
            <div className='laptop:mx-10 laptop:w-fit laptop:my-auto laptop:text-3xl font-bold'>
              Marriage Call
            </div>
            <div className='mobile:my-4'>
              <span className='phone:text-xl laptop:text-2xl font-semibold'>Uncover your love story:</span><br />
              Discover if the stars align for love or tradition with our numerology prediction.
            </div>
            <button className='laptop:mx-10 laptop:my-auto tablet:my-auto'>
              <img src={RightBtn} alt='Button.png' />
            </button>
          </Link>
          <Link to='/features/sunshinharmony' className='hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-[80vw] mobile:block laptop:flex laptop:align-middle justify-between ml-auto mr-auto mt-10 border-black border-4 rounded-[30px] p-5'>
            <div className='laptop:mx-10 laptop:w-fit laptop:my-auto laptop:text-3xl font-bold'>
              Sunshine Harmony
            </div>
            <div className='mobile:my-4'>
              <span className='phone:text-xl laptop:text-2xl font-semibold'>Sun Sign Compatibility Check: </span><br />
              See if your sun signs are destined to shine together.
            </div>
            <button className='laptop:mx-10 laptop:my-auto tablet:my-auto'>
              <img src={RightBtn} alt='Button.png' />
            </button>
          </Link>
          <Link to='/features/sunsign' className='hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-[80vw] mobile:block laptop:flex laptop:align-middle justify-between ml-auto mr-auto mt-10 border-black border-4 rounded-[30px] p-5'>
            <div className='laptop:mx-10 laptop:my-auto laptop:text-3xl font-bold laptop:w-fit'>
              Sun Sign
            </div>
            <div className='mobile:my-4'>
              <span className='phone:text-xl laptop:text-2xl font-semibold'>Cosmic Connections: </span><br />
              Explore the harmony between your sun signs.
            </div>
            <button className='laptop:mx-10 laptop:my-auto tablet:my-auto'>
              <img src={RightBtn} alt='Button.png' />
            </button>
          </Link>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default Features
