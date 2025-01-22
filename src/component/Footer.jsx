import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Courses Section */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Courses</h3>
            <ul className='space-y-2'>
              <li>Linkeldn Optimization</li>
              <li>CyberSecurity</li>
              <li>DevOps Engineering</li>
              <li>Data analysis</li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Navigation</h3>
            <ul className='space-y-2'>
              <li>The Academy</li>
              <li>Instructors</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Get in Touch</h3>
            <ul className='space-y-2'>
              <li>
                <p> Lagos, Nigeria.</p>
              </li>
              <li>
                <a href='tel:+2349135971419' className='hover:text-gray-400'>
                  (+234) 913 597 1419
                </a>
              </li>
              <li>
                <a
                  href='mailto:training@aledoyacademy.com'
                  className='hover:text-gray-400'
                >
                  training@devodata.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='my-6 border-t border-gray-600'></div>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Logo and Copyright */}
          <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
            {/* Replace '/path-to-logo.svg' with your actual logo path */}
            <img
              src='/path-to-logo.svg' // Correct path to your logo
              alt='Aledoy Academy'
              className='w-32 mb-2'
            />
            <p className='text-sm'>
              &copy; 2025 Aledoy Academy. All Rights Reserved
            </p>
          </div>

          {/* Social Media Icons */}
          <div className='flex space-x-4'>
            {/* Ensure you have FontAwesome included in your project */}
            <a href='#' className='hover:text-gray-400'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='#' className='hover:text-gray-400'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='hover:text-gray-400'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' className='hover:text-gray-400'>
              <i className='fab fa-youtube'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
