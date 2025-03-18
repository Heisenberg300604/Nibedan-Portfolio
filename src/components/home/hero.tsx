"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Award, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      // Draw connections between close particles
      drawConnections();
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    resizeCanvas();
    drawParticles();
    
    window.addEventListener("resize", resizeCanvas);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-10"
      />
      
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"
      />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-4">
              <span className="text-sm font-medium">Full Stack Developer</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>Hey, I&apos;m </span>
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Nibedan Pati
            </span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build exceptional digital experiences with modern web technologies.
            4X Hackathon Winner specialized in Full Stack Development.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-2 bg-card px-3 py-1.5 rounded-full">
              <Code size={16} className="text-primary" />
              <span className="text-sm">React & Next.js</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-3 py-1.5 rounded-full">
              <Code size={16} className="text-primary" />
              <span className="text-sm">TypeScript</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-3 py-1.5 rounded-full">
              <Award size={16} className="text-primary" />
              <span className="text-sm">4X Hackathon Winner</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-3 py-1.5 rounded-full">
              <Briefcase size={16} className="text-primary" />
              <span className="text-sm">GSSOC&apos;24 Contributor</span>
            </div>
          </motion.div>
          
          <motion.div
            className="flex justify-center space-x-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild className="rounded-full">
              <a href="/projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full">
              <a href="/contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce"
          onClick={scrollToNext}
        >
          <ChevronDown />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </div>
  );
}