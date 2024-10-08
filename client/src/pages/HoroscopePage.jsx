import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Horoscope from '../utils/Horoscope';
import BtnSpinner from '../components/BtnSpinner';
import ResultList from '../components/ResultList';

function HoroscopePage() {
  let [career, setCareer] = useState('');
  let [business, setBusiness] = useState('');
  let [education, setEducation] = useState('');
  let [relationships, setRelationships] = useState('');
  let [health, setHealth] = useState('');
  let [luckyNumbers, setLuckyNumbers] = useState('');
  let [luckyColor, setLuckyColor] = useState('');
  let [luckyDays, setLuckyDays] = useState('');

  let [loading, setLoading] = useState(false);
  let [display, setDisplay] = useState(false);

  let APIHandler = (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setDisplay(true);
      }, 2000);
      Horoscope(
        setCareer,
        setBusiness,
        setEducation,
        setRelationships,
        setHealth,
        setLuckyNumbers,
        setLuckyColor,
        setLuckyDays
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <div className='my-44 border-4 rounded-[30px] p-10 mobile:w-[90vw] laptop:w-[40vw] flex flex-col ml-auto mr-auto font-["Inter"]'>
          <div className="laptop:flex laptop:gap-10 tablet:gap-10">
            <h1 className="text-3xl font-extrabold">Yearly Horoscope</h1>
            <form className='flex flex-col my-2 font-["Roboto Condensed"] w-[100%]'>
              <div>
                <label htmlFor="sunsign" className="block mb-2 text-sm font-medium text-gray-900">
                  Choose your Sunsign:
                </label>
                <select
                  id="sunsign"
                  className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option defaultValue value="Aries">
                    Aries
                  </option>
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
              <button
                type="submit"
                className="text-white my-2 w-fit bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={APIHandler}
              >
                Find Out
              </button>
            </form>
          </div>
          <div className="flex mobile:flex-col mobile:justify-center mobile:text-center mt-5 font-extrabold mobile:text-2xl">
            {loading ? (
              <BtnSpinner />
            ) : display === true ? (
              <ResultList
                career={career}
                business={business}
                education={education}
                relationships={relationships}
                health={health}
                luckyNumbers={luckyNumbers}
                luckyColor={luckyColor}
                luckyDays={luckyDays}
              />
            ) : (
              <span></span>
            )}
          </div>

          <span className="my-10">
            Want Todays Horoscope ?{' '}
            <Link to="/features/dailyhoroscopes" className="text-blue-600 underline">
              click here.
            </Link>
          </span>
        </div>
      </section>
      <section className="w-[100%]">
        <Footer />
      </section>
    </div>
  );
}

export default HoroscopePage;
