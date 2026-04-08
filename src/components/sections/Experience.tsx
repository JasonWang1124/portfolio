import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { experience, education } from '@/data/profile';
import { highlightAchievement } from '@/lib/highlight';

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="01" label="Experience" title="走過的" highlight="戰場" />

      <Reveal className="mb-12 pl-6 lg:pl-8 border-l-[3px] border-cyan bg-cyan/[0.03] rounded-r-lg py-6 pr-8">
        <p className="text-base text-text-dim leading-relaxed">
          電機工程出身，靠自學跨入軟體開發。從小公司全端磨練到中型公司技術決策，技術棧從{' '}
          <strong className="text-cyan font-semibold">PHP → Go → Python</strong>{' '}
          一路進化，每次轉換都是為了解決更大規模的問題。
        </p>
      </Reveal>

      <div className="relative pl-8 lg:pl-10">
        <div
          className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan to-violet"
          aria-hidden="true"
        />
        {experience.map((exp, i) => (
          <Reveal key={i} delay={i * 100} className="relative pl-8 pb-12 last:pb-0">
            <div
              className={`absolute -left-8 lg:-left-10 top-1.5 w-3 h-3 rounded-full border-2 border-cyan z-10 transition-all ${
                exp.current
                  ? 'bg-cyan shadow-[0_0_30px_rgba(0,229,255,0.3)]'
                  : 'bg-bg'
              }`}
              aria-hidden="true"
            />
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
              <p className="font-mono text-xs text-violet tracking-wide opacity-80 mb-3">
                // {exp.phase}
              </p>
              <p className="text-sm text-text-dim leading-relaxed mb-4">{exp.desc}</p>
              <div className="flex flex-col gap-2 mb-5">
                {exp.achievements.map((achievement, j) => (
                  <div key={j} className="text-sm text-text-dim flex items-baseline gap-2.5">
                    <span className="text-cyan text-xs flex-shrink-0">&#x25B8;</span>
                    <span>{highlightAchievement(achievement)}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 bg-cyan/[0.06] border border-cyan/[0.12] rounded text-text-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={200}
        className="mt-12 bg-bg-card border border-border rounded-xl p-6 lg:p-8 flex items-center gap-8 flex-wrap"
      >
        <span className="font-mono text-xs text-text-muted tracking-[0.15em]">EDUCATION</span>
        <div className="flex-1 min-w-[200px]">
          <p className="text-lg font-bold">{education.school}</p>
          <p className="text-sm text-text-dim mt-1">
            {education.degree}{' '}
            <span className="font-mono text-xs text-text-muted ml-2">{education.period}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {education.certs.map((cert) => (
            <span
              key={cert}
              className="font-mono text-[0.65rem] px-2 py-1 border border-border rounded text-text-muted"
            >
              {cert}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
