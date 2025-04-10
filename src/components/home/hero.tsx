"use client"
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = containerRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '1');
        const rotateX = y * 10 * speed;
        const rotateY = -x * 10 * speed;
        
        (el as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden py-20 px-6"
    >
      {/* Abstract background shape */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/20 blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Left content - Text */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient">
                Nibedan Pati
              </h1>
              <p className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">
                Full Stack Web Developer & BTech Student
              </p>
            </motion.div>
            
            <motion.p 
              className="text-muted-foreground text-base md:text-lg max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I'm a passionate web developer with expertise in Web Development, 
              specializing in building seamless and intuitive web applications. 
              Currently expanding my skills with Java, IOT and Gen AI.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View my projects</Link>
              </Button>
              
              <div className="flex items-center gap-4 ml-0 md:ml-4 mt-4 md:mt-0">
                <a 
                  href="https://github.com/Heisenberg300604" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nibedan-pati-2139b3277" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right content - Animated 3D Cards */}
          <div className="lg:col-span-2 relative h-[300px] md:h-[400px]">
            <motion.div
              className="absolute top-0 right-0 w-full h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="parallax glass-card p-6 absolute top-0 right-0 w-64 h-40 md:w-80 md:h-48 flex flex-col justify-center items-center" data-speed="1.5">
                <div className="text-5xl font-bold text-primary mb-2">4x</div>
                <div className="text-sm text-foreground/90 text-center">Hackathon Winner</div>
              </div>
              <div className="parallax glass-card p-6 absolute top-32 md:top-40 right-20 md:right-40 w-64 h-40 md:w-80 md:h-48 flex flex-col justify-center items-center" data-speed="1">
                <div className="text-5xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-foreground/90 text-center">Years of Coding Experience</div>
              </div>
              <div className="parallax glass-card p-6 absolute top-64 md:top-80 right-0 w-64 h-40 md:w-80 md:h-48 flex flex-col justify-center items-center" data-speed="0.5">
                <div className="text-5xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-foreground/90 text-center">Projects Completed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
        <motion.p 
          className="text-xs text-foreground/40 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          Scroll down
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
