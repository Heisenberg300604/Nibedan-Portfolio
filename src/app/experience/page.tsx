"use client"

import { useEffect } from 'react';
import SectionHeading from '@/components/Common/SectionHeading';
import ExperienceTimeline from '@/components/Experience/ExperienceTimeline';
import EducationTimeline from '@/components/Experience/EducationTimeline';

const Experience = () => {
  useEffect(() => {
    document.title = 'Experience | Nibedan Pati';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My journey in the professional world of web development"
        />

        <div className="mb-20">
          <ExperienceTimeline />
        </div>

        <SectionHeading 
          title="Education" 
          subtitle="My academic background and qualifications"
        />

        <EducationTimeline />
      </div>
    </div>
  );
};

export default Experience;