import { Mail, MapPin, Github, Linkedin, Calendar, Code, BookOpen, Trophy } from 'lucide-react';
import { SiLeetcode, SiQuora } from 'react-icons/si';
import { FaXTwitter } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Email</h4>
              <a
                href="mailto:nibedanpati@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                nibedanpati@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Location</h4>
              <p className="text-muted-foreground">
                Ghaziabad, Uttar Pradesh 201005
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Working Hours</h4>
              <p className="text-muted-foreground">
                Monday - Friday, 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground">Connect with me</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://github.com/Heisenberg300604/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
          >
            <Github className="h-5 w-5 text-primary mr-3" />
            <span className="text-muted-foreground group-hover:text-primary transition-colors">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nibedan-pati-2139b3277"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
          >
            <Linkedin className="h-5 w-5 text-primary mr-3" />
            <span className="text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
          </a>

          <a
            href="https://x.com/ItsHeisenberg04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
          >
            <FaXTwitter className="h-5 w-5 text-primary mr-3" />
            <span className="text-muted-foreground group-hover:text-primary transition-colors">X (Twitter)</span>
          </a>

          <a
            href="https://www.quora.com/profile/Nibedan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
          >
            <SiQuora className="h-5 w-5 text-primary mr-3" />
            <span className="text-muted-foreground group-hover:text-primary transition-colors">Quora</span>
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground">Coding Profiles</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://leetcode.com/u/Nibedan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
          >
            <SiLeetcode className="h-5 w-5 text-primary mr-3" />
            <span className="text-muted-foreground group-hover:text-primary transition-colors">LeetCode</span>
          </a>

          <a
            href="https://codolio.com/profile/Heisenberg300604"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
          >
            <Code className="h-5 w-5 text-primary mr-3" />
            <span className="text-muted-foreground group-hover:text-primary transition-colors">Codolio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

