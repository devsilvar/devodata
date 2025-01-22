import React from 'react';
import Countdown from './Countdown';

const HeroSection = () => {
  const { timeLeft } = Countdown();

  return (
    <div
      className='relative bg-cover bg-center h-auto lg:h-[80vh] flex items-center justify-center'
      style={{
        backgroundImage: `linear-gradient(to right, #0A4F91, #2EC9D9)`, // Gradient extracted from the uploaded image
      }}
    >
      {/* Black Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-70'></div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6  text-white flex flex-col md:flex-row items-center md:justify-between gap-5 lg:py-3 py-10 lg:space-y-8 md:space-y-0'>
        {/* Left Section */}
        <div className='flex-1'>
          <h1 className='text-5xl md:text-7xl font-bold mb-4 leading-tight'>
            Unlocking Your Future in Tech
          </h1>
          <p className='text-lg md:text-2xl font-light py-5 w-[90%]'>
            In this Digital Age the Opportunities are Endless for Those Willing
            to Learn and Adapt
          </p>
          <div className='flex space-x-4'>
            <button className='border border-teal-300 hover:bg-teal-300 hover:text-black text-teal-300 py-3 px-6 md:px-8 rounded-full font-semibold text-lg transition'>
              Join Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='bg-white flex-1 text-black rounded-lg p-4 md:p-8 shadow-xl w-full md:w-auto md:max-w-sm'>
          <h3 className='text-red-600 text-lg font-bold flex items-center mb-4'>
            <span className='mr-2 text-3xl'>📅</span> Next Cohort:
          </h3>
          <p className='text-xl md:text-3xl font-semibold mb-2 leading-tight'>
            Wednesday <br /> February 3, 2025
          </p>
          <p className='text-red-600 font-medium text-sm md:text-base'>
            {timeLeft.days}days {timeLeft.hours}h {timeLeft.minutes}m{' '}
            {timeLeft.seconds}s
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
