
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

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
          <Card to="/features/marriagecall" title="Marriage Call" heading="Uncover your love story:" info="Discover if the stars align for love or tradition with our numerology prediction." />
          <Card to="/features/sunshinharmony" title="Sunshine Harmony" heading="Sun Sign Compatibility Check:" info="See if your sun signs are destined to shine together." />
          <Card to="/features/sunsign" title="Sun Sign" heading="Cosmic Connections:" info="Explore the harmony between your sun signs." />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default Features
