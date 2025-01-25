import React from 'react';

const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-teal-900 text-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600'>
            Contact Us
          </h2>
          <p className='mt-4 text-lg text-gray-300'>
            Have questions or need assistance? Reach out to us! We're here to
            help.
          </p>
        </div>

        {/* Contact Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
            <form>
              <div className='mb-6'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-300'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='John Doe'
                  className='mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-300'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='johndoe@example.com'
                  className='mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-300'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  placeholder='Your message...'
                  className='mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md font-semibold transition duration-300'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            {/* Contact Details */}
            <div>
              <h3 className='text-2xl font-bold text-teal-400 mb-4'>
                Get in Touch
              </h3>
              <p className='text-gray-300'>
                We'd love to hear from you! Whether you have questions about our
                courses, need career advice, or just want to say hello, feel
                free to reach out.
              </p>
              <div className='mt-6 space-y-4'>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-teal-400 mr-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    ></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                  <p className='text-gray-300'>Lagos, Nigeria</p>
                </div>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-teal-400 mr-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    ></path>
                  </svg>
                  <p className='text-gray-300'>(+234) 913 597 1419</p>
                </div>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-teal-400 mr-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    ></path>
                  </svg>
                  <p className='text-gray-300'>
                    Support@devodatatechnologies.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div>
              <h3 className='text-2xl font-bold text-teal-400 mb-4'>
                Our Location
              </h3>
              <div className='rounded-lg overflow-hidden'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.521260322283!2d3.379295415393755!3d6.452326325820387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1633023222534!5m2!1sen!2sng'
                  width='100%'
                  height='300'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  title='Google Map'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
