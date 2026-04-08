import Reveal from './Reveal';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  highlight: string;
}

export default function SectionHeader({ index, label, title, highlight }: SectionHeaderProps) {
  return (
    <Reveal className="mb-16">
      <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-3 flex items-center gap-4">
        {index} — {label}
        <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-cyan-dim to-transparent" />
      </div>
      <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
        {title}
        <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
    </Reveal>
  );
}
