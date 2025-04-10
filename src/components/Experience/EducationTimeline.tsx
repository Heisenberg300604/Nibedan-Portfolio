import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  achievements?: string[];
}

const education: EducationItem[] = [
  {
    id: 1,
    institution: 'Bhagwan Parshuram Institute Of Technology',
    degree: 'Bachelor of Technology in Information and Technology',
    location: 'Rohini Sector-17, New Delhi',
    period: 'Sep 2023 - May 2027',
  },
  {
    id: 2,
    institution: 'Arwachin International School',
    degree: 'CBSE Class 12th',
    location: 'Dilshad Garden, New Delhi',
    period: '2008 - April 2023',
    achievements: ['12th - 94.6%', '10th - 96.4%'],
  },
];

const EducationTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
      
      <div className="space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
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
                {edu.period}
              </div>
            </div>
            
            {/* Content section */}
            <div className="md:w-1/2 px-6">
              <div className="glass-card p-6">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{edu.institution}</h3>
                </div>
                
                <h4 className="text-primary">{edu.degree}</h4>
                
                <div className="flex items-center text-muted-foreground text-sm mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {edu.location}
                </div>
                
                {edu.achievements && (
                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-foreground mb-2">Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
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

export default EducationTimeline;