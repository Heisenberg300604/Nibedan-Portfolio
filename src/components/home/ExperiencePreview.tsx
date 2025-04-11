"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Building, MapPin } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../Common/SectionHeading';

const experiences = [
  {
    id: 1,
    role: 'Web Developer Intern',
    company: 'Eterna Infotech Pvt Ltd',
    location: 'Remote',
    period: 'November 2024 - Present',
    description: 'Enhanced MTS LMS website by improving both frontend and backend functionality using React, Sass, MUI, and MySQL.',
    responsibilities: [
      'Actively collaborated with cross-functional teams to resolve bugs and implement new features',
      'Conducted thorough code reviews through Jira and GitHub',
      'Optimized APIs with Postman and MySQL Workbench for improved system performance'
    ],
    tags: ['React', 'Sass', 'MUI', 'MySQL', 'Jira', 'GitHub']
  }
];

const ExperiencePreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My journey in the professional world"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="glass-card p-6 mb-8 border border-primary/20 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1 text-primary" />
                  {exp.period}
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <Building className="h-4 w-4 mr-1 text-primary" />
                <h4 className="text-primary">{exp.company}</h4>
              </div>
              
              <div className="flex items-center mb-4 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {exp.location}
              </div>
              
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              
              <ul className="space-y-1 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/experience">
              View full experience <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;
