'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#languages', label: 'Languages' },
  { href: '#frameworks', label: 'Frameworks' },
  { href: '#ai', label: 'AI / ML' },
  { href: '#data', label: 'Data' },
  { href: '#infra', label: 'Infra' },
  { href: '#projects', label: 'Projects' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="主要導覽"
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 border-b border-border backdrop-blur-xl transition-colors ${
        scrolled ? 'bg-bg/95' : 'bg-bg/70'
      }`}
    >
      <a href="#" className="font-mono font-bold text-lg text-cyan no-underline">
        jason<span className="text-text-dim font-normal">.wang</span>
      </a>
      <ul className="hidden md:flex gap-8 list-none m-0 p-0" role="list">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`font-mono text-xs uppercase tracking-widest relative transition-colors no-underline after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-cyan after:transition-[width] after:duration-300 ${
                active === l.href
                  ? 'text-cyan after:w-full'
                  : 'text-text-dim hover:text-cyan after:w-0 hover:after:w-full'
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
