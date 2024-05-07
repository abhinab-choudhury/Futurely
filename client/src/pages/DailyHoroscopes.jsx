import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Markdown from 'markdown-to-jsx';
import BtnSpinner from '../components/BtnSpinner';
import { runChat } from '../utils/AIDailyHoroscope';

function DailyHoroscopes() {
  const [sunsign, setSunsign] = useState('');
  const [apiResponce, setApiResponce] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      setApiResponce(await runChat(sunsign))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <section className="flex flex-col min-h-screen relative top-36 mobile:w-[90vw] laptop:w-[50vw] mx-auto">
          <div className="w-full p-4 text-center bg-gradient-to-r from-cyan-100 to-blue-300 border border-blue-300 rounded-lg shadow mobile:p-8">
            <h5 className="mb-2 mobile:text-2xl  text-3xl font-bold text-gray-90">Get more Daily Horoscope</h5>
            <p className="mb-5 mobile:text-sm text-base text-gray-800">
              Feeling Stuck? Your Gemini Horoscope Has the Answer
            </p>
            <Form onSubmit={submitHandler} className="items-center justify-center space-y-4 mobile:flex mobile:space-y-0 mobile:space-x-4 rtl:space-x-reverse">
              <fieldset className="w-[60%]p-4">
                <Select
                  value={sunsign}
                  onChange={(event) => setSunsign(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                >
                  <option value="">Select your Sunsign</option>
                  <option value="aries">Aries</option>
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
                </Select>
                <Button type="submit" className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {loading ? "Loading..." : 'Submit'}
                </Button>
                <Markdown id="responce" className="tex-green-500 text-left">{apiResponce}</Markdown>
              </fieldset>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
}

const Select = ({ value, onChange, label, children, required }) => (
  <div>
    <label htmlFor={label} className="block my-2 mb-2 text-sm font-medium text-blue-900">
      {label}
    </label>
    <select
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      required={required}
    >
      {children}
    </select>
  </div>
);

const Button = ({ type, children, loading }) => (
  <button type={type} className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {loading ? 'Loading...' : children}
  </button>

);

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} className="items-center justify-center space-y-4 mobile:flex mobile:space-y-0 mobile:space-x-4 rtl:space-x-reverse">
    {children}
  </form>
);

export default DailyHoroscopes;