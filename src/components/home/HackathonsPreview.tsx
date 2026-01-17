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
          <h3 className="text-2xl font-bold mb-2">5x Hackathon Winner</h3>
          <p className="text-primary font-semibold mb-4">Smart India Hackathon Grand Finalist 🏆</p>
          <p className="text-muted-foreground mb-6">
            Including being a Grand Finalist at Smart India Hackathon, India's largest hackathon!
            I've collaborated with talented teams to create innovative solutions like ComminuSense
            for NMDC, AI-powered traffic management, and gamified education platforms.
            These experiences have sharpened my problem-solving skills and ability to deliver under pressure.
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