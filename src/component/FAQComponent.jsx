import React, { useState } from 'react';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are Devo Data's courses physical or online classes?",
      answer:
        'We offer both physical and online classes. Certain courses, such as DevOps, are exclusively available as physical classes. Choose the learning style that suits you best.',
    },
    {
      question: 'Who is this course for?',
      answer:
        'This course is designed for anyone seeking to advance their skills in DevOps, cybersecurity, software development, and related fields—whether you’re starting out or upskilling for a better role.',
    },
    {
      question: 'Can I enroll if I have no prior experience?',
      answer:
        'Absolutely! Our beginner-friendly modules ensure that even those with no prior experience can get started and thrive in the tech industry.',
    },
    {
      question: 'Do I get certifications?',
      answer:
        'Yes, upon successful completion of the course, you will receive an industry-recognized certificate to showcase your skills and boost your resume.',
    },
    {
      question: 'What kind of career support do you provide?',
      answer:
        'We provide comprehensive career support, including resume reviews, mock interviews, job placement assistance, and networking opportunities with industry experts.',
    },
    {
      question: 'Is there a refund policy?',
      answer:
        'Yes, we offer a refund policy if you’re unsatisfied within the first 14 days of the course start date. Terms and conditions apply.',
    },
    {
      question: 'What payment plans are available?',
      answer:
        'We offer flexible payment options, including installment plans, to ensure our courses are accessible to everyone.',
    },
    {
      question: 'Why should I choose Devo Data over other platforms?',
      answer:
        'With personalized mentoring, real-world projects, and a focus on job readiness, Devo Data ensures you’re equipped with the skills that employers demand.',
    },
    // Add more questions if needed
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=' py-16 px-6 bg-gray-200 sm:px-10'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-400 mb-10'>
          Frequently Asked Questions
        </h2>
        <p className='text-center text-gray-700 text-lg mb-12'>
          Have questions? We’ve got answers to help you make an informed
          decision.
        </p>
        <div className='space-y-6'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border border-gray-200 rounded-lg shadow-lg overflow-hidden'
            >
              {/* Question */}
              <button
                className='w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 transition'
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`text-lg font-medium ${
                    activeIndex === index ? 'text-red-600' : 'text-gray-900'
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`ml-4 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <div className='px-6 py-4 bg-white text-gray-600'>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
