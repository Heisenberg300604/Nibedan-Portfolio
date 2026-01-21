"use client"
import { motion } from 'framer-motion';
import SectionHeading from '../Common/SectionHeading';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import nibedanPic from '@/public/nibedan.png';

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
    { value: '5x', label: 'Hackathons Won' },
    { value: '2+', label: 'Years Coding' },
    { value: '15+', label: 'Projects Completed' },
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
                <Image
                  src={nibedanPic}
                  alt="Nibedan Picture"
                  className="object-cover h-full w-full rounded-2xl"
                  priority
                />
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 p-6 rounded-xl bg-card/95 backdrop-blur-md border-2 border-primary/30 shadow-2xl">
              <div className="flex gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary drop-shadow-lg">{stat.value}</div>
                    <div className="text-xs text-foreground font-medium">{stat.label}</div>
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
                I'm a passionate <span className="text-primary">Full Stack Developer</span> & <span className="text-primary">SIH Grand Finalist</span>
              </h3>

              <p className="text-muted-foreground">
                I specialize in <strong>Web Development, Mobile Development, and DevOps</strong>, building scalable and intuitive applications. With expertise in React, Next.js, React Native, and AWS, I transform ideas into functional, visually appealing, and production-ready solutions.
              </p>

              <p className="text-muted-foreground">
                As a <strong>5-time hackathon winner</strong> and <strong>Smart India Hackathon Grand Finalist</strong> (one of India's biggest hackathons), I've proven my ability to deliver innovative solutions under pressure. Currently pursuing BTech in Information Technology at BPIT, I'm constantly expanding my skills in cloud computing, system design, and modern development practices.
              </p>

              <p className="text-muted-foreground">
                Beyond coding, I share my knowledge on my <strong>YouTube channel with 200+ subscribers</strong>, and contribute as a Web Developer at GeekRoom and to Open Source Repositories. I've also built my own NPM package and Chrome extension!
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