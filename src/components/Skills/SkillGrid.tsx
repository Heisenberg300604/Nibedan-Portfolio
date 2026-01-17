"use client"
import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
  SiRedux, SiTailwindcss, SiBootstrap, SiSass, SiMui,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase,
  SiGit, SiGithub, SiFigma, SiPostman,
  SiJira, SiCanva, SiTypescript, SiC, SiWordpress, SiAppwrite, SiFastapi,
  SiFlask,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiRender,
  SiRailway,
  SiStreamlit,
  SiSocketdotio,
  SiIota,
  SiArduino,
  SiAmazondynamodb,
  SiGitlab,
  SiFlutter,
  SiDocker,
  SiNginx,
  SiRedis,
  SiAmazonwebservices,
  SiAmazonec2,
  SiAmazons3,
  SiAwslambda,
  SiKubernetes,
  SiGithubactions
} from 'react-icons/si';
import { Card } from '@/components/ui/card';
import { FaCode } from 'react-icons/fa'; // from Font Awesome
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    icon: React.ElementType;
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'ReactJS', icon: SiReact },
      { name: 'NextJS', icon: SiNextdotjs },
      { name: 'Redux', icon: SiRedux },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Sass', icon: SiSass },
      { name: 'Material UI', icon: SiMui },
      { name: 'Streamlit', icon: SiStreamlit },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'ExpressJS', icon: SiExpress },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Appwrite', icon: SiAppwrite },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Socket.io', icon: SiSocketdotio },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: "AWS DynamoDB", icon: SiAmazondynamodb },
      { name: 'Redis', icon: SiRedis },
    ],
  },
  {
    name: 'AWS & Cloud',
    skills: [
      { name: 'AWS', icon: SiAmazonwebservices },
      { name: 'AWS EC2', icon: SiAmazonec2 },
      { name: 'AWS S3', icon: SiAmazons3 },
      { name: 'AWS Lambda', icon: SiAwslambda },
      { name: 'AWS DynamoDB', icon: SiAmazondynamodb },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Nginx', icon: SiNginx },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'C', icon: SiC },
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    name: 'Deployment',
    skills: [
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
      { name: 'Render', icon: SiRender },
      { name: 'Railways', icon: SiRailway },
    ],
  },
  {
    name: 'Mobile App Development',
    skills: [
      { name: 'React Native', icon: SiReact },
      { name: 'Flutter', icon: SiFlutter },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'GitLab', icon: SiGitlab },
      { name: 'VS Code', icon: FaCode },
      { name: 'Figma', icon: SiFigma },
      { name: 'Postman', icon: SiPostman },
      { name: 'Jira', icon: SiJira },
      { name: 'Canva', icon: SiCanva },
    ],
  },
  {
    name: 'Other Skills',
    skills: [
      { name: 'WordPress', icon: SiWordpress },
      { name: 'UI/UX Design', icon: SiFigma },
      { name: 'Arduino', icon: SiArduino },
    ],
  },
];

const SkillGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skillCategories.map((category) => (
        <motion.div
          key={category.name}
          className="glass-card p-6"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold mb-6 text-primary">{category.name}</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {category.skills.map((skill) => (
              <Card
                key={skill.name}
                className="flex flex-col items-center justify-center p-3 hover:bg-primary/10 transition-colors group"
              >
                <skill.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="mt-2 text-xs text-center text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </Card>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillGrid;