import React from 'react'
import HeroImg from './../assets/Hero.png'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Herosection() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="w-[1200px] h-[603px] left-[150px] top-[35px] absolute bg-gradient-to-l from-purple-900 via-pink-400 to-fuchsia-300 rounded-lg shadow border border-white" />
        <img className="w-[500px] h-[480px] left-[93px] top-[194px] absolute rounded-[130px]" src={HeroImg} />
        <div className="w-1/2 h-60 left-[680px] top-[240px] absolute">
          <div className="left-[84px] top-[2px] absolute text-white text-5xl font-extrabold font-['Inter']">Your playful guide to <br />what&#39;s next.</div>
          <div className="w-72 h-28 left-[69px] top-[125px] absolute">
            <div className="w-64 h-20 left-[12px] top-[13px] absolute bg-purple-900 rounded-3xl" />
            <Link to="/apps" className="left-[34px] top-[31px] absolute text-white text-4xl font-semibold font-['Inter']">Get Started</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection
