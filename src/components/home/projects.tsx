import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";

const projects = [
  {
    title: "Teslo Shop",
    description:
      "A full-featured e-commerce platform with real-time inventory, payment processing, and order management.",
    image: "/images/teslo-shop.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    link: "https://tienda-teslo-shop-av.vercel.app/",
  },
  {
    title: "Rick and Morty Wiki",
    description:
      "A comprehensive wiki for Rick and Morty fans, featuring character profiles, episode guides, and interactive content.",
    image: "/images/rick-morty-wiki.png",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API",
      "shadcn/ui",
    ],
    link: "https://nextjs-rickmorty-app.vercel.app/",
  },
  {
    title: "Github Profile Finder",
    description:
      "An application that allows users to search for GitHub profiles and view detailed information about repositories, followers, and activity.",
    image: "/images/github-profile.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API"],
    link: "https://github-profile-av.netlify.app/",
  },
  {
    title: "Responsive Web Design Challenges",
    description:
      "A collection of responsive web design challenges to practice and improve your front-end development skills across various devices and screen sizes.",
    image: "/images/responsive-challenges.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://resp-design-challenges.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-balance">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-0">
                <a
                  href={project.link}
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
