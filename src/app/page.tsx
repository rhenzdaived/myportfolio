import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <Navbar />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={30}>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal delay={90}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Certifications />
      </ScrollReveal>
      <ScrollReveal delay={180}>
        <Contact />
      </ScrollReveal>
    </main>
  );
}
