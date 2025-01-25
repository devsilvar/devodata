import React from 'react';
import HeroSection from '../component/HeroSection';
import DetailsSection from '../component/DetailsSection';
import AboutCourse from '../component/AboutCourse';
import Courses from '../component/Courses';
import Program from '../component/Program';
import FAQComponent from '../component/FAQComponent';
import Whatsapp from '../component/Whatsapp';
const Home = () => (
  <main>
    <HeroSection />
    <DetailsSection />
    <AboutCourse />
    <Courses />
    <Program />
    <Whatsapp />
    <FAQComponent />
  </main>
);

export default Home;
