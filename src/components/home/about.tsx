import Image from "next/image";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-balance">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-8 lg:gap-12 items-start">
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <Image
              src="/images/about-photo.png"
              alt="Profile photo"
              width={928}
              height={1120}
              className="w-full h-auto object-cover rounded-lg border border-border shadow-lg"
            />
          </div>
          <div className="space-y-6 text-foreground/90">
            <p className="text-base leading-relaxed">
              I am a dedicated Frontend Developer with over 3 years of
              experience specializing in the{" "}
              <span className="font-medium">React.js</span> ecosystem. My focus
              is on building scalable, type-safe web applications using{" "}
              <span className="font-medium">Next.js</span> and{" "}
              <span className="font-medium">TypeScript</span>, ensuring that
              every project is not only visually stunning but technically
              robust.
            </p>
            <p className="text-base leading-relaxed">
              Throughout my career, I have tackled diverse challenges: from
              developing modern UIs for industrial operations at{" "}
              <span className="font-medium">Ingecinco Ltda</span>, to
              architecting data-heavy dashboards and interactive diagrams at{" "}
              <span className="font-medium">BitPointer SAS</span>. Most
              recently, at <span className="font-medium">Metrópolis</span>, I
              leveraged <span className="font-medium">Tailwind CSS</span> and{" "}
              <span className="font-medium">shadcn/ui</span> to create seamless
              interfaces that simplify complex information management.
            </p>
            <p className="text-base leading-relaxed">
              I am passionate about clean code and efficient state management.
              My toolkit includes{" "}
              <span className="font-medium">React Hook Form</span>,{" "}
              <span className="font-medium">Zod</span>, and{" "}
              <span className="font-medium">Material UI</span>, allowing me to
              build secure, accessible, and high-performance digital products
              that prioritize the user experience.
            </p>
            <Button asChild>
              <a
                href="https://docs.google.com/document/d/1EFRAklhlc9VYt1jLozXZA0n2QZleEC45UrWHbWb_Ck4/export?format=pdf"
                download
                className="inline-flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
