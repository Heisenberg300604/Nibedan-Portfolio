"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../Common/SectionHeading';

const projects = [
  {
    id: 1,
    title: 'TechHive: E-Commerce',
    description: 'A comprehensive e-commerce platform with secure login, product catalog, and payment integration.',
    tags: ['React', 'Redux', 'Firebase', 'TailwindCSS', 'RazorPay'],
    github: 'https://github.com/Heisenberg300604/',
    demo: '#',
  },
  {
    id: 2,
    title: 'BudgetMap - Expense Tracker',
    description: 'A responsive expense tracking platform with dynamic dashboard for expense categorization and budget visualization.',
    tags: ['MERN', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'JWT'],
    github: 'https://github.com/Heisenberg300604/',
    demo: '#',
  },
];

const ProjectsPreview = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Check out some of my recent work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="p-6">
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
                
                <div className="flex items-center space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/projects">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;