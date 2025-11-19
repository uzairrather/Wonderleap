import React from 'react';
import StudentHero from '../components/students/StudentHero';
import ClassCodeEntry from '../components/students/ClassCodeEntry';
import HowToPlay from '../components/students/HowToPlay';
import ZonesPreview from '../components/students/ZonesPreview';
import BadgesShowcase from '../components/students/BadgesShowcase';

const StudentsPage = () => {
  return (
    <div className="min-h-screen">
      <StudentHero />
      <ClassCodeEntry />
      <HowToPlay />
      <ZonesPreview />
      <BadgesShowcase />
    </div>
  );
};

export default StudentsPage;