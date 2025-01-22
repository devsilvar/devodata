import React from 'react';
import HeroSection from '../component/Herosection';
import DetailsSection from '../component/DetailsSection';
import AboutCourse from '../component/AboutCourse';
import Courses from '../component/Courses';
import Program from '../component/Program';
import FAQComponent from '../component/FAQComponent';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <DetailsSection />
      <AboutCourse />
      <Courses />
      <Program />
      <FAQComponent />
    </main>
  );
};

export default Home;
