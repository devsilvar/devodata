import React, { useEffect } from 'react';
import CourseDetails from '../component/CourseDetails';
import { coursesinfo } from '../utils';
import { useParams } from 'react-router-dom';

const CourseDetailsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll animation
    });
  }, []);
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <CourseDetails course={coursesinfo} id={id} />
    </div>
  );
};

export default CourseDetailsPage;
