"use client"
import { useEffect } from 'react';
import SectionHeading from '@/components/Common/SectionHeading';
import HackathonsList from '@/components/Hackathons/HackathonsList';

const Hackathons = () => {
  useEffect(() => {
    document.title = 'Hackathons | Nibedan Pati';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading 
          title="Hackathon Achievements" 
          subtitle="My journey through hackathons and coding competitions"
        />

        <HackathonsList />
      </div>
    </div>
  );
};

export default Hackathons;