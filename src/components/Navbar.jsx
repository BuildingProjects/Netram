import React from 'react'

const Navbar = () => {
  return (
<<<<<<< Updated upstream
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
=======
    <nav className='bg-gradient-to-r from-cyan-500 to-blue-500 p-4 shadow-lg transition-shadow duration-300'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-white text-2xl font-bold'>
          <a href='/'>Netram</a>
        </div>

        {/* Links for larger screens */}
        <div className='hidden md:flex space-x-6'>
          <a href='/' className='text-white hover:text-gray-100 transition'>
            Home
          </a>
          <a
            href='#about'
            className='text-white hover:text-gray-100 transition'
          >
            About
          </a>
          <a
            href='#feature'
            className='text-white hover:text-gray-100 transition'
          >
            Feature
          </a>
          <a
            href='#contact'
            className='text-white hover:text-gray-100 transition'
          >
            Contact
          </a>
        </div>

        {/* Hamburger Menu Icon for smaller screens */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white hover:text-gray-100 focus:outline-none transition transform duration-200'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-max-h duration-300 ease-in-out md:hidden`}
      >
        <div className='flex flex-col space-y-2 py-2'>
          <a
            href='/'
            className='text-white hover:bg-cyan-600 px-3 py-2 transition duration-300 transform hover:scale-105 rounded'
          >
            Home
          </a>
          <a
            href='#about'
            className='text-white hover:bg-cyan-600 px-3 py-2 transition duration-300 transform hover:scale-105 rounded'
          >
            About
          </a>
          <a
            href='#feature'
            className='text-white hover:bg-cyan-600 px-3 py-2 transition duration-300 transform hover:scale-105 rounded'
          >
            Feature
          </a>
          <a
            href='#contact'
            className='text-white hover:bg-cyan-600 px-3 py-2 transition duration-300 transform hover:scale-105 rounded'
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> Stashed changes
