"use client"
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
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
  console.log(project.image)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/50">
        {project.image && (
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              width={800} // Add appropriate width
              height={450} // Add appropriate height
            />
          </div>
        )}

        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-5">
            <button
              onClick={() => setShowFeatures(!showFeatures)}
              className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {showFeatures ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Hide features
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Show features
                </>
              )}
            </button>

            {showFeatures && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <h4 className="text-sm font-medium mb-2 text-foreground">Key Features:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          <div className="flex items-center space-x-4 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center"
            >
              <Github className="h-5 w-5 mr-1" />
              <span className="text-sm">GitHub</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                <ExternalLink className="h-5 w-5 mr-1" />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;