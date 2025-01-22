import React from 'react';
import { motion } from 'framer-motion';

const facilitators = [
  {
    id: 'cybersecurity',
    name: 'John Doe',
    bio: 'Senior Cybersecurity Consultant with 10+ years of experience.',
    image: '/instructor-cybersecurity.jpeg',
    expertise: ['Threat Analysis', 'Risk Management', 'Network Security'],
    courses: ['Cybersecurity'],
  },
  {
    id: 'devops',
    name: 'Alice Johnson',
    bio: 'DevOps Engineer with 8+ years of experience in cloud and automation.',
    image: '/instructor-devops.jpeg',
    expertise: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Containerization',
    ],
    courses: ['DevOps'],
  },
  {
    id: 'data-analysis',
    name: 'Sarah Lee',
    bio: 'Data Scientist with 7+ years of experience in data analysis and machine learning.',
    image: '/instructor-data-analysis.jpeg',
    expertise: [
      'Data Cleaning',
      'Exploratory Data Analysis',
      'Data Visualization',
    ],
    courses: ['Data Analysis'],
  },
];

const Instructors = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-10 px-6'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-4xl font-bold text-gray-900 text-center mb-10'
      >
        Meet Our Facilitators
      </motion.h1>

      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {facilitators.map((facilitator) => (
          <motion.div
            key={facilitator.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200'
          >
            {/* Facilitator Image */}
            <img
              src={facilitator.image}
              alt={facilitator.name}
              className='w-full h-64 object-cover'
            />

            {/* Facilitator Details */}
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                {facilitator.name}
              </h2>
              <p className='text-gray-700 mb-4'>{facilitator.bio}</p>

              {/* Expertise */}
              <div className='mb-4'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Areas of Expertise
                </h3>
                <ul className='list-disc list-inside text-gray-700'>
                  {facilitator.expertise.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Courses
                </h3>
                <ul className='list-disc list-inside text-gray-700'>
                  {facilitator.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
