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
    <header className="absolute bg-white w-full text-gray-600 body-font overflow-hidden">
      <div className="container w-full mx-auto flex justify-between flex-wrap py-5 px-5 flex-row items-center md:px-10">
        <a className="flex title-font  font-medium justify-center items-center text-gray-900 ">
          <span className="ml-3 text-2xl font-bold md:text-4xl">
            Let's <span className="text-primary">Help</span>
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
            <div className="flex flex-col gap-4 md:gap- md:flex-row">
              <a className="mr-5 p-2 font-semibold text-md hover:text-gray-900 active:text-gray-950 md:text-lg">
                Home
              </a>
              <a className="mr-5 p-2 font-semibold text-md hover:text-gray-900 active:text-gray-950 md:text-lg">
                Resource Docs
              </a>
              <a className="mr-5 p-2 font-semibold text-md hover:text-gray-900 active:text-gray-950 md:text-lg">
                Choose Career
              </a>
              <a className="transition-all mr-5 border rounded p-2 font-semibold text-md flex justify-center items-center gap-1 hover:text-white hover:bg-orange-500 active:bg-orange-500/30 active:text-white/80 md:text-lg">
                Roadmaps <FaArrowRight />
              </a>
            </div>
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
