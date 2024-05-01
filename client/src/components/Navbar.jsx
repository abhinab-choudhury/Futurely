import { Link } from "react-router-dom";
import FuturelyLogo from "./../assets/Futurely.svg"

function Navbar() {

  return (
    <nav className='bg-blend-screen backdrop-blur-[10px] w-full mobile:h-fit tablet:h-[70px] laptop:h-[70px] mb-3 top-0 fixed z-50 flex justify-between items-center px-4 py-2 bg-opacity-75'>
      <a href="/">
        <img src={FuturelyLogo} alt="Futurely.Logo" />
      </a>
      <ul className="flex justify-between">
        <li>
          <Link to="/features" className=" font-['Antonio'] mx-5">FEATURES</Link>
        </li>
        <li>
          <Link to="/features/dailyhoroscopes" className="font-['Antonio']">DAILY HOROSCOPE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
