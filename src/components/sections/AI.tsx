import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { aiItems } from '@/data/profile';

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
}

function HighlightedText({ text, highlights }: { text: string; highlights: readonly string[] }) {
  const pattern = new RegExp(`(${highlights.map(escapeRegex).join('|')})`);
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        (highlights as readonly string[]).includes(part) ? (
          <code key={i} className="font-mono text-sm text-cyan bg-cyan/10 px-1.5 py-0.5 rounded">
            {part}
          </code>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function AI() {
  return (
    <section id="ai" className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
      <SectionHeader index="04" label="AI / Machine Learning" title="讓機器" highlight="理解世界" />
      <div className="relative pl-8 lg:pl-12">
        <div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-violet to-transparent"
          aria-hidden="true"
        />
        {aiItems.map((item, i) => (
          <Reveal key={i} delay={i * 100} className="relative mb-14 last:mb-0">
            <div
              className="absolute -left-8 lg:-left-12 top-2 w-2 h-2 border-2 border-cyan rounded-full bg-bg hover:bg-cyan hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all"
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-violet tracking-widest uppercase mb-2">
              {item.label}
            </p>
            <h3 className="text-xl font-bold mb-2">{item.heading}</h3>
            <p className="text-sm text-text-dim leading-relaxed">
              <HighlightedText text={item.text} highlights={item.highlights} />
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
