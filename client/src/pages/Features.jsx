import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Features() {
  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <section className="flex flex-col justify-center relative top-10 h-fit m-8">
          <h1 className="tablet:text-4xl mobile:text-3xl w-[80vw] font-extrabold laptop:text-7xl flex ml-auto mr-auto justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Features
          </h1>
          <hr className="border-1 border-black w-[80vw] ml-auto mr-auto my-2" />
          <Card
            to="/features/marriagecall"
            title="Marriage Call"
            heading="Uncover your love story:"
            info="Let our numerology prediction help you discover if the stars are aligned for love or a traditional arranged marriage."
          />
          <Card
            to="/features/sunshinharmony"
            title="Sunshine Harmony"
            heading="Partner Compatibility Check:"
            info="See if your Zodiac signs are destined to shine together."
          />
          <Card
            to="/features/horoscope"
            title="Horoscope"
            heading="Cosmic Connections:"
            info="Explore the harmony of your Zodiac Signs"
          />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Features;
