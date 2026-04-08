import GithubIcon from '@/components/GithubIcon';
import { profile } from '@/data/profile';

export default function Hero() {
  const [first, last] = profile.name.split(' ');

  return (
    <header className="min-h-screen flex flex-col justify-center px-6 lg:px-12 relative z-10 max-w-[1200px] mx-auto pt-24 pb-16">
      <p className="font-mono text-sm text-cyan tracking-[0.15em] uppercase mb-6 animate-[fadeUp_0.8s_0.3s_both]">
        <span className="opacity-50">&gt; </span>{profile.title}
      </p>
      <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-6 animate-[fadeUp_0.8s_0.5s_both]">
        <span>{first} </span>
        <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">{last}</span>
      </h1>
      <p className="font-mono text-lg lg:text-xl text-text-dim font-light mb-6 animate-[fadeUp_0.8s_0.7s_both]">
        {profile.chineseName} — {profile.subtitle}
      </p>
      <div className="flex flex-wrap gap-2 mb-7 animate-[fadeUp_0.8s_0.85s_both]">
        {profile.badges.map((badge) => (
          <span key={badge} className="font-mono text-xs px-3 py-1.5 border border-cyan-dim rounded-full text-cyan tracking-wide">
            {badge}
          </span>
        ))}
      </div>
      <p className="text-lg text-text-dim max-w-2xl leading-relaxed animate-[fadeUp_0.8s_0.9s_both]">
        {profile.heroDesc}
      </p>
      <div className="flex flex-wrap gap-3 mt-8 animate-[fadeUp_0.8s_1.1s_both]">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-sm text-text-dim border border-border rounded-lg px-5 py-2.5 inline-flex items-center gap-2 hover:text-cyan hover:border-cyan-dim hover:bg-cyan/5 transition-all"
        >
          <span className="text-base">&#x2709;</span> {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-text-dim border border-border rounded-lg px-5 py-2.5 inline-flex items-center gap-2 hover:text-cyan hover:border-cyan-dim hover:bg-cyan/5 transition-all"
        >
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
