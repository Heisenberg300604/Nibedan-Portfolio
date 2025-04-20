"use client"
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import techHive from "@/public/TechHive.png"
import budgetMap from "@/public/images/BudgetMap.png"
import flox from "@/public/images/Flox.png"
import SignalX from "@/public/images/SignalX.png"

const projectImages = {
  techhive: techHive,
  budgetmap: budgetMap,
  flox: flox,
  signalx: SignalX,
};

const projects: Project[] = [
  {
    id: 1,
    title: 'TechHive: E-Commerce',
    description: 'A comprehensive e-commerce platform using React for the frontend and Firebase for the backend.',
    tags: ['React', 'Redux', 'Firebase', 'TailwindCSS', 'RazorPay'],
    github: 'https://github.com/Heisenberg300604/TechHive-E-Commerce-Full-Stack-Project',
    demo: 'https://budget-map-new.vercel.app/',
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
    demo: 'https://budget-map-new.vercel.app/',
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
    demo: 'https://flox-social-media.vercel.app/',
    image: projectImages.flox,
    features: [
      'User Authentication: Secure login/signup with Google OAuth via Clerk',
      'Create Posts: Users can create and share their posts',
      'Follow System: Follow other users and view their activity',
      'View & Engage: Like and comment on posts',
      'Real-time Notifications: Instant updates on likes, comments, and follows'
    ],
  },
  {
    id: 4,
    title: 'Signal-X: AI-powered traffic management system',
    description: 'Signal-X is an AI-powered traffic management system using advanced computer vision, edge computing, and geospatial intelligence. With real-time sensor fusion, machine learning algorithms, and adaptive signal control, it enables dynamic congestion management and emergency vehicle prioritization.',
    tags: ['React', 'Tailwind CSS', 'Arduino', 'Flask', 'MongoDB', 'YOLOv8','MapMyIndia API', 'Streamlit',"React-Native-Expo"],
    github: 'https://github.com/Heisenberg300604/Signal-X/tree/main',
    demo: 'https://signal-x-zkh5.vercel.app/',
    image: projectImages.signalx,
    features: [
      'AI-Powered Traffic Analysis : YOLOv8-based object detection continuously monitors vehicle flow across all junction lanes',
      ' Dynamic Signal Adjustment: Adaptive signal control based on real-time congestion and traffic density patterns.',
      'IoT Integration: Arduino-based controllers ensure seamless traffic light control and emergency detection',
      'Geospatial Intelligence: Integration with MapMyIndias API offers live congestion updates and smart rerouting',
      'Emergency Vehicle Prioritization: Automatically detects emergency vehicles (ambulance, fire brigade, police) and gives them green-light priority'
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