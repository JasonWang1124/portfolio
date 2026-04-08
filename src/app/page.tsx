import Nav from '@/components/Nav';
import ParticleCanvas from '@/components/ParticleCanvas';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import GithubIcon from '@/components/GithubIcon';
import {
  profile, experience, education, languages, frameworks,
  aiItems, dataLayer, infrastructure, projects,
} from '@/data/profile';

function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-center px-6 lg:px-12 relative z-10 max-w-[1200px] mx-auto pt-24 pb-16">
      <p className="font-mono text-sm text-cyan tracking-[0.15em] uppercase mb-6 animate-[fadeUp_0.8s_0.3s_both]">
        <span className="opacity-50">&gt; </span>{profile.title}
      </p>
      <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-6 animate-[fadeUp_0.8s_0.5s_both]">
        <span>{profile.name.split(' ')[0]} </span>
        <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
          {profile.name.split(' ')[1]}
        </span>
      </h1>
      <p className="font-mono text-lg lg:text-xl text-text-dim font-light mb-6 animate-[fadeUp_0.8s_0.7s_both]">
        {profile.chineseName} — {profile.subtitle}
      </p>
      <div className="flex flex-wrap gap-2 mb-7 animate-[fadeUp_0.8s_0.85s_both]">
        {profile.badges.map((b) => (
          <span key={b} className="font-mono text-xs px-3 py-1.5 border border-cyan-dim rounded-full text-cyan tracking-wide">
            {b}
          </span>
        ))}
      </div>
      <p className="text-lg text-text-dim max-w-2xl leading-relaxed animate-[fadeUp_0.8s_0.9s_both]">
        {profile.heroDesc}
      </p>
      <div className="flex flex-wrap gap-3 mt-8 animate-[fadeUp_0.8s_1.1s_both]">
        <a href={`mailto:${profile.email}`} className="font-mono text-sm text-text-dim border border-border rounded-lg px-5 py-2.5 inline-flex items-center gap-2 hover:text-cyan hover:border-cyan-dim hover:bg-cyan/5 transition-all">
          <span className="text-base">&#x2709;</span> {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-text-dim border border-border rounded-lg px-5 py-2.5 inline-flex items-center gap-2 hover:text-cyan hover:border-cyan-dim hover:bg-cyan/5 transition-all">
          <GithubIcon /> JasonWang1124
        </a>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeUp_0.8s_1.2s_both]">
        <span className="font-mono text-[0.65rem] text-text-muted tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyan to-transparent animate-[pulse-line_2s_infinite]" />
      </div>
    </header>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="01" label="Experience" title="走過的" highlight="戰場" />
      <Reveal className="mb-12 pl-6 lg:pl-8 border-l-[3px] border-cyan bg-cyan/[0.03] rounded-r-lg py-6 pr-8">
        <p className="text-base text-text-dim leading-relaxed">
          電機工程出身，靠自學跨入軟體開發。從小公司全端磨練到中型公司技術決策，技術棧從{' '}
          <strong className="text-cyan font-semibold">PHP → Go → Python</strong> 一路進化，每次轉換都是為了解決更大規模的問題。
        </p>
      </Reveal>

      <div className="relative pl-8 lg:pl-10">
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan to-violet" aria-hidden="true" />
        {experience.map((exp, i) => (
          <Reveal key={i} delay={i * 100} className="relative pl-8 pb-12 last:pb-0">
            <div className={`absolute -left-8 lg:-left-10 top-1.5 w-3 h-3 rounded-full border-2 border-cyan z-10 transition-all ${exp.current ? 'bg-cyan shadow-[0_0_30px_rgba(0,229,255,0.3)]' : 'bg-bg'}`} aria-hidden="true" />
            <div className="bg-bg-card border border-border rounded-xl p-6 lg:p-8 hover:border-cyan-dim hover:translate-x-1.5 transition-all">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-sm text-text-muted mt-0.5">{exp.industry}</p>
                  <p className="font-mono text-sm text-cyan mt-1">{exp.role}</p>
                </div>
                <span className="font-mono text-xs text-text-muted tracking-widest uppercase border border-border rounded px-3 py-1 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="font-mono text-xs text-violet tracking-wide opacity-80 mb-3">// {exp.phase}</p>
              <p className="text-sm text-text-dim leading-relaxed mb-4">{exp.desc}</p>
              <div className="flex flex-col gap-2 mb-5">
                {exp.achievements.map((a, j) => (
                  <div key={j} className="text-sm text-text-dim flex items-baseline gap-2.5">
                    <span className="text-cyan text-xs flex-shrink-0">&#x25B8;</span>
                    <span dangerouslySetInnerHTML={{ __html: a.replace(/([^，、。]+(?:超過 \d+%|百萬級[^，]*|多雲架構|Testing Framework|TDD[^，]*|跨平台部署|Docker 容器化))/g, '<strong class="text-text font-medium">$1</strong>') }} />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((t) => (
                  <span key={t} className="font-mono text-xs px-2.5 py-1 bg-cyan/[0.06] border border-cyan/[0.12] rounded text-text-dim">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 bg-bg-card border border-border rounded-xl p-6 lg:p-8 flex items-center gap-8 flex-wrap">
        <span className="font-mono text-xs text-text-muted tracking-[0.15em]">EDUCATION</span>
        <div className="flex-1 min-w-[200px]">
          <p className="text-lg font-bold">{education.school}</p>
          <p className="text-sm text-text-dim mt-1">
            {education.degree} <span className="font-mono text-xs text-text-muted ml-2">{education.period}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {education.certs.map((c) => (
            <span key={c} className="font-mono text-[0.65rem] px-2 py-1 border border-border rounded text-text-muted">{c}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function LanguagesSection() {
  return (
    <section id="languages" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="02" label="Languages" title="我說的" highlight="語言" />
      <Reveal delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {languages.map((lang, i) => (
            <div key={lang.name} className="bg-bg-card p-6 relative group hover:bg-bg-elevated transition-colors" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan to-violet scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" aria-hidden="true" />
              <h3 className="font-mono text-xl font-bold mb-1">{lang.name}</h3>
              <p className="font-mono text-xs text-cyan tracking-wide mb-3">{lang.meta}</p>
              <p className="text-sm text-text-dim leading-relaxed">{lang.desc}</p>
              <div className="mt-4 h-[3px] bg-border rounded-sm overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan to-violet rounded-sm transition-[width] duration-1000 ease-out" style={{ width: `${lang.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function FrameworksSection() {
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
          <span className="text-cyan">$</span> <span className="text-violet">echo</span> <span className="text-green-300">&quot;Backend: Go + Gin + GORM&quot;</span><br />
          <span className="text-text">Backend: Go + Gin + GORM</span><br />
          <span className="text-cyan">$</span> <span className="text-violet">echo</span> <span className="text-green-300">&quot;Frontend: React + Flutter + Vite&quot;</span><br />
          <span className="text-text">Frontend: React + Flutter + Vite</span><br />
          <span className="text-cyan">$</span> <span className="text-violet">echo</span> <span className="text-green-300">&quot;AI: LangChain + RAG + Azure STT&quot;</span><br />
          <span className="text-text">AI: LangChain + RAG + Azure STT</span><br />
          <span className="text-cyan">$</span> <span className="text-text-muted"># 不只是寫程式，而是建構系統。</span>
          <span className="inline-block w-2 h-4 bg-cyan align-text-bottom animate-[blink_1s_step-end_infinite]" />
        </div>
      </Reveal>
    </section>
  );
}

function AISection() {
  return (
    <section id="ai" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="04" label="AI / Machine Learning" title="讓機器" highlight="理解世界" />
      <div className="relative pl-8 lg:pl-12">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-violet to-transparent" aria-hidden="true" />
        {aiItems.map((item, i) => (
          <Reveal key={i} delay={i * 100} className="relative mb-14 last:mb-0">
            <div className="absolute -left-8 lg:-left-12 top-2 w-2 h-2 border-2 border-cyan rounded-full bg-bg hover:bg-cyan hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all" aria-hidden="true" />
            <p className="font-mono text-xs text-violet tracking-widest uppercase mb-2">{item.label}</p>
            <h3 className="text-xl font-bold mb-2">{item.heading}</h3>
            <p className="text-sm text-text-dim leading-relaxed">
              {item.text.split(new RegExp(`(${item.highlights.map(h => h.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&')).join('|')})`)).map((part, j) =>
                (item.highlights as readonly string[]).includes(part)
                  ? <code key={j} className="font-mono text-sm text-cyan bg-cyan/10 px-1.5 py-0.5 rounded">{part}</code>
                  : <span key={j}>{part}</span>
              )}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function DataSection() {
  const categories = [
    { key: 'relational' as const, icon: '☰', color: 'cyan' },
    { key: 'vector' as const, icon: '◎', color: 'violet' },
    { key: 'cache' as const, icon: '⇄', color: 'magenta' },
  ];

  return (
    <section id="data" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="05" label="Data Layer" title="資料的" highlight="多維度儲存" />
      <Reveal delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(({ key, icon }) => {
            const cat = dataLayer[key];
            return (
              <div key={key} className="bg-bg-card border border-border rounded-xl p-8 relative overflow-hidden hover:border-cyan-dim hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all">
                <span className="absolute top-4 right-5 text-4xl opacity-15" aria-hidden="true">{icon}</span>
                <h3 className="font-mono text-xs text-cyan tracking-[0.15em] uppercase mb-5">{cat.title}</h3>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-baseline gap-3">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-2 ${key === 'relational' ? 'bg-cyan' : key === 'vector' ? 'bg-violet' : 'bg-magenta'}`} />
                      <span className="font-mono text-sm font-semibold whitespace-nowrap">{item.name}</span>
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

function InfraSection() {
  return (
    <section id="infra" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="06" label="Infrastructure" title="雲端上的" highlight="骨架" />
      <Reveal delay={100} className="flex flex-col gap-6">
        {infrastructure.map((block) => (
          <div key={block.label} className="bg-bg-card border border-border rounded-xl p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start hover:border-violet-dim transition-colors">
            <div>
              <p className="font-mono text-sm font-semibold text-violet">{block.label}</p>
              <p className="font-mono text-xs text-text-muted mt-1">{block.sub}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {block.chips.map((chip) => (
                <span key={chip} className="font-mono text-xs px-3 py-1.5 bg-violet/[0.08] border border-violet/15 rounded text-text-dim hover:text-violet hover:border-violet-dim hover:bg-violet/15 transition-colors">
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

function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="07" label="Notable Projects" title="落地的" highlight="作品" />
      <Reveal delay={100}>
        <div className="flex flex-col gap-px bg-border border border-border rounded-lg overflow-hidden">
          {projects.map((proj) => (
            <div key={proj.name} className="bg-bg-card grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-4 md:gap-8 items-center p-6 lg:px-10 hover:bg-bg-elevated transition-colors group">
              <h3 className="font-mono text-base font-bold group-hover:text-cyan transition-colors">{proj.name}</h3>
              <p className="text-sm text-text-dim">{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {proj.stack.map((s) => (
                  <span key={s} className="font-mono text-[0.65rem] px-2 py-1 border border-border rounded text-text-muted whitespace-nowrap">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center">
      <p className="font-mono text-xs text-text-muted">
        Jason Wang &copy; 2026
        <span className="mx-1">|</span>
        <a href={`mailto:${profile.email}`} className="hover:text-cyan transition-colors">{profile.email}</a>
        <span className="mx-1">|</span>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">GitHub</a>
      </p>
      <p className="font-mono text-xs text-text-muted">
        <span className="text-cyan">&gt;</span> Built with passion, deployed with precision.
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      {/* Decorative layers */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-[1] pointer-events-none scanline"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.008) 2px, rgba(0,229,255,0.008) 4px)',
        }}
        aria-hidden="true"
      />
      <ParticleCanvas />

      <a href="#experience" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-cyan focus:text-bg focus:px-4 focus:py-2 focus:rounded focus:font-mono focus:text-sm">
        跳至主要內容
      </a>

      <Nav />
      <main>
        <Hero />
        <ExperienceSection />
        <LanguagesSection />
        <FrameworksSection />
        <AISection />
        <DataSection />
        <InfraSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
