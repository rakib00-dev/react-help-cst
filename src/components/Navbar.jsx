import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const [menuOpened, setmenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { top: !menuOpened && '-600%' };
    }
  };

  return (
    <header className="text-gray-600 body-font overflow-hidden">
      <div className="container w-full mx-auto flex justify-between flex-wrap py-5 px-20 flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold md:text-4xl">
            Let's <span className="text-primary">Learn</span>
          </span>
        </a>
        <OutsideClickHandler
          onOutsideClick={() => {
            setmenuOpened(false);
          }}
        >
          <div
            className="flex flex-wrap items-center text-base justify-between h-menu md:ml-auto"
            style={getMenuStyle(menuOpened)}
          >
            <div>
              <a className="mr-5 hover:text-gray-900">First Link</a>
              <a className="mr-5 hover:text-gray-900">Second Link</a>
              <a className="mr-5 hover:text-gray-900">Third Link</a>
              <a className="mr-5 hover:text-gray-900">Fourth Link</a>
            </div>
            <button className="flex items-center justify-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Button
              <FaArrowRight className="font-bold" style={{ fontWeight: 100 }} />
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon cursor-pointer"
          onClick={() => {
            setmenuOpened((preState) => !preState);
          }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
