import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { dataLayer } from '@/data/profile';

const categories = [
  { key: 'relational' as const, icon: '☰', dotColor: 'bg-cyan' },
  { key: 'vector' as const, icon: '◎', dotColor: 'bg-violet' },
  { key: 'cache' as const, icon: '⇄', dotColor: 'bg-magenta' },
] as const;

export default function Data() {
  return (
    <section id="data" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="05" label="Data Layer" title="資料的" highlight="多維度儲存" />
      <Reveal delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(({ key, icon, dotColor }) => {
            const cat = dataLayer[key];
            return (
              <div
                key={key}
                className="bg-bg-card border border-border rounded-xl p-8 relative overflow-hidden hover:border-cyan-dim hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all"
              >
                <span className="absolute top-4 right-5 text-4xl opacity-15" aria-hidden="true">
                  {icon}
                </span>
                <h3 className="font-mono text-xs text-cyan tracking-[0.15em] uppercase mb-5">
                  {cat.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-baseline gap-3">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-2 ${dotColor}`} />
                      <span className="font-mono text-sm font-semibold whitespace-nowrap">
                        {item.name}
                      </span>
                      <span className="text-xs text-text-muted">— {item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
