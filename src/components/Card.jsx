import React from 'react';
import RightBtn from './../assets/right-btn.png';

import { Link } from 'react-router-dom';

function Card({ title, heading, info, to }) {
  return (
    <Link
      to={to}
      className="hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-[80vw] mobile:block laptop:flex laptop:align-middle justify-between ml-auto mr-auto mt-10 border-black border-4 rounded-[30px] p-5"
    >
      <div className="laptop:mx-10 laptop:my-auto laptop:text-3xl font-bold laptop:w-fit">
        {title}
      </div>
      <div className="mobile:my-4">
        <span className="phone:text-xl laptop:text-2xl font-semibold">{heading} </span>
        <br />
        {info}
      </div>
      <button className="laptop:mx-10 laptop:my-auto tablet:my-auto">
        <img src={RightBtn} alt="Button.png" />
      </button>
    </Link>
  );
}

export default Card;
