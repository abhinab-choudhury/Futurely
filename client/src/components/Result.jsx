import React from 'react'

function Result({ text, heading = "" }) {
  return (
    <div>
      <div className='underline font-extralight' style={{ fontFamily: 'cursive' }}>{heading}</div>
      <div className='font-extrabold my-4 text-xl' style={{ fontFamily: 'cursive' }}>
        {text}
      </div>
    </div>
  )
}

export default Result
