import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeNav = () => {
    setMobileMenu(false);
  };

  return (
    <nav className='bg-black text-white px-6 py-4 flex justify-between items-center'>
      {/* Logo */}
      <div className='flex items-center text-2xl'>
        <Link to='/' className='cursor-pointer' onClick={closeNav}>
          <span className='font-bold text-red-600'>DEVO</span>
          <span className='ml-1 font-light'>Data</span>
        </Link>
      </div>

      {/* Links */}
      <ul
        className={`md:flex space-x-8 items-center transition-all duration-500 ease-in-out ${
          mobileMenu
            ? 'flex flex-col gap-5 fixed top-0 right-0 h-full bg-black w-2/3 z-30 py-4 transform translate-x-0'
            : 'fixed top-0 right-0 h-full bg-black w-2/3 z-10 py-4 transform translate-x-full'
        } md:static md:transform-none md:flex-row md:space-x-8 md:bg-transparent md:w-auto`}
      >
        <li
          className='relative group'
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <a
            href='#courses'
            className='hover:bg-teal-600 px-4 py-2 rounded transition-all duration-300 flex items-center'
          >
            Courses
            <span className='ml-2'>&#9660;</span>
          </a>
          {/* Dropdown */}
          <div
            className={`absolute top-full left-0 bg-black border border-gray-700 mt-1 shadow-lg z-10 transition-all duration-300 transform ${
              dropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <Link
              to='/CyberSecurity'
              className='block px-4 py-2 hover:bg-teal-600 transition-all duration-300'
            >
              CyberSecurity
            </Link>
            <Link
              to='/data-analysis'
              className='block px-4 py-2 hover:bg-teal-600 transition-all duration-300'
            >
              Data Science
            </Link>
            <Link
              to='/DevOps'
              className='block px-4 py-2 hover:bg-teal-600 transition-all duration-300'
            >
              Devops
            </Link>
          </div>
        </li>
        <li>
          <Link
            to='/instructor'
            onClick={closeNav}
            className='hover:bg-teal-600 px-4 py-2 rounded transition-all duration-300'
          >
            Instructors
          </Link>
        </li>

        <li>
          <Link
            to='/contact'
            onClick={closeNav}
            className='hover:bg-teal-600 px-4 py-2 rounded
            transition-all duration-300'
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href='#register'
            className='bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-teal-700 px-6 py-2 rounded-full text-white font-semibold transition-all duration-300'
          >
            Register Now
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-xl z-20 relative'
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <i className='fas fa-bars'></i>
      </button>

      {/* Overlay to close menu */}
      {mobileMenu && (
        <div
          className='absolute inset-0  h-screen w-full bg-black bg-opacity-20 z-20'
          onClick={() => setMobileMenu(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
