import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Web Developer Intern',
    company: 'Eterna Infotech Pvt Ltd',
    location: 'Remote',
    period: 'November 2024 - Present',
    description: [
      'Enhanced MTS LMS website by improving both frontend and backend functionality using React, Sass, MUI, and MySQL.',
      'Actively collaborated with cross-functional teams, resolving bugs, implementing new features, and conducting thorough code reviews through Jira and GitHub.',
      'Optimized APIs with Postman and MySQL Workbench, ensuring smooth data flow and improved system performance.',
    ],
    tags: ['React', 'Sass', 'MUI', 'MySQL', 'GitHub', 'Jira', 'Postman'],
  },
  {
    id: 2,
    title: 'Open Source Contributor',
    company: 'Geek Room and Namespace BPIT',
    location: 'Remote',
    period: 'November 2024 - Present',
    description: [
      'Developed responsive React pages for both mobile and desktop views, collaborating with Figma for UI design.',
      'Contributed to the Geek Room community Pears hackathon website by enhancing functionality.',
      'Identified, troubleshooted, and fixed open issues on the Namespace GitHub repository, improving overall platform performance and user engagement.',
    ],
    tags: ['React', 'Responsive Design', 'GitHub', 'Open Source', 'Figma'],
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } gap-8`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            
            {/* Date section */}
            <div className="md:w-1/2 flex items-center justify-start md:justify-end px-6 pt-0.5">
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="h-4 w-4 mr-1 text-primary" />
                {exp.period}
              </div>
            </div>
            
            {/* Content section */}
            <div className="md:w-1/2 px-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <h4 className="text-primary mt-1">{exp.company}</h4>
                
                <div className="flex items-center text-muted-foreground text-sm mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {exp.location}
                </div>
                
                <ul className="mt-4 space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {desc}
                    </li>
                  ))}
                </ul>
                
                {exp.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;