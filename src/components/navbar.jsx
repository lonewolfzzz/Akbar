import React from 'react';

export default function Navbar({ navbarColor, logoSrc }) {
  return (
    <nav className={`fixed top-0 w-[80%] ${navbarColor.background} px-4 py-2 rounded-2xl z-50 transition-colors duration-500`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className={`items-center text-2xl font-bold ${navbarColor.text}`}>
          <a href="/">
            <img src={logoSrc} alt="logo" className="h-10 sm:h-14 w-auto" /> {/* Responsive logo size */}
          </a>
        </div>

        {/* Navigation links and Let's Talk button on the right */}
        <div className="flex items-center space-x-4 sm:space-x-8 font-bold"> {/* Adjusted spacing for smaller screens */}
          {/* Navigation links */}
          <div className={`hidden md:flex space-x-8 ${navbarColor.text}`}>
            <a href="#about" className="group relative hover:text-gray-700">
              <span>About</span>
              <span className={`absolute bottom-0 left-0 h-[0.125em] w-0 bg-current rounded-full transition-all duration-300 ease-in-out group-hover:w-full`}></span> {/* Ensure it's visible */}
            </a>
            <a href="#services" className="group relative hover:text-gray-700">
              <span>Services</span>
              <span className={`absolute bottom-0 left-0 h-[0.125em] w-0 bg-current rounded-full transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            </a>
            <a href="#projects" className="group relative hover:text-gray-700">
              <span>Projects</span>
              <span className={`absolute bottom-0 left-0 h-[0.125em] w-0 bg-current rounded-full transition-all duration-300 ease-in-out group-hover:w-full`}></span>
            </a>
          </div>

          {/* "Let's Talk" button */}
          <div className="flex items-center">
            <a
              href=""
              className={`group relative ${navbarColor.background === 'bg-white' ? 'bg-black text-white' : 'bg-white text-black'} px-2 py-1 sm:px-4 sm:py-2 rounded-3xl hover:bg-black hover:text-white duration-300 ease-out`}
            >
              <span className="absolute bottom-[1rem] md:bottom-[1.2rem] lg:bottom-[1.2rem] h-[0.185em] w-0 rounded-full bg-white opacity-80 duration-300 ease-out group-hover:w-[74px]"></span>
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
