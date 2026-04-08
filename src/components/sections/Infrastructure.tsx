import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { infrastructure } from '@/data/profile';

export default function Infrastructure() {
  return (
    <section id="infra" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="06" label="Infrastructure" title="雲端上的" highlight="骨架" />
      <Reveal delay={100} className="flex flex-col gap-6">
        {infrastructure.map((block) => (
          <div
            key={block.label}
            className="bg-bg-card border border-border rounded-xl p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start hover:border-violet-dim transition-colors"
          >
            <div>
              <p className="font-mono text-sm font-semibold text-violet">{block.label}</p>
              <p className="font-mono text-xs text-text-muted mt-1">{block.sub}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {block.chips.map((chip) => (
                <span
                  key={chip}
                  className="font-mono text-xs px-3 py-1.5 bg-violet/[0.08] border border-violet/15 rounded text-text-dim hover:text-violet hover:border-violet-dim hover:bg-violet/15 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
