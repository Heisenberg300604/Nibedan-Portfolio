import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SkillProps {
  skill: {
    name: string;
    icon: React.ReactNode;
    category: string;
    description: string;
    proficiency: number;
  };
  index: number;
}

export default function SkillCard({ skill, index }: SkillProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div 
            className="skill-card"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col items-center">
              <div className="skill-icon-bg mb-4">
                <div className="relative z-10">
                  {skill.icon}
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{skill.category}</span>
              
              {/* Proficiency bar */}
              <div className="w-full h-1.5 bg-secondary mt-3 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                />
              </div>
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{skill.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
