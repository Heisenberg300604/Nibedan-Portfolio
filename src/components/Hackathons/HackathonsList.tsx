"use client"
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Code } from 'lucide-react';

interface Hackathon {
  id: number;
  name: string;
  date: string;
  position: string;
  project: string;
  description: string;
  team?: string;
  technologies: string[];
}

const hackathons: Hackathon[] = [
  {
    id: 1,
    name: 'M# Hackathon',
    date: 'September 2024',
    position: '3rd',
    project: 'Travello : Interactive Tourism Platform',
    description: 'Tourism in India often lacks engagement, leading to missed opportunities for travelers to explore local culture.To overcome all these problems ,We are developing a gamified tourism platform designed to revolutionize how travelers explore their destinations. Our application will guide users to hidden attractions and cultural experiences through interactive challenges and quests, transforming the act of discovery into an engaging adventure. Leveraging AI-driven personalization, users will receive customized itineraries that adapt to their preferences and real-time conditions. This platform not only enriches the travel experience but also fosters a deeper connection with local culture, making every journey memorable.',
    team: 'Team Synapse',
    technologies: ['React', 'MongoDB', 'ExpressJS', 'Tailwind CSS', 'Node.js','Vercel','Mapbox API','Cloudinary'],
  },
  {
    id: 2,
    name: 'NS Hacks',
    date: 'January 2025',
    position: '1st',
    project: 'Recap',
    description: 'Recap is an innovative study companion designed to revolutionize how students organize and interact with their study materials. Our platform leverages artificial intelligence to create an intelligent note-taking ecosystem that grows with your learning journey.',
    team: 'Synapse',
    technologies: ['React', 'Node.js', 'Firebase', 'Tesseract.js', 'Assembly AI', 'Recharts', 'Vercel'],
  },
  {
    id: 3,
    name: 'Invictus DTU',
    date: 'February 2025',
    position: '2nd',
    project: 'Bugathon',
    description: 'Had to find vulnerabilities in the code of the website and report them.',
    team: 'Synapse',
    technologies: ['Drupal', 'php', 'ajax', 'DevTools', 'Web Security'],
  },
  {
    id: 4,
    name: 'Tryst 2025',
    date: 'March 2025',
    position: '1st',
    project: 'Waygen',
    description: 'Waygen is an AI-driven Smart Traffic Management System designed to revolutionize urban mobility by integrating computer vision, IoT, and geospatial intelligence. Our solution addresses the critical challenges of urban traffic congestion through real-time monitoring, analysis, and optimization.',
    team: 'Synapse',
    technologies: ['React', 'Node.js', 'Flask', 'Raspberry Pi', 'TailwindCSS', 'Framer Motion', 'Vercel', 'YOLOv8','Streamlit'],
  },
];

const HackathonsList = () => {
  return (
    <div className="space-y-8">
      {hackathons.map((hackathon, index) => (
        <motion.div
          key={hackathon.id}
          className="glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{hackathon.name}</h3>
              <div className="flex items-center mt-2 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {hackathon.date}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-1">
              <Trophy className="h-4 w-4" />
              <span>{hackathon.position}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-medium text-primary mb-1">{hackathon.project}</h4>
            <p className="text-muted-foreground text-sm">{hackathon.description}</p>
          </div>
          
          {hackathon.team && (
            <div className="flex items-center mb-4 text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              <span>{hackathon.team}</span>
            </div>
          )}
          
          <div className="flex items-center mb-2 text-sm text-muted-foreground">
            <Code className="h-4 w-4 mr-1" />
            <span>Technologies used:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {hackathon.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-secondary rounded-full text-xs text-foreground/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HackathonsList;