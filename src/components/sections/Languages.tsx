import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { languages } from '@/data/profile';

export default function Languages() {
  return (
    <section id="languages" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="02" label="Languages" title="我說的" highlight="語言" />
      <Reveal delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {languages.map((lang, i) => (
            <div
              key={lang.name}
              className="bg-bg-card p-6 relative group hover:bg-bg-elevated transition-colors"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div
                className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan to-violet scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400"
                aria-hidden="true"
              />
              <h3 className="font-mono text-xl font-bold mb-1">{lang.name}</h3>
              <p className="font-mono text-xs text-cyan tracking-wide mb-3">{lang.meta}</p>
              <p className="text-sm text-text-dim leading-relaxed">{lang.desc}</p>
              <div className="mt-4 h-[3px] bg-border rounded-sm overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan to-violet rounded-sm transition-[width] duration-1000 ease-out"
                  style={{ width: `${lang.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
