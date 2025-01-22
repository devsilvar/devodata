import Navbar from './component/Navbar';
import Footer from './component/Footer';
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
