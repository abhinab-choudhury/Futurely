
import React from 'react'
import Image from './../assets/Image.png'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <>
      <main className='w-[100vw] h-[100vh]'>
        <section>
          <Navbar />
        </section>
        <section>
          <div className=' laptop:h-[70vh] mobile:h-[25vh] flex mr-auto ml-auto relative rounded-lg border-none w-[80%] mt-20 bg-gradient-to-l from-purple-900 via-pink-400 to-fuchsia-300 shadow'>
            <img src={Image} className='mobile:w-[140px] mobile:h-[140px] mobile:absolute mobile:-left-4  mobile:-bottom-4' alt='Futurely Hero Image' />
            <div className='flex flex-col w-36 gap-3 relative top-[30%] bottom-[30%] -right-2/4'>
              <div className='w-fit text-white font-["Inter"] font-extrabold'>
                Your
                <span className="font-extrabold gradient text-xl italic font-['Antonio'] text-purple-950">playful</span>
                guide to what's next.
              </div>
              <button className='h-[30px] w-[100px] top-[40%] bottom-[30%] -right-2/4 text-sm bg-purple-700 font-bold hover:text-purple-700 hover:bg-white  text-white px-2 py-1 rounded-[10px] leading-none'>Get Started</button>
            </div>
          </div>
        </section>
        <section className='w-fit mt-10'>
          <a className='mx-4'>Linkedin</a>
          <a>Instagram</a>
        </section>
      </main>
    </>
  )
}



export default Home
