import React from 'react'

function Signup() {
  return (
    <div className='w-[100%] h-[100%] flex flex-col font-["Inter"]'>
      <form className='flex flex-col rounded-[30px] gap-3 border w-fit p-10 mx-auto'>
        <h1 className='text-4xl font-bold my-5'>Signin</h1>
        <div className='mobile:flex-col mobile:flex laptop:flex'>
          <label htmlFor='first_name' className='font-bold block'>Name</label>
          <div className='flex mobile:flex-row laptop:flex-col '>
            <input className='my-2 p-1 border-2 mr-1 rounded-md' placeholder='First Name' type='text' id='firt_name' />
            <label htmlFor='last_name' hidden></label>
            <input className='p-1 border-2 rounded-md' placeholder='Last Name' type='text' id='last_name' />
          </div>
        </div>
        <div>
          <label htmlFor='email' className='font-bold'>Email </label><br />
          <input className='my-2 p-1 border-2 rounded-md w-full' placeholder='Email' id='email' type='email' />
        </div>
        <div>
          <label htmlFor='password' className='font-bold'>Password</label><br />
          <input className='my-2 p-1 border-2 rounded-md w-full' placeholder='Password' id='password' type="password" />
        </div>
      </form>
    </div>
  )
}

export default Signup
