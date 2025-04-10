"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../Common/SectionHeading';

const experiences = [
  {
    id: 1,
    role: 'Web Developer Intern',
    company: 'Eterna Infotech Pvt Ltd',
    period: 'November 2024 - Present',
    description: 'Enhanced MTS LMS website by improving both frontend and backend functionality using React, Sass, MUI, and MySQL.',
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
              className="glass-card p-6 mb-8"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {exp.period}
                </div>
              </div>
              <h4 className="text-primary mb-3">{exp.company}</h4>
              <p className="text-muted-foreground">{exp.description}</p>
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