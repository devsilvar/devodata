import React from 'react';

const DetailsSection = () => {
  const details = [
    {
      icon: '/duration.png', // Replace with exact icon URL
      title: '8 Weeks',
      subtitle: 'Duration',
    },
    {
      icon: '/class.png', // Replace with exact icon URL
      title: 'Online',
      subtitle: 'Class',
    },
    {
      icon: '/weekdays.png', // Replace with exact icon URL
      title: 'Weekday',
      subtitle: 'Tues & Thurs',
    },
    {
      icon: '/class.png', // Replace with exact icon URL
      title: '10am - 4pm',
      subtitle: 'Time',
    },
    // Duplicate the array to create a seamless loop
    {
      icon: '/duration.png',
      title: '8 Weeks',
      subtitle: 'Duration',
    },
    {
      icon: '/class.png',
      title: 'Online',
      subtitle: 'Class',
    },
    {
      icon: '/weekdays.png',
      title: 'Weekday',
      subtitle: 'Tues & Thurs',
    },
    {
      icon: '/class.png',
      title: '10am - 4pm',
      subtitle: 'Time',
    },
  ];

  return (
    <div className='py-4 overflow-hidden bg-gray-200'>
      <div className='relative w-full  overflow-hidden'>
        {/* Infinite Scrolling Wrapper */}
        <div className='animate-scroll flex space-x-16'>
          {details.map((item, index) => (
            <div
              key={index}
              className=' flex-shrink-0 flex  gap-4 p-4 transform transition-transform duration-500 hover:scale-105 '
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.subtitle}
                className='w-16 h-16 mx-auto mb-4'
              />
              {/* Title */}
              <div className='flex flex-col'>
                <h3 className='text-2xl font-bold text-black text-start'>
                  {item.title}
                </h3>
                {/* Subtitle */}
                <p className='text-red-700 text-sm font-medium text-start'>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
