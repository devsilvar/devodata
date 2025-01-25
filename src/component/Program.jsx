const Program = () => {
  return (
    <div className='bg-white py-40 px-4 sm:px-6 lg:px-8'>
      {' '}
      {/* Background remains white */}
      <div className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <div className='text-center'>
          <h2 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-400 py-1 sm:text-6xl animate-bounce'>
            Why Choose Us
          </h2>
          <p className='mt-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-400'>
            Our training is designed to make you{' '}
            <span className='font-bold'>Job-Ready</span>.
          </p>
        </div>

        {/* Cards Section */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Card 1: Hands-On Training */}
          <div className='bg-gradient-to-r from-teal-50 to-teal-100 p-8 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl'>
            <div className='flex justify-center'>
              <img
                src='https://cdn-icons-png.flaticon.com/512/1995/1995485.png' // Replace with your icon
                alt='Hands-On Training'
                className='w-16 h-16 mb-6'
              />
            </div>
            <h3 className='text-2xl font-bold text-teal-800 mb-4'>
              Hands-On Projects
            </h3>
            <ul className='text-teal-700 text-sm list-disc list-inside space-y-2'>
              <li>Practical projects based on real-world scenarios</li>
              <li>Access to industry tools & resources</li>
              <li>Interactive coding labs</li>
            </ul>
            <button className='mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition'>
              Get Started
            </button>
          </div>

          {/* Card 2: Expert Mentors */}
          <div className='bg-gradient-to-r from-teal-50 to-teal-100 p-8 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl'>
            <div className='flex justify-center'>
              <img
                src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' // Replace with your icon
                alt='Expert Mentors'
                className='w-16 h-16 mb-6'
              />
            </div>
            <h3 className='text-2xl font-bold text-teal-800 mb-4'>
              Industry-Experienced Instructors
            </h3>
            <ul className='text-teal-700 text-sm list-disc list-inside space-y-2'>
              <li>1:1 guidance and mentorship</li>
              <li>Learn from professionals with proven success</li>
              <li>Live Q&A and feedback sessions</li>
            </ul>
            <button className='mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition'>
              Join Now
            </button>
          </div>

          {/* Card 3: Career Support */}
          <div className='bg-gradient-to-r from-teal-50 to-teal-100 p-8 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl'>
            <div className='flex justify-center'>
              <img
                src='https://cdn-icons-png.flaticon.com/512/3135/3135795.png' // Replace with your icon
                alt='Career Support'
                className='w-16 h-16 mb-6'
              />
            </div>
            <h3 className='text-2xl font-bold text-teal-800 mb-4'>
              Career Support & Job recommendation
            </h3>
            <ul className='text-teal-700 text-sm list-disc list-inside space-y-2'>
              <li>Job placement assistance</li>
              <li>Resume reviews and optimization</li>
              <li>Mock interview prep</li>
            </ul>
            <button className='mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition'>
              Enroll Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
