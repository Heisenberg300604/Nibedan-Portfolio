"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../Common/SectionHeading';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase,
  SiGit, SiGithub, SiFigma, SiPostman, SiJira,SiAppwrite
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa'; // from Font Awesome

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'NextJS', icon: SiNextdotjs },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML/CSS', icon: SiHtml5 },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'Redux', icon: SiRedux },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Appwrite', icon: SiAppwrite },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: FaCode },
      { name: 'Figma', icon: SiFigma },
      { name: 'Postman', icon: SiPostman },
      { name: 'Jira', icon: SiJira },
    ],
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
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 hover:bg-primary/10 group"
                  >
                    <skill.icon className="h-8 w-8 mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                  </div>
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