const Header = () => {
  return (
    <section className="bg-gray-100 w-full text-gray-800 overflow-hidden">
      <div className="container paddings innerWidth flexCenter flex flex-col-reverse justify-center mx-auto px-20 sm:py-12 lg:py-24 md:flex-row lg:justify-between">
        <div className="flex flex-col justify-center items-center text-center rounded-sm w-ful md:mt-30 lg:max-w-md xl:max-w-lg lg:text-left md:p-6 md:items-start">
          <h1 className=" flex flex-col justify-center items-center font-bold leading-none text-4xl md:flex-row lg:text-5xl">
            Let's learn
            <span className="text-primary left-0 flex justify-start items-start">
              Together
            </span>
          </h1>
          <p className="flex text-start mt-6 mb-8 text-md md:text-lg lg:text-xl sm:mb-12">
            If you are pursuing a BSC or a diploma in Computer science and don't
            <br className="hidden md:inline lg:hidden" />
            know which profession is more suitable for you then this is the
            documentation that might help you.
          </p>
          <div className="flex flex-col space-y-4 w-full sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="primary-btn bg-primary"
            >
              Resources Docs
            </a>
            <a rel="noopener noreferrer" href="#" className="secondary-btn">
              Roadmaps
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-0 h-72 mt-10 md:p-6 lg:mt-30 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://cdn.dribbble.com/users/926537/screenshots/4502924/media/79e26abb3fb85b42f2722cf22da095dc.gif"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
