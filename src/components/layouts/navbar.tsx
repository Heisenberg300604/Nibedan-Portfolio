"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Coffee } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Hackathons", href: "/hackathons" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/90 backdrop-blur-md py-2 shadow-lg border-border/10" 
          : "bg-transparent py-4 border-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Nibedan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-primary px-3 py-2 rounded-md",
                pathname === item.href 
                  ? "text-primary font-medium bg-primary/10" 
                  : "text-muted-foreground hover:bg-accent/50"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            asChild 
            size="sm" 
            className="rounded-full bg-amber-600 hover:bg-amber-700 text-white"
          >
            <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer">
              <Coffee className="h-4 w-4 mr-2" />
              Buy Me Coffee
            </a>
          </Button>
          <Button 
            asChild 
            size="sm" 
            variant="outline" 
            className="rounded-full border-primary text-primary hover:bg-primary/10"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          {/* <ModeToggle /> */}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden space-x-4">
          {/* <ModeToggle /> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l-border/20">
              <nav className="flex flex-col space-y-4 mt-12">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg transition-colors hover:text-primary px-4 py-3 rounded-md",
                      pathname === item.href 
                        ? "text-primary font-medium bg-primary/10" 
                        : "text-muted-foreground hover:bg-accent/50"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  asChild 
                  className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer">
                    <Coffee className="h-4 w-4 mr-2" />
                    Buy Me Coffee
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full mt-2 border-primary text-primary hover:bg-primary/10"
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}