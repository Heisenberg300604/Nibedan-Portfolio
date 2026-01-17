"use client"
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import techHive from "@/public/TechHive.png"
import budgetMap from "@/public/images/BudgetMap.png"
import flox from "@/public/images/Flox.png"
import SignalX from "@/public/images/SignalX.png"
import recap from "@/public/images/recap.png"
import athleto from "@/public/images/athleto.png"
import travello from "@/public/images/Travello.png"
import echochat from "@/public/images/echochat.png"
import zapurl from "@/public/images/zapurl.png"

const projectImages = {
  techhive: techHive,
  budgetmap: budgetMap,
  flox: flox,
  signalx: SignalX,
  recap: recap,
  athleto: athleto,
  travello: travello,
  echochat: echochat,
  zapurl: zapurl,
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
    title: 'Recap',
    description: 'Your smart companion for smarter learning',
    tags: ['React', 'ShadCN Ui', 'Firebase', 'TailwindCSS', 'Vercel', 'AssemblyAI', 'Tesseract.js', 'FireStore', 'GoogleOauth'],
    github: 'https://github.com/Heisenberg300604/Recap',
    demo: 'https://recap-5ajg.vercel.app/',
    image: projectImages.recap,
    features: [
      'Smart Note Organization: Automatic categorization by subject and topic',
      'Flashcard Generation: Automatic creation of study cards from your notes which you can revise later',
      'OCR Integration: Convert handwritten notes to digital text',
      'Audio Transcription: Convert lecture recordings to searchable text',
      'Collaborative Learning: Share and create groups with peers and study',
      'AI-Powered Insights: Identify knowledge gaps and get personalized recommendations and resources',
      'Gamified Learning: Stay motivated with study streaks and interactive quizzes'
    ],
  },
  {
    id: 3,
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
    id: 4,
    title: 'Zap-URL: URL Shortening Service',
    description: 'A scalable URL shortening service built to learn and implement system design concepts. Features Redis caching, analytics, and deployed on AWS EC2 with Nginx reverse proxy.',
    tags: ['React', 'TypeScript', 'AWS EC2', 'DynamoDB', 'Redis', 'Docker', 'Nginx', 'Express', 'PM2'],
    github: 'https://github.com/Heisenberg300604/Zap-Url',
    demo: 'https://zap-url-five.vercel.app',
    image: projectImages.zapurl,
    features: [
      'System design implementation with scalability in mind',
      'Redis caching for fast URL redirection',
      'URL analytics and click tracking',
      'AWS EC2 deployment with Nginx reverse proxy',
      'Docker containerization for consistent deployment',
      'Winston logging for production monitoring',
    ],
  },
  {
    id: 5,
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
    id: 6,
    title: 'create-expo-starter: NPM Package',
    description: 'CLI tool that generates fully-configured Expo React Native applications. Published on NPM with 5 stars! Includes TypeScript, Expo Router, NativeWind, Zustand, and Axios out of the box.',
    tags: ['JavaScript', 'NPM', 'CLI', 'Expo', 'React Native', 'TypeScript', 'Zustand'],
    github: 'https://github.com/Heisenberg300604/create-expo-starter',
    features: [
      'Published NPM package: npx create-expo-starter',
      'Pre-configured with TypeScript and Expo Router',
      'NativeWind (TailwindCSS for React Native) setup',
      'Zustand for state management',
      'Axios for API calls with interceptors',
      'Starter components for Login, Signup, and Home screens',
    ],
  },
  {
    id: 7,
    title: 'Signal-X: AI-powered traffic management system',
    description: 'Signal-X is an AI-powered traffic management system using advanced computer vision, edge computing, and geospatial intelligence. With real-time sensor fusion, machine learning algorithms, and adaptive signal control, it enables dynamic congestion management and emergency vehicle prioritization.',
    tags: ['React', 'Tailwind CSS', 'Arduino', 'Flask', 'MongoDB', 'YOLOv8', 'MapMyIndia API', 'Streamlit', "React-Native-Expo"],
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
  {
    id: 8,
    title: 'EchoChat: Real-time Communication',
    description: 'A real-time chatting and video calling application for 1-to-1 communication. Built with WebRTC for peer-to-peer video calls and Socket.io for real-time messaging.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io', 'WebRTC', 'Shadcn-UI', 'Neon'],
    github: 'https://github.com/Heisenberg300604/EchoChat',
    demo: 'https://echo-chat-iota.vercel.app',
    image: projectImages.echochat,
    features: [
      'Real-time 1-to-1 video calling with WebRTC',
      'Instant messaging with Socket.io',
      'User authentication and session management',
      'PostgreSQL database with Prisma ORM',
      'Modern UI with Shadcn components',
    ],
  },
  {
    id: 9,
    title: 'Athleto: Empowering Underprivileged Athletes',
    description: 'Athleto is a virtual platform designed to support underprivileged athletes in India by providing them with the resources, training, and financial backing they need to excel in their respective sports.',
    tags: ['NextJS', 'Tailwind CSS', 'Typescript', 'Supabase', 'Nodejs', 'Deepseek AI', 'Vercel', 'Razorpay', "Docker"],
    github: 'https://github.com/Heisenberg300604/Athleto',
    demo: 'https://athleto-project.vercel.app/',
    image: projectImages.athleto,
    features: [
      'AI-Powered Talent Scouting: Leverage advanced AI algorithms to identify and nurture hidden talent across various sports.',
      'Gamified Crowdfunding: Engage the community through interactive crowdfunding campaigns that make supporting athletes fun and rewarding.',
      'Virtual Training with AR/VR: Offer immersive training experiences using Augmented Reality (AR) and Virtual Reality (VR) technologies.',
      'Sponsorship Matching Engine: Connect athletes with potential sponsors based on their skills, achievements, and needs.',
      'Sports Equipment and Scholarship Marketplace: Provide a platform for athletes to access affordable sports equipment and apply for scholarships.',
    ],
  },
  {
    id: 10,
    title: 'CodeSensei: Chrome Extension',
    description: 'A developer productivity Chrome extension to enhance your coding workflow. Built with JavaScript and Chrome Extension APIs.',
    tags: ['JavaScript', 'Chrome Extension', 'HTML', 'CSS', 'Browser APIs'],
    github: 'https://github.com/Heisenberg300604/codesensei-extension',
    features: [
      'Developer productivity tool',
      'Chrome Extension APIs integration',
      'Lightweight and fast',
      'Easy to install and use',
    ],
  },
  {
    id: 11,
    title: 'Travello',
    description: 'Tourism often lacks engagement and interactive experiences, leading to missed opportunities for travelers to discover unique local attractions and fully immerse themselves in local culture. Design a sophisticated gamified tourism application that motivates users to thoroughly explore their destination by earning points through uncovering hidden attractions and completing challenges and quests such as uploading photos taken from specific angles to match reference images. The application should also feature leaderboards, rewards, and integrated social sharing capabilities',
    tags: ['React', 'Tailwind CSS', 'Javascript', 'MongoDB', 'Nodejs', 'Bcrypt', 'Vercel', 'Mapbox', "AWS", "OAuth"],
    github: 'https://github.com/Heisenberg300604/Travello-Final',
    demo: 'https://travello-project.vercel.app/',
    image: projectImages.travello,
    features: [
      'Eco-Friendly Travel Encouragement: The Green Points System rewards eco-friendly actions like sustainable travel choices and walking with points that can be redeemed for local rewards, encouraging sustainable behavior. The Carbon Footprint Tracker monitors trip emissions and suggests greener alternatives to reduce environmental impact, promoting responsible travel decisions.',
      'AI-Powered Personalization: The Dynamic Itinerary Generator in Travello uses AI to create personalized travel plans, adjusting them based on user preferences, real-time events, and weather updates. This ensures a customized and flexible travel experience.',
      'Gamification: Travello rewards users with points, badges, and achievements for completing challenges, encouraging exploration. As users level up, they unlock exclusive content and discover hidden locations.',
      'Challenges & Quest: Travello offers gamified experiences with photo challenges, leaderboards, and culture-based quests, enhancing user engagement. Successful participation earns rewards, making travel both fun and competitive.',
      'Social Sharing & Community: Travello integrates social sharing features, allowing users to share achievements and itineraries on social media. The in-app community forum enables travelers to connect, share tips, and plan group activities, fostering a sense of community among users.',
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