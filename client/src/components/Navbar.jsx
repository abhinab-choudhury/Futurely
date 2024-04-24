import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="mx-[148px] h-20 flex justify-between align-middle items-center">
        <Link to="/" className="text-black text-3xl font-extrabold font-['Inter']">Futurely</Link>
        <Link to="/about" className="text-black text-xl font-normal font-['Inter']">About us</Link>
      </div>
      <div className="mx-[148px] h-0.5 bg-black" />
    </>
  )
}

export default Navbar
