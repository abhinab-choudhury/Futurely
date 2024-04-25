import FuturelyLogo from "./../assets/Futurely.svg"

function Navbar() {

  return (
    <nav className='bg-blend-screen backdrop-blur-[10px] mb-3 fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 bg-opacity-75'>
      <a href="/" className="text-xl font-bold">
        <img src={FuturelyLogo} alt="Futurely.Logo" />
      </a>
      <ul className="flex justify-between">
        <li>
          <a href="#" className=" font-['Antonio']">DAILY HOROSCOPE</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
