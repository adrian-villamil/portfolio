export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
        <div className="space-y-6 text-foreground/90">
          <p className="text-base leading-relaxed">
            With a solid background of 3+ years in frontend development, I help
            businesses bring their digital visions to life. From architecting
            scalable components in React to optimizing performance with Next.js,
            I focus on creating interfaces that are not only beautiful but also
            functional.
          </p>
          <p className="text-base leading-relaxed">
            My toolkit includes Material UI and Tailwind CSS for rapid,
            responsive styling, and I’m always eager to tackle new challenges
            that push the boundaries of {"what's"} possible in the browser.
          </p>
        </div>
      </div>
    </section>
  );
};
