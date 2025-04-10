"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background gradient */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/30 blur-[80px] -z-10"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-secondary/30 blur-[80px] -z-10"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a project in mind? Looking for a dedicated developer to join your team?
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
