import React from 'react'

function Login() {
  return (
    <div className='w-[100%] h-[100%] flex justify-center align-middle'>
      <form className='flex flex-col w-fit rounded-[30px]'>
        <div>
          <label hidden htmlFor='email'>Email : </label>
          <input placeholder='Email' id='email' type='email' />
        </div>
        <div>
          <label hidden htmlFor='password'>Password:</label>
          <input placeholder='Password' id='password' type="password" />
        </div>
      </form>
    </div>
  )
}

export default Login
