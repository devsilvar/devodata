import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './component/Navbar';
import HeroSection from './component/Herosection';
import DetailsSection from './component/DetailsSection';
import AboutCourse from './component/AboutCourse';
import Program from './component/Program';
import FAQComponent from './component/FAQComponent';
import Footer from './component/Footer';
import Courses from './component/Courses';
import CourseDetails from './pages/CourseDetailsPage';
import { Route, Routes } from 'react-router-dom';
import Instructors from './pages/Instructors';
import Contact from './pages/Contact';
import Home from './pages/Home';
import CourseDetailsPage from './pages/CourseDetailsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CourseDetailsPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/instructor' element={<Instructors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
