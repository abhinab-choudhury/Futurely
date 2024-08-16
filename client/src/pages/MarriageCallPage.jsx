import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner';
import BtnSpinner from '../components/BtnSpinner'
import QuoteAPI from '../utils/QuoteAPI';
import Result from '../components/Result';
import MarriageType from '../utils/MarriageType';
import Footer from '../components/Footer';


function MarriageCallPage() {
  let [quoteText, setQuoteText] = useState("")
  let [loading, setLoading] = useState(false)
  let [result, setResult] = useState("")
  let [subHeading, setsubHeading] = useState("")
  let [nameError, setNameError] = useState(false)
  let [dateError, setDateError] = useState(false)

  const dobRef = useRef(null);
  useEffect(() => {
    dobRef.current.max = new Date().toISOString().split('T')[0];
  }, []);

  let QuoteHandler = async (event) => {
    try {
      event.preventDefault()
      if (document.getElementById("dob").value === "") {
        setDateError(true)
      }
      if (document.getElementById("name").value === "") {
        setNameError(true)
      }
      if (document.getElementById("dob").value !== "" && document.getElementById("name").value !== "") {
        setNameError(false)
        setDateError(false)
        QuoteAPI(setQuoteText, setLoading, setResult)
        setResult(MarriageType())
        setsubHeading("Quote")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <div className='my-28 border-4 rounded-[30px] p-10 mobile:w-[90vw] laptop:w-[40vw] flex flex-col ml-auto mr-auto font-["Inter"]'>

          <div className='laptop:flex laptop:gap-10 tablet:gap-10'>
            <h1 className='text-3xl font-extrabold'>Marriage Call</h1>
            <form className='flex flex-col my-2 font-["Roboto Condensed"] w-[100%]'>
              <div>
                <label htmlFor='name' className='text-xl laptop:font-2xl tablet:text-2xl mobile:text-sm font-semibold'>Name:<span className='text-red-700'>*</span></label><br />
                {nameError ? <span className='text-xs leading-tight text-red-600'>Please enter your name.</span> : <span></span>}
                <input className='name mobile:p-1 laptop:p-2 desktop:p-2 tablet:p-2 mobile:w-[100%] laptop:font-xl tablet:text-xl mobile:mb-2 mobile:text-sm border-2 rounded-md' placeholder='Name' type='text' id='name' />
                <label htmlFor='dob' className='text-xl laptop:font-2xl tablet:text-2xl mobile:text-sm font-semibold'>Date of Birth:<span className='text-red-700'>*</span></label><br />
                {dateError ? <span className='text-xs leading-tight text-red-600'>Please enter your birth date.</span> : <span></span>}
                <input className='dob p-1 laptop:p-2 desktop:p-2 mobile:w-[100%] border-2 rounded-md' type='date' id='dob' max="" ref={dobRef} />
              </div>
              <button type='submit' className='text-white my-2 w-fit bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={QuoteHandler}>Find Out</button>
              <div>
                {loading ? <Spinner /> : <Result text={result} />}
              </div>
            </form>
          </div>
          <div className='flex mobile:flex-col mobile:justify-center mobile:text-center mt-5 font-extrabold mobile:text-2xl'>
            {loading ? <BtnSpinner /> : <Result text={quoteText} heading={subHeading} />}
          </div>
        </div>
      </section>
      <section className='w-[100%]'>
        <Footer />
      </section>
    </>
  )
}

export default MarriageCallPage
