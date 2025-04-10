"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../Common/SectionHeading';

const HackathonsPreview = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <SectionHeading 
          title="Hackathon Achievements" 
          subtitle="My journey through competitions and coding challenges"
        />

        <motion.div
          className="glass-card p-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <Trophy className="h-14 w-14 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">4x Hackathon Winner</h3>
          <p className="text-muted-foreground mb-6">
            I've participated in multiple hackathons, collaborating with talented teams 
            to create innovative solutions under tight deadlines. From AI-powered applications 
            to creative web solutions, these experiences have sharpened my problem-solving 
            skills and ability to work efficiently under pressure.
          </p>
          <Button asChild>
            <Link href="/hackathons">
              Explore my hackathon journey <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonsPreview;