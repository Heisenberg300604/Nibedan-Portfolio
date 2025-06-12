"use client"
import { Github, ExternalLink, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: any;
  features: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full border border-primary/10 backdrop-blur-sm bg-gradient-to-br from-card/80 to-card/40 hover:from-card/90 hover:to-card/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Image Section with Advanced Styling */}
        {project.image && (
  <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
    <motion.div
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full h-full"
    >
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        width={800}
        height={450}
        priority={index < 2} // Only prioritize first few images for performance
      />
    </motion.div>
    
    {/* Overlay gradient for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Floating tag indicators */}
    <div className="absolute top-4 left-4 flex gap-2">
      <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
        Project #{project.id}
      </div>
    </div>

    {/* Project quick actions overlay */}
    <motion.div 
      className="absolute top-4 right-4 flex gap-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        <Github className="h-4 w-4" />
      </a>
      {project.demo && (
        <a 
          href={project.demo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/80 backdrop-blur-sm text-primary-foreground p-2 rounded-full hover:bg-primary transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </motion.div>
  </div>
)}
        
        <CardContent className="p-6 relative">
          {/* Title and Description */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {project.description}
            </p>
          </div>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/20 text-primary text-xs rounded-full font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Features Toggle */}
          <div className="mb-6">
            <motion.button 
              onClick={() => setShowFeatures(!showFeatures)}
              className="flex items-center justify-between w-full text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200 bg-primary/5 hover:bg-primary/10 rounded-lg px-4 py-2 border border-primary/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Key Features
              </span>
              <motion.div
                animate={{ rotate: showFeatures ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {showFeatures && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border border-muted/20">
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <motion.a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-all duration-200 text-sm font-medium bg-muted/20 hover:bg-muted/40 px-4 py-2 rounded-lg border border-muted/20 hover:border-muted/40 group/link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-200" />
              GitHub
            </motion.a>
            
            {project.demo && (
              <motion.a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg group/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-4 w-4 mr-2 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-transform duration-200" />
                Live Demo
              </motion.a>
            )}
          </div>
        </CardContent>

        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </Card>
    </motion.div>
  );
};


export default ProjectCard;