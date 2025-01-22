import React from 'react';
import { motion } from 'framer-motion';

const CourseDetails = ({ course, id }) => {
  course = course.find((course) => course.title === id);
  console.log(id);
  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className='min-h-screen bg-gray-50 py-10 px-6'>
      {/* Course Overview Section */}
      <section className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-10'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-bold text-gray-900 mb-6'
        >
          {course.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-lg text-gray-700 mb-8'
        >
          {course.description}
        </motion.p>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          src={course.image}
          alt={course.title}
          className='w-full h-96 object-cover rounded-lg mb-8'
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='bg-teal-100 p-6 rounded-lg'
        >
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
            Why Choose This Course?
          </h2>
          <ul className='list-disc list-inside text-gray-700'>
            {course.whyChoose.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Curriculum Section */}
      <section className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-10'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl font-bold text-gray-900 mb-6'
        >
          Course Curriculum
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='space-y-4'
        >
          {course.curriculum.map((module, index) => (
            <div key={index} className='p-4 bg-gray-50 rounded-lg'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {module.title}
              </h3>
              <p className='text-gray-700'>{module.description}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Instructor Section */}
      <section className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-10'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl font-bold text-gray-900 mb-6'
        >
          Meet Your Instructor
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex items-center space-x-6'
        >
          <img
            src={course.instructor.image}
            alt={course.instructor.name}
            className='w-24 h-24 rounded-full object-cover'
          />
          <div>
            <h3 className='text-2xl font-semibold text-gray-900'>
              {course.instructor.name}
            </h3>
            <p className='text-gray-700'>{course.instructor.bio}</p>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-10'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl font-bold text-gray-900 mb-6'
        >
          What Our Students Say
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='space-y-4'
        >
          {course.testimonials.map((testimonial, index) => (
            <div key={index} className='p-4 bg-gray-50 rounded-lg'>
              <p className='text-gray-700 italic'>"{testimonial.text}"</p>
              <p className='text-gray-900 font-semibold mt-2'>
                - {testimonial.author}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Pricing and Enrollment Section */}
      <section className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl font-bold text-gray-900 mb-6'
        >
          Enroll Today
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center'
        >
          <p className='text-lg text-gray-700 mb-4'>
            Start your journey to becoming a {course.title.toLowerCase()} expert
            today!
          </p>
          <p className='text-2xl font-bold text-gray-900 mb-6'>
            ${course.price}{' '}
            <span className='line-through text-gray-500'>
              ${course.originalPrice}
            </span>
          </p>
          <button className='bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition'>
            Enroll Now
          </button>
          <p className='text-sm text-gray-500 mt-4'>
            30-Day Money-Back Guarantee
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default CourseDetails;
