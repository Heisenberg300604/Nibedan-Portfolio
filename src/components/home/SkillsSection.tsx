"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SkillCard from './SkillCard';
import SkillsData from '../../app/data/skills';
import Link from 'next/link';

const categories = ["All", "Languages", "Frontend", "Backend", "Database", "Tools"];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleSkills, setVisibleSkills] = useState(8);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredSkills = selectedCategory === "All" 
    ? SkillsData 
    : SkillsData.filter(skill => skill.category === selectedCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-14">
          <motion.span 
            className="inline-block text-accent font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            MY EXPERTISE
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Technical Skills
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Leveraging a diverse tech stack to build modern, scalable, and robust web applications that deliver exceptional user experiences.
          </motion.p>
        </div>

        {/* Skills Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full text-sm ${selectedCategory === category ? "bg-accent hover:bg-accent/90" : "hover:text-accent"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        {isClient && (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredSkills.slice(0, visibleSkills).map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <div className="mt-14 text-center">
          {selectedCategory === "All" && visibleSkills < SkillsData.length && (
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                variant="outline" 
                className="border-accent hover:bg-accent/10 text-accent"
                onClick={() => setVisibleSkills(prev => Math.min(prev + 8, SkillsData.length))}
              >
                Load More Skills
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
          
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-8 border-white/5 bg-secondary/30 glass-effect mx-auto max-w-3xl">
              <h3 className="text-2xl font-bold mb-3">Want to see all my technical skills?</h3>
              <p className="text-muted-foreground mb-5">Explore my complete tech stack and proficiency levels</p>
              <Link href="/skills">
                <Button className="bg-primary hover:bg-primary/80">
                  View All Skills <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}