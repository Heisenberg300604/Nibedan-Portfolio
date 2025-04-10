"use client"
import { motion } from 'framer-motion';
import SectionHeading from '../Common/SectionHeading';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const stats = [
    { value: '4+', label: 'Hackathons Won' },
    { value: '1+', label: 'Years Coding' },
    { value: '10+', label: 'Projects Completed' },
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="container mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about me and my journey as a web developer"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative overflow-hidden rounded-2xl animated-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay"></div>
              <div className="h-full w-full bg-muted rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient">NP</span>
                {/* <img src="/nibedan.png" alt="Profile" width={200} height={200} /> */}
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 p-6 glass-card">
              <div className="flex gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Text */}
          <div className="space-y-6">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeInVariants}
            >
              <h3 className="text-2xl font-semibold text-foreground">
                I'm a passionate <span className="text-primary">Full Stack Web Developer</span> based in Ghaziabad
              </h3>
              
              <p className="text-muted-foreground">
                I am a passionate web developer with knowledge in React and JavaScript. I specialize in building seamless and intuitive web applications, transforming ideas into functional and visually appealing realities.
              </p>
              
              <p className="text-muted-foreground">
                Currently, I am expanding my skill set by learning Java and exploring various aspects of development such as React Native, Python, and more. As an undergraduate BTech student in Information Technology at BPIT, I'm constantly seeking to grow my technical abilities.
              </p>
              
              <p className="text-muted-foreground">
                I'm especially proud of my achievements in hackathons, having won 4 competitions, and my contributions as a WebDeveloper at GeekRoom and as a contributor to GSSOC'24.
              </p>
            </motion.div>
            
            <motion.div
              className="pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeInVariants}
            >
              <Link 
                href="/experience" 
                className="inline-flex items-center text-primary hover:underline group"
              >
                View my experience
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;