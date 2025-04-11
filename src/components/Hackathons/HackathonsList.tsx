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
    name: 'CodeSpark 2024',
    date: 'March 2024',
    position: 'Winner',
    project: 'Recap: AI-Powered Study Companion',
    description: 'Led a team to create an innovative AI-powered note organization platform that automatically categorizes notes and generates flashcards. The app features OCR for handwritten notes and AI-driven insights.',
    team: 'Team CodeWizards',
    technologies: ['React', 'CohereAI', 'Firebase', 'Tailwind CSS', 'Tesseract.js'],
  },
  {
    id: 2,
    name: 'HackDev 2023',
    date: 'November 2023',
    position: '1st Runner-up',
    project: 'HealthHub',
    description: 'Developed a mental health tracking application with mood analysis and personalized resources. Incorporated machine learning for pattern recognition and trends in user data.',
    team: 'Code Crafters',
    technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Chart.js'],
  },
  {
    id: 3,
    name: 'EcoHack 2023',
    date: 'August 2023',
    position: 'Winner',
    project: 'GreenTrack',
    description: 'Created a solution for sustainable living that helps users track their carbon footprint and suggests eco-friendly alternatives. The application featured gamification elements to encourage eco-friendly habits.',
    team: 'Green Coders',
    technologies: ['React', 'Firebase', 'MapBox API', 'TailwindCSS', 'Recharts'],
  },
  {
    id: 4,
    name: 'WebJam 2023',
    date: 'May 2023',
    position: 'Winner',
    project: 'LearnSync',
    description: 'Built an interactive learning platform that synchronizes content between educators and students in real-time. Implemented collaborative features for group study sessions and resource sharing.',
    team: 'Dev Squad',
    technologies: ['NextJS', 'Firebase', 'Socket.io', 'TailwindCSS', 'Framer Motion'],
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