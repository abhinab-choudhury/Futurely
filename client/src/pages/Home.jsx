
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
        <section className='mt-20'>
          <div className='mobile:flex-col mobile:h-fit mobile:pb-8 flex ml-auto mb-auto mt-auto mr-auto rounded-lg border-none w-[80%] mobile:bg-gradient-to-tl mobile:from-purple-900 mobile:via-pink-400 mobile:to-fuchsia-300 shadow'>
            <img src={Image} className='mobile:flex mobile:mt-8 mobile:ml-auto mobile:mr-auto mobile:w-[200px] mobile:h-[200px]' alt='Futurely Hero Image' />
            <img />
            <div className='w-[70%] flex flex-col ml-auto mr-auto mt-5 mb-auto'>
              <div className='w-fit text-white font-["Inter"] font-extrabold'>
                Your
                <span className="mx-1 font-extrabold gradient text-xl italic font-['Antonio'] text-purple-950">playful</span>
                guide to what's next.
              </div>
              <button className='h-[30px] mt-2 w-[100px] text-sm bg-purple-700 font-bold hover:text-purple-700 hover:bg-white  text-white px-2 py-1 rounded-[10px] leading-none'>Get Started</button>
            </div>
          </div>
          <div className='mobile:flex-col mobile:h-fit flex ml-auto mb-auto mt-auto mr-auto rounded-lg border-none w-[80%]'>
            <div className='mobile:font-sm mobile:flex-col mobile:rounded-md mobile:border-2 border-black shadow font-mono mobile:p-2 mobile:my-3'>
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

          {/* 
          <div className=' laptop:h-[70vh] mobile:h-[65vh] flex mr-auto ml-auto relative rounded-lg border-none w-[80%] mt-20 bg-gradient-to-l from-purple-900 via-pink-400 to-fuchsia-300 shadow'>
            <img src={Image} className='mobile:w-[140px] mobile:h-[140px] mobile:absolute mobile:-left-4  mobile:-bottom-4' alt='Futurely Hero Image' />
            <div className='flex flex-col w-36 gap-3 relative top-[30%] bottom-[30%] -right-2/4'>
              <div className='w-fit text-white font-["Inter"] font-extrabold'>
                Your
                <span className="font-extrabold gradient text-xl italic font-['Antonio'] text-purple-950">playful</span>
                guide to what's next.
              </div>
              <button className='h-[30px] w-[100px] top-[40%] bottom-[30%] -right-2/4 text-sm bg-purple-700 font-bold hover:text-purple-700 hover:bg-white  text-white px-2 py-1 rounded-[10px] leading-none'>Get Started</button>
            </div>
          </div> */}
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
