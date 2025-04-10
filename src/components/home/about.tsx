"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Award, 
  Briefcase, 
  GraduationCap,
  MapPin
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I&apos;m a Full Stack Developer and Hackathon Enthusiast currently pursuing my B.Tech in IT from BPIT, graduating in 2027. With a passion for building innovative web applications, I specialize in React, Next.js, TypeScript, and modern backend technologies.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              My journey in tech has been driven by a desire to solve real-world problems through code. I&apos;ve had the privilege of contributing to open-source projects, winning hackathons, and working with talented teams to build impactful applications.
            </p>
            
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary" />
                <span>Ghaziabad, Uttar Pradesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap size={20} className="text-primary" />
                <span>B.Tech in IT (BPIT, 2027)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase size={20} className="text-primary" />
                <span>Web Developer at GeekRoom</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code size={20} className="text-primary" />
                <span>Open Source Contributor at GSSOC&apos;24</span>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <Button asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border border-primary/10 bg-gradient-to-b from-card/50 to-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Full Stack Developer</h3>
                <p className="mt-2 text-muted-foreground">
                  Building complete web applications from front-end to back-end with modern technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border border-primary/10 bg-gradient-to-b from-card/50 to-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Hackathon Enthusiast</h3>
                <p className="mt-2 text-muted-foreground">
                  4X Hackathon Winner with experience building innovative solutions under pressure.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border border-primary/10 bg-gradient-to-b from-card/50 to-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Industry Experience</h3>
                <p className="mt-2 text-muted-foreground">
                  Professional experience working at GeekRoom and completing internships.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border border-primary/10 bg-gradient-to-b from-card/50 to-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Open Source</h3>
                <p className="mt-2 text-muted-foreground">
                  Active contributor to open-source projects, including GSSOC&apos;24.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}