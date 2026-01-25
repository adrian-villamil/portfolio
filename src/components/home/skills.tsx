import { Badge } from "../ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools & Libraries",
    skills: ["Git", "React Hook Form", "Zustand", "Zod", "Yup", "Axios"],
  },
  {
    title: "UI Components",
    skills: ["Shadcn UI", "Material UI"],
  },
  {
    title: "Backend & Database",
    skills: ["Prisma", "Drizzle ORM", "Supabase", "PostgreSQL", "REST APIs"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-balance dark:text-primary">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold dark:text-secondary-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="text-sm py-1.5 px-3 rounded-md"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
