import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function DailyHoroscopes() {
  let [email, setEmail] = useState("")
  let [sunsign, setSunsign] = useState("")

  let submitHandler = async (event) => {
    setEmail("")
    setSunsign("")
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: { email, sunsign }
    }
    try {
      const response = await fetch("https://futurely-hfe3.vercel.app/api/create_user", options)
      if (response.status === 200) {
        console.log(`Message: ${response.message}`)
      }
    } catch (error) {
      console.log(`Error : ${error}`)
    }
  }

  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <section className='flex flex-col min-h-screen relative top-36 mobile:w-[90vw] laptop:w-[50vw] mx-auto'>
          <div className="w-full p-4 text-center bg-gradient-to-r from-cyan-100 to-blue-300 border border-blue-300 rounded-lg shadow mobile:p-8">
            <h5 className="mb-2 mobile:text-2xl  text-3xl font-bold text-gray-90">Get more updates...</h5>
            <p className="mb-5 mobile:text-sm text-base text-gray-800">
              Do you want to get notified every morning about your Horoscope? <br />
              Sign up for geting updates every morning.
            </p>
            <div className="items-center justify-center space-y-4 mobile:flex mobile:space-y-0 mobile:space-x-4 rtl:space-x-reverse">
              <form className="max-w-sm mx-auto">
                <div>
                  <label for="email-address-icon" className="block mb-2 text-sm font-medium text-blue-900">Your Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input onChange={(event) => { setEmail(event.target.value) }} type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block desktop:w-[20vw] laptop:w-[20vw] tablet:w-[20vw] mobile:w-[70vw] ps-10 p-2.5" placeholder="name@gmail.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="sunsign" className="block my-2 mb-2 text-sm font-medium text-blue-900">Choose your Sunsign:</label>
                  <select onChange={(event) => { setSunsign(event.target.value) }} id="sunsign" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option defaultValue value="Aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="gemini">Gemini</option>
                    <option value="cancer">Cancer</option>
                    <option value="leo">Leo</option>
                    <option value="virgo">Virgo</option>
                    <option value="scorpio">Scorpio</option>
                    <option value="libra">Libra</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="capricorn">Capricorn</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="pisces">Pisces</option>
                  </select>
                </div>
                <button onClick={submitHandler} type="submit" class="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
              </form>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default DailyHoroscopes
