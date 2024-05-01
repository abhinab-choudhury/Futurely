import React from 'react'
import Instagram from './../assets/instagram.png'
import Linkedin from './../assets/linkedin.png'

function Footer() {
  return (
    <div className='relative w-full h-fit top-10 bottom-0 mt-10 flex justify-between border-t-4 bg-gray-100'>
      <div className='flex justify-between w-full p-10'>
        <div className='flex laptop:flex-col tablet:flex-col mobile:block'>
          Developed by:
          <div className='flex laptop:flex-row tablet:flex-row mobile:block'>
            <a href='https://www.instagram.com/abhinab_choudhury_/'>Abhinab Choudhury,</a>
            <a href='https://www.instagram.com/arkaaa.18/'>Arkadeep Karmakar</a>
          </div>
        </div>
        <div className='font-extralight text-[0.6rem] mt-auto mb-auto mx-5'>
          <div>
            Copyright © 2024 Futurely. All Rights Reserved
          </div>
          <div>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
