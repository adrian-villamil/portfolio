import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-3 text-balance">
                {"Hi, I'm Adrian Villamil. I build web products."}
              </h1>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Frontend Developer specialized in React.js and Next.js. 3+ years
              of experience creating seamless user interfaces with modern CSS
              frameworks.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-md rounded-lg overflow-hidden border-2 border-border shadow-lg">
              <Image
                src="/images/hero-photo.png"
                alt="Profile photo"
                width={928}
                height={1120}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
