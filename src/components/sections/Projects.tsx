import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/data/profile';

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="07" label="Notable Projects" title="落地的" highlight="作品" />
      <Reveal delay={100}>
        <div className="flex flex-col gap-px bg-border border border-border rounded-lg overflow-hidden">
          {projects.map((proj) => (
            <Link
              key={proj.slug}
              href={`/projects/${proj.slug}`}
              className="bg-bg-card grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-4 md:gap-8 items-center p-6 lg:px-10 hover:bg-bg-elevated transition-colors group no-underline"
            >
              <h3 className="font-mono text-base font-bold group-hover:text-cyan transition-colors">
                {proj.name}
              </h3>
              <p className="text-sm text-text-dim">{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[0.65rem] px-2 py-1 border border-border rounded text-text-muted whitespace-nowrap"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
