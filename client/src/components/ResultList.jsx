import React from 'react'

function ResultList(props) {
  return (
    <>
      <ul className='laptop:text-xl tablet:text-xl desktop:text-xl mobile:text-sm text-left font-serif'>
        {Object.entries(props).map(([key, value]) => (
          <li key={key}>
            <b>{key.charAt(0).toUpperCase() + key.slice(1)}</b>: <span className='font-normal'>{value}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ResultList
