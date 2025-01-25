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
  {
    id: 'product-management',
    name: 'Michael Brown',
    bio: 'Product Manager with 9+ years of experience in agile product development.',
    image: '/instructor-product-management.jpeg',
    expertise: ['Product Strategy', 'User Research', 'Agile Methodologies'],
    courses: ['Product Management'],
  },
  {
    id: 'ai',
    name: 'Emily Davis',
    bio: 'AI Specialist with 6+ years of experience in machine learning and NLP.',
    image: '/instructor-ai.jpeg',
    expertise: ['Machine Learning', 'Natural Language Processing', 'AI Ethics'],
    courses: ['Artificial Intelligence'],
  },
];

const Instructors = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-900 to-teal-900 py-16 px-6'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 text-center mb-12'
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
            whileHover={{ scale: 1.05 }}
            className='bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-teal-700 transform transition-transform duration-300 hover:shadow-2xl'
          >
            {/* Facilitator Image */}
            <img
              src={facilitator.image}
              alt={facilitator.name}
              className='w-full h-64 object-cover'
            />

            {/* Facilitator Details */}
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-teal-400 mb-2'>
                {facilitator.name}
              </h2>
              <p className='text-gray-300 mb-4'>{facilitator.bio}</p>

              {/* Expertise */}
              <div className='mb-4'>
                <h3 className='text-lg font-semibold text-teal-400 mb-2'>
                  Areas of Expertise
                </h3>
                <ul className='list-disc list-inside text-gray-300'>
                  {facilitator.expertise.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h3 className='text-lg font-semibold text-teal-400 mb-2'>
                  Courses
                </h3>
                <ul className='list-disc list-inside text-gray-300'>
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
