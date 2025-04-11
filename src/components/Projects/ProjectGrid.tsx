"use client"
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

const projectImages = {
  techhive: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop',
  budgetmap: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop',
  recap: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop',
};

const projects: Project[] = [
  {
    id: 1,
    title: 'TechHive: E-Commerce',
    description: 'A comprehensive e-commerce platform using React for the frontend and Firebase for the backend.',
    tags: ['React', 'Redux', 'Firebase', 'TailwindCSS', 'RazorPay'],
    github: 'https://github.com/Heisenberg300604/',
    demo: '#',
    image: projectImages.techhive,
    features: [
      'Secure login, registration, and user session management',
      'Dynamic user interface with filtering and searching',
      'Product catalog with various functionalities',
      'Integration with Razorpay for secure transactions',
    ],
  },
  {
    id: 2,
    title: 'BudgetMap - Expense Tracker',
    description: 'A responsive expense tracking platform with React, TypeScript, and Tailwind CSS.',
    tags: ['MERN', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'JWT'],
    github: 'https://github.com/Heisenberg300604/',
    image: projectImages.budgetmap,
    features: [
      'Dynamic dashboard for expense categorization',
      'Secure backend using Node.js and JWT authentication',
      'Multi-currency support with live conversion rates',
      'Data export in CSV/PDF formats',
    ],
  },
  {
    id: 3,
    title: 'Recap: AI-Powered Study Companion',
    description: 'An AI-powered note organization platform developed during a hackathon.',
    tags: ['React', 'Tailwind CSS', 'CohereAI', 'Firebase', 'Tesseract.js'],
    github: 'https://github.com/Heisenberg300604/',
    image: projectImages.recap,
    features: [
      'Automatic categorization and customizable views',
      'OCR for handwritten note conversion',
      'Audio transcription for lecture recordings',
      'AI-driven insights to identify knowledge gaps',
    ],
  },
];

const ProjectGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;