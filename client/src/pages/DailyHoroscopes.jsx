import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios'; // Add axios import

function DailyHoroscopes() {
  const [email, setEmail] = useState('');
  const [sunsign, setSunsign] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
      console.log("Button CLicked")
      setLoading(true)
      const response = await axios.post('https://futurely-hfe3.vercel.app/api/create_user', { email, sunsign });
      setSuccess(true);
      console.log(response.data.message);
    } catch (error) {
      setError(error.message);
      console.error(error);
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
            <h5 className="mb-2 mobile:text-2xl  text-3xl font-bold text-gray-90">Get more updates...</h5>
            <p className="mb-5 mobile:text-sm text-base text-gray-800">
              Do you want to get notified every morning about your Horoscope? <br />
              Sign up for getting updates every morning.
            </p>
            <Form onSubmit={submitHandler} className="items-center justify-center space-y-4 mobile:flex mobile:space-y-0 mobile:space-x-4 rtl:space-x-reverse">
              <fieldset className="w-[80%] p-4">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your Email: name@gmail.com"
                  className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
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
                <Button type="submit" class="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {loading ? 'Loading...' : 'Subscribe'}
                </Button>
                {error && <div className="text-red-500">{error}</div>}
                {success && <div className="text-green-500">Subscription successful!</div>}
              </fieldset>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
}

const Input = ({ type, value, onChange, placeholder, label, required }) => (
  <div>
    <label htmlFor={label} className="block mb-2 text-sm font-medium text-blue-900">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      required={required}
    />
  </div>
);

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
  <button type={type} class="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {loading ? 'Loading...' : children}
  </button>

);

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} className="items-center justify-center space-y-4 mobile:flex mobile:space-y-0 mobile:space-x-4 rtl:space-x-reverse">
    {children}
  </form>
);

export default DailyHoroscopes;