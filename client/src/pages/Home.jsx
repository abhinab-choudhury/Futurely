
import React from 'react'
import Image from './../assets/Image.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <section className='mt-20'>
          <div className='laptop:flex-row laptop:max-w-[80vw] laptop:mt-auto laptop:mb-auto mobile:flex-col mobile:h-fit mobile:pb-8 flex ml-auto mb-auto mt-auto mr-auto rounded-lg border-none w-[80%] mobile:bg-gradient-to-tl mobile:from-purple-900 mobile:via-pink-400 mobile:to-fuchsia-300 shadow'>
            <img src={Image} className='laptop:flex laptop:ml-[15%] laptop:w-[340px] laptop:h-[340px] mobile:flex mobile:mt-8 mobile:ml-auto mobile:mr-auto mobile:w-[200px] mobile:h-[200px]' alt='Futurely Hero Image' />
            <div className='w-[70%] flex flex-col ml-auto mr-auto mt-5 mb-auto'>
              <div className='laptop:top-[24%] laptop:right-[25%] laptop:absolute'>
                <div className='laptop:text-3xl my-5 mobile:text-sm  w-fit text-white font-["Inter"] font-extrabold'>
                  Your
                  <span className="laptop:text-5xl mx-1 font-extrabold moblie:text-xl gradient italic font-['Antonio'] text-purple-950">playful</span>
                  guide to <br /> what's next.
                </div>
                <Link to='/features' className='laptop:h-[80px] laptop:w-[180px] laptop:text-2xl mobile:h-[50px] w-[120px] bg-purple-700 font-bold hover:text-purple-700 hover:bg-white  text-white px-6 py-3 rounded-[10px] leading-none'>Get Started</Link>
              </div>
            </div>
          </div>
          <div className='mobile:flex-col mobile:h-fit flex ml-auto mb-auto mt-auto mr-auto rounded-lg border-none w-[80%]'>
            <div className='laptop:p-10 mobile:font-sm mobile:flex-col mobile:rounded-md mobile:border-2 border-black shadow font-mono mobile:p-2 mobile:my-3'>
              <div className='my-2'>
                <span className='font-extrabold'>Daily Fortune:</span>
                Discover what the stars have aligned for you today. Will it be a day of triumphs or a time for introspection? Our daily fortune readings will provide you with a personalized message to guide your decisions and elevate your mood.
              </div>
              <div className='my-2'>
                <span className='font-extrabold'>Love Compatibility:</span>
                Curious about the potential spark with someone special? Futurely can analyze compatibility based on zodiac signs or even numerology, offering insights into your connection.
              </div>
              <div className='my-2'>
                <span className='font-extrabold'>Life Event Predictions: </span>
                Have a big event coming up, like a job interview or a first date? Futurely can offer insights into potential outcomes and even provide some helpful tips to prepare you for success.
              </div>
            </div>
          </div>
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}



export default Home
