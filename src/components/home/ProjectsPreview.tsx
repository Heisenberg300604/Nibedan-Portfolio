"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../Common/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import techHive from "@/public/TechHive.png"
import budgetMap from "@/public/images/BudgetMap.png"
import Image from 'next/image';

const projectImages = {
  techhive: techHive,
  budgetmap: budgetMap,
};

const projects = [
  {
    id: 1,
    title: 'TechHive: E-Commerce',
    description: 'A comprehensive e-commerce platform with secure login, product catalog, and payment integration.',
    tags: ['React', 'Redux', 'Firebase', 'TailwindCSS', 'RazorPay'],
    github: 'https://github.com/Heisenberg300604/',
    demo: '#',
    image: projectImages.techhive
  },
  {
    id: 2,
    title: 'BudgetMap - Expense Tracker',
    description: 'A responsive expense tracking platform with dynamic dashboard for expense categorization and budget visualization.',
    tags: ['MERN', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'JWT'],
    github: 'https://github.com/Heisenberg300604/',
    demo: '#',
    image: projectImages.budgetmap
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full border border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/50">
                {project.image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      width={800}
                      height={450}
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
                  
                  <div className="flex items-center space-x-4">
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