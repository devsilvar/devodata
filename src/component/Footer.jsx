import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-black to-teal-900 text-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Left Section: Stats & Impact */}
        <div>
          <h3 className='text-2xl font-bold mb-4'>Achievement</h3>
          <p className='text-sm mb-2'>Stats & Impact:</p>
          <p className='text-sm'>Number of graduates: 200+</p>
          <p className='text-sm'>Placement rates: 67%</p>
          <p className='text-sm'>Industry partners: 20+</p>
        </div>

        {/* Middle Section: Quick Links */}
        <div>
          <h3 className='text-2xl font-bold mb-4'>Courses</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-sm hover:text-teal-400 transition'>
                LinkedIn Optimization
              </a>
            </li>
            <li>
              <a href='#' className='text-sm hover:text-teal-400 transition'>
                CyberSecurity
              </a>
            </li>
            <li>
              <a href='#' className='text-sm hover:text-teal-400 transition'>
                DevOps Engineering
              </a>
            </li>
            <li>
              <a href='#' className='text-sm hover:text-teal-400 transition'>
                Data Analysis
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Information */}
        <div>
          <h3 className='text-2xl font-bold mb-4'>Get in Touch</h3>
          <p className='text-sm mb-2'>Lagos, Nigeria.</p>
          <p className='text-sm mb-2'>(+234) 913 597 1419</p>
          <p className='text-sm mb-2'>Support@devodatatechnologies.com</p>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className='mt-8 border-t border-teal-800 pt-8 text-center'>
        <p className='text-sm'>© 2025 Aledoy Academy. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
