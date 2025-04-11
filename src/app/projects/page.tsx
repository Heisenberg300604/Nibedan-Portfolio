"use client"
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/Common/SectionHeading';
import ProjectGrid from '@/components/Projects/ProjectGrid';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Nibedan Pati';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="My Projects" 
            subtitle="Explore my portfolio of web development projects"
          />
        </motion.div>

        <ProjectGrid />
      </div>
    </div>
  );
};

export default Projects;
