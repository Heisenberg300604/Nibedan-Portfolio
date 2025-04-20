import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-secondary/50 mt-20 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Nibedan Pati</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Web Developer, BTech (IT) undergraduate passionate about creating high-quality web applications.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/Heisenberg300604" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nibedan-pati-2139b3277" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:nibedanpati@gmail.com" 
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/NibedanPati" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@TeamSynapse3/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <p className="text-sm text-muted-foreground">Ghaziabad, Uttar Pradesh 201005</p>
            <p className="text-sm text-muted-foreground">nibedanpati@gmail.com</p>
            <Link href="/contact" className="text-sm text-primary hover:text-primary/80 transition-colors inline-block mt-2">
              Send me a message →
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nibedan Pati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;