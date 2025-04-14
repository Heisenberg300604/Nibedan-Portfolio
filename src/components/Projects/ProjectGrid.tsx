"use client"
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import techHive from "@/public/TechHive.png"
import budgetMap from "@/public/images/BudgetMap.png"
import flox from "@/public/images/Flox.png"

const projectImages = {
  techhive: techHive,
  budgetmap: budgetMap,
  flox: flox,
};

const projects: Project[] = [
  {
    id: 1,
    title: 'TechHive: E-Commerce',
    description: 'A comprehensive e-commerce platform using React for the frontend and Firebase for the backend.',
    tags: ['React', 'Redux', 'Firebase', 'TailwindCSS', 'RazorPay'],
    github: 'https://github.com/Heisenberg300604/TechHive-E-Commerce-Full-Stack-Project',
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
    github: 'https://github.com/Heisenberg300604/BudgetMap',
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
    title: 'Flox : Social Media Platform',
    description: 'Modern Social Media Platform built with NextJS, TypeScript, and Tailwind CSS.',
    tags: ['NextJS', 'Tailwind CSS', 'Clerk', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/Heisenberg300604/Flox',
    image: projectImages.flox,
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