import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { frameworks } from '@/data/profile';

export default function Frameworks() {
  return (
    <section id="frameworks" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="03" label="Frameworks & Tools" title="我的" highlight="武器庫" />

      <Reveal delay={100} className="flex flex-col gap-10">
        {Object.values(frameworks).map((group) => (
          <div key={group.label}>
            <p className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase mb-4 pl-4 border-l-2 border-cyan-dim">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className={`font-mono text-sm px-4 py-2 rounded-md border relative overflow-hidden transition-all hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-cyan/10 hover:to-violet/10 ${
                    item.primary
                      ? 'border-cyan-dim text-cyan'
                      : 'border-border text-text-dim hover:text-text hover:border-cyan-dim'
                  }`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal delay={200} className="mt-12 bg-bg-card border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="font-mono text-xs text-text-muted ml-3">jason@dev ~ /projects</span>
        </div>
        <div className="p-6 font-mono text-sm leading-8 text-text-dim">
          <span className="text-cyan">$</span> <span className="text-violet">echo</span>{' '}
          <span className="text-green-300">&quot;Backend: Go + Gin + GORM&quot;</span>
          <br />
          <span className="text-text">Backend: Go + Gin + GORM</span>
          <br />
          <span className="text-cyan">$</span> <span className="text-violet">echo</span>{' '}
          <span className="text-green-300">&quot;Frontend: React + Flutter + Vite&quot;</span>
          <br />
          <span className="text-text">Frontend: React + Flutter + Vite</span>
          <br />
          <span className="text-cyan">$</span> <span className="text-violet">echo</span>{' '}
          <span className="text-green-300">&quot;AI: LangChain + RAG + Azure STT&quot;</span>
          <br />
          <span className="text-text">AI: LangChain + RAG + Azure STT</span>
          <br />
          <span className="text-cyan">$</span>{' '}
          <span className="text-text-muted"># 不只是寫程式，而是建構系統。</span>
          <span className="inline-block w-2 h-4 bg-cyan align-text-bottom animate-[blink_1s_step-end_infinite]" />
        </div>
      </Reveal>
    </section>
  );
}
