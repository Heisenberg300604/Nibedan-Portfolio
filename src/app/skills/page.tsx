"use client"

import { useEffect } from 'react';
import SectionHeading from '@/components/Common/SectionHeading';
import SkillGrid from '@/components/Skills/SkillGrid';

const Skills = () => {
  useEffect(() => {
    document.title = 'Skills | Nibedan Pati';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeading 
          title="My Skills" 
          subtitle="A comprehensive overview of my technical abilities and expertise"
        />

        <SkillGrid />
      </div>
    </div>
  );
};

export default Skills;