import Nav from '@/components/Nav';
import LazyParticles from '@/components/LazyParticles';
import {
  Hero,
  Experience,
  Languages,
  Frameworks,
  AI,
  Data,
  Infrastructure,
  Projects,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      {/* Background decorations */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.008) 2px, rgba(0,229,255,0.008) 4px)',
        }}
        aria-hidden="true"
      />
      <LazyParticles />

      {/* Skip to content (a11y) */}
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-cyan focus:text-bg focus:px-4 focus:py-2 focus:rounded focus:font-mono focus:text-sm"
      >
        跳至主要內容
      </a>

      <Nav />

      <main>
        <Hero />
        <Experience />
        <Languages />
        <Frameworks />
        <AI />
        <Data />
        <Infrastructure />
        <Projects />
      </main>

      <Footer />
    </>
  );
}
