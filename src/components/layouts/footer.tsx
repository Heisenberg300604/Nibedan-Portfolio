import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Nibedan Pati
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Full Stack Developer skilled in React, Next.js, TypeScript, and more.
              4X Hackathon Winner. Always expanding my skills and seeking new challenges.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <nav className="flex flex-col space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "Projects", href: "/projects" },
                  { name: "Experience", href: "/experience" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:nibedanpati@gmail.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nibedan Pati. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}