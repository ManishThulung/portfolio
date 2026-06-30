import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MouseGlow } from "@/components/MouseGlow";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <MouseGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Stack />
        {/* <Skills /> */}
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
