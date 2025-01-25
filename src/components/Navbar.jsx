import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold ">
            Let's <span className="text-primary">Learn</span>
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button className="flex items-center justify-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <FaArrowRight className="font-bold" style={{ fontWeight: 100 }} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
