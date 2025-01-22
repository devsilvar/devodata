import React from 'react';

const AboutCourse = () => {
  return (
    <div className='bg-white py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Column: Image or Icon */}
          <div className='flex justify-center md:justify-end'>
            <img
              src='/imm.jpg' // Replace with your image or icon URL
              alt='Web Development'
              className='w-64 h-64 md:w-full md:h-full transform transition-transform duration-500 hover:scale-105'
            />
          </div>

          {/* Right Column: Content */}
          <div className='space-y-8'>
            <h2 className='text-4xl font-extrabold text-gray-900 sm:text-4xl text-start'>
              Unlock Your Future with DEVO DATA Technologies
            </h2>
            <p className='mt-4 text-lg text-gray-600 text-start'>
              🚀{' '}
              <span className='font-semibold'>
                Start your tech career today
              </span>{' '}
              with DEVO DATA Technologies, the premier online training center
              for{' '}
              <span className='font-semibold'>
                DevOps, Cybersecurity, and Software Development
              </span>
              . With real-world projects and exclusive industry partnerships, we
              don't just teach—we launch your career.
            </p>
            <div className='mt-8 space-y-6'>
              <p className='text-gray-700'>
                🎯 <span className='font-semibold'>Why choose us?</span>
                <ul className='list-disc pl-6'>
                  <li>
                    <span className='font-semibold'>Industry-Ready Skills</span>
                    : Get hands-on training with cutting-edge tools and
                    technologies used by top companies.
                  </li>
                  <li>
                    <span className='font-semibold'>Career Growth</span>: We
                    pair top students with real industry partners for guaranteed
                    job opportunities.
                  </li>
                  <li>
                    <span className='font-semibold'>Proven Success</span>:
                    Graduates have secured positions at major international tech
                    companies
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
