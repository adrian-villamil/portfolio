const experiences = [
  {
    company: "Metrópolis",
    role: "Frontend Developer",
    duration: "Feb 2025 - Dec 2025",
    achievements: [
      "Architected and developed interactive user interfaces using Next.js, Tailwind CSS, and shadcn/ui, improving overall application performance and aesthetics.",
      "Streamlined data administration by creating custom modular components, allowing users to visualize and manage complex information more efficiently.",
      "Implemented type-safe development workflows with TypeScript and validated complex data structures using Zod to ensure production stability.",
    ],
  },
  {
    company: "BitPointer SAS",
    role: "Frontend Developer",
    duration: "Feb 2023 - Dec 2023",
    achievements: [
      "Engineered high-performance dashboards using Material UI to manage and display large-scale datasets for business intelligence.",
      "Developed interactive diagrams and data visualization tools, integrating business logic into the frontend for a more engaging user experience.",
      "Managed complex form states and client-side validation using React Hook Form and Yup, reducing form submission errors by providing real-time feedback.",
    ],
  },
  {
    company: "Ingecinco Ltda",
    role: "Frontend Developer",
    duration: "Jul 2021 - Sep 2022",
    achievements: [
      "Designed and implemented modern, responsive UIs from scratch using React.js, focusing on delivering a clean and intuitive user experience for company-specific business tools.",
      "Collaborated on the modernization of legacy interfaces, transforming them into high-fidelity web applications with a focus on usability.",
      "Ensured cross-browser compatibility and mobile-first responsiveness across all developed features.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-balance">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative border-l-2 border-border pl-8 transition-colors hover:border-primary"
            >
              {/* Timeline dot */}
              <div className="absolute -left-2.25 top-0 h-4 w-4 rounded-full border-2 border-border bg-background transition-colors group-hover:border-primary group-hover:bg-primary" />

              <div className="space-y-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {experience.role}
                    </h3>
                    <p className="text-lg text-primary">{experience.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground md:text-base">
                    {experience.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
