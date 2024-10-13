import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">Netram</a>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white">About</a>
          <a href="/services" className="text-gray-300 hover:text-white">Services</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>

        {/* Hamburger Menu Icon for smaller screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 py-2">
            <a href="/" className="text-gray-300 hover:text-white block px-3 py-2">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white block px-3 py-2">About</a>
            <a href="/services" className="text-gray-300 hover:text-white block px-3 py-2">Services</a>
            <a href="/contact" className="text-gray-300 hover:text-white block px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
