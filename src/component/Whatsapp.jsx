import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  const [showMessage, setShowMessage] = useState(false);
  const whatsappLink = 'https://wa.link/14fvsi';

  return (
    <div className='fixed bottom-6 right-6 z-50 flex items-center'>
      {showMessage && (
        <div className='relative mr-1 transition-opacity duration-300 ease-in-out opacity-100'>
          <div className='bg-white p-3 rounded-full shadow-lg text-gray-800 mr-1 relative'>
            <span className='text-sm font-medium'>Talk to us on Whatsapp</span>
            {/* <div
              className='absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 
              border-t-[10px] border-t-transparent 
              border-l-[10px] border-l-white 
              border-b-[10px] border-b-transparent'
            ></div> */}
          </div>
        </div>
      )}

      <a
        href={whatsappLink}
        target='_blank'
        rel='noopener noreferrer'
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
        className='bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300'
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default WhatsappButton;
