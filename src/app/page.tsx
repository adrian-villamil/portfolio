import { About } from "@/components/home/about";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
    </main>
  );
}
