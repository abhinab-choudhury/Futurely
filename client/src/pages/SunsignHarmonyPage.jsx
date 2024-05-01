import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Result from '../components/Result'
import BtnSpinner from "../components/BtnSpinner"

function SunsignHarmonyPage() {

  let [result, setResult] = useState("")
  let [loading, setLoading] = useState(false)

  const SunsignHarmonyHandler = () => {
    console.log("Button Clicked")
  }

  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <section>
          <div className='my-20 border-4 rounded-[30px] p-10 mobile:w-[90vw] laptop:w-[40vw] flex flex-col ml-auto mr-auto font-["Inter"]'>

            <div className='laptop:flex laptop:gap-10 tablet:gap-10'>
              <h1 className='text-3xl font-extrabold'>Sunsign Harmony</h1>
              <form className='flex flex-col my-2 font-["Roboto Condensed"]'>
                <div>
                  <label name="your_name" htmlFor='your_name' className='text-xl laptop:font-2xl tablet:text-2xl mobile:text-sm font-semibold'>Your Name:</label>
                  <input className='name mobile:p-1 laptop:p-2 desktop:p-2 tablet:p-2 mobile:w-[100%] laptop:font-xl tablet:text-xl mobile:mb-2 mobile:text-sm border-2 rounded-md' placeholder='Name' type='text' id='your_name' />

                  <label htmlFor="your_sunsign" className="block mb-2 text-sm font-medium text-gray-900">Choose your Sunsign:</label>
                  <select id="your_sunsign" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                  </select>
                  <br />
                  <hr className='my-6 border-black' />
                  <label htmlFor='partners_name' className='text-xl laptop:font-2xl tablet:text-2xl mobile:text-sm font-semibold'>Partner's Name:</label>
                  <input name='partners_name' className='name mobile:p-1 laptop:p-2 desktop:p-2 tablet:p-2 mobile:w-[100%] laptop:font-xl tablet:text-xl mobile:mb-2 mobile:text-sm border-2 rounded-md' placeholder='Name' type='text' id='partners_name' />

                  <label htmlFor="partners_sunsign" className="block mb-2 text-sm font-medium text-gray-900">Choose your Partner's Sunsign:</label>
                  <select id="partners_sunsign" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                  </select>
                </div>
              </form>
            </div>
            <div className='flex mobile:flex-col mobile:justify-center mobile:text-center mt-5 font-extrabold mobile:text-2xl'>
              <button className='text-white w-fit bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={SunsignHarmonyHandler}>Find Out</button>
              {loading ? <BtnSpinner /> : <Result text={result} />}
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default SunsignHarmonyPage
