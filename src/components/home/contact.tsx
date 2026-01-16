import { Button } from "../ui/button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-balance">
            {"Let's Work Together"}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            {
              "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
            }
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="mailto:adrianvillamil94@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </a>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/adrian-villamil?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/adrian-felipe-villamil-arias-260736222/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.instagram.com/adrian_villamil_art/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <footer className="pt-12 text-sm text-muted-foreground">
          <p>© 2026 Adrian Villamil. Frontend Developer.</p>
        </footer>
      </div>
    </section>
  );
};
