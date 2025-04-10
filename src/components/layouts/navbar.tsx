"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, FileDown, Coffee } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Hackathons', path: '/hackathons' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gradient-primary">Nibedan Pati</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location === link.path
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 hover:text-amber-800"
                size="sm"
                asChild
              >
                <a href="https://buymeacoffee.com/heisenberg300604" target="_blank" rel="noopener noreferrer">
                  <Coffee className="w-4 h-4" />
                  Buy me a coffee
                </a>
              </Button>
              <Button
                variant="default"
                className="flex items-center gap-2"
                size="sm"
                asChild
              >
                <a href="/nibedan-resume.pdf" download>
                  <FileDown className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground p-2 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4 py-6 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={closeMenu}
                  className={`text-sm font-medium transition-colors p-2 ${
                    location === link.path
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 hover:text-amber-800"
                asChild
              >
                <a href="https://buymeacoffee.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                  <Coffee className="w-4 h-4" />
                  Buy me a coffee
                </a>
              </Button>
              <Button
                variant="default"
                className="flex items-center justify-center gap-2 w-full mt-2"
                asChild
              >
                <a href="/nibedan-resume.pdf" download>
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;