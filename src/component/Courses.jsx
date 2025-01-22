import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Cybersecurity',
    description:
      'Safeguard networks, systems, and data with our online Cyber Security course. Learn threat analysis, risk management, and mitigation techniques.',
    image: '/cybersecurity.jpeg',
    badge: 'Trending',
  },
  {
    title: 'Data Analysis',
    description:
      'Transform data into actionable insights with our online course. Learn to collect, analyze, and visualize data using industry-leading tools.',
    image: '/data-analysis.jpeg',
    badge: 'Beginner Friendly',
  },
  {
    title: 'DevOps',
    description:
      'Transform your career with our comprehensive online DevOps course. Gain in-demand skills to succeed in this lucrative field and become a highly sought-after DevOps engineer.',
    image: '/devops.jpeg',
    badge: 'Career Boost',
  },
  {
    title: 'LinkedIn Optimization',
    description:
      'Elevate your online presence and career prospects with our LinkedIn Optimization course. Learn to turn your LinkedIn profile into a career-boosting asset.',
    image: '/linkedin-optimization.jpeg',
    badge: 'Skill Upgrade',
  },
];

const CourseCard = ({ title, description, image, badge }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='bg-white text-gray-900 p-0 relative rounded-lg shadow-lg overflow-hidden border border-gray-200'
    >
      {/* Top Badge */}
      <div className='absolute top-4 left-4 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md'>
        {badge}
      </div>

      {/* Image */}
      <img src={image} alt={title} className='w-full h-60 object-cover' />

      {/* Content */}
      <div className='p-5'>
        {/* Title */}
        <h3 className='text-2xl font-bold mb-2 text-gray-800'>{title}</h3>

        {/* Description */}
        <p className='text-sm mb-4 text-gray-600 leading-relaxed'>
          {description}
        </p>

        {/* Key Benefits */}
        <ul className='text-sm text-gray-700 mb-4'>
          <li className='flex items-center gap-2'>
            <span className='text-teal-600'>✔</span> Learn from industry experts
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-teal-600'>✔</span> 100% online & flexible
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-teal-600'>✔</span> Certification upon
            completion
          </li>
        </ul>

        {/* Price and Offer */}
        <div className='mb-4'>
          <p className='text-lg font-bold text-gray-900'>
            $199 <span className='line-through text-gray-500'>$299</span>
          </p>
          <p className='text-sm text-red-500 font-semibold'>
            Limited Time Offer!
          </p>
        </div>

        {/* Social Proof */}
        <div className='mb-4'>
          <p className='text-xs text-gray-600 bg-gray-100 py-2 px-3 rounded-full inline-block'>
            <span className='text-teal-600 font-bold'>5,000+</span> students
            enrolled
          </p>
        </div>

        {/* CTA Button */}
        <Link to={`/${title}`}>
          {' '}
          <button className='bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 w-full rounded-full text-sm font-semibold transition'>
            Enroll Now
          </button>
        </Link>

        {/* Guarantee */}
        <p className='text-xs text-gray-500 text-center mt-3'>
          30-Day Money-Back Guarantee
        </p>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Enable custom arrows
    nextArrow: <FaArrowCircleRight className='text-black text-3xl' />, // Use custom next arrow
    prevArrow: (
      <FaArrowCircleLeft
        style={{
          transform: 'rotate(180deg)',
          color: 'black',
          marginRight: '10px',
          zIndex: '50',
        }}
      />
    ), // Use custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true, // Enable custom arrows for responsive breakpoints
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true, // Enable custom arrows for responsive breakpoints
        },
      },
    ],
  };

  return (
    <section
      className='min-h-screen text-gray-900 flex flex-col items-center justify-center py-10 px-6'
      style={{
        background: 'linear-gradient(to right, #007C7E, #28AEB1)', // Teal-inspired gradient background
      }}
    >
      {/* Heading Section */}
      <div className='text-center mb-10'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl font-extrabold mb-4 text-white'
        >
          Courses Offered by Devo Data Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-lg text-teal-100'
        >
          Explore the skills to power your tech career.
        </motion.p>
      </div>

      {/* Course Cards Slider */}
      <div className='w-full max-w-6xl'>
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div key={index} className='px-2'>
              <CourseCard
                title={course.title}
                description={course.description}
                image={course.image}
                badge={course.badge}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
