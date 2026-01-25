import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/theme-toggle";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-lg font-semibold tracking-tight text-primary">
              Portfolio
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/adrian-villamil?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/adrian-felipe-villamil-arias-260736222/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:adrianvillamil94@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
