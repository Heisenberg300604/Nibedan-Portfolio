"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../Common/SectionHeading';

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'NextJS', 'Tailwind CSS', 'Redux'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Firebase', 'Appwrite'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Jira'],
  },
];

const SkillsPreview = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies and tools I've worked with"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background/80 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/skills">
              View all skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;