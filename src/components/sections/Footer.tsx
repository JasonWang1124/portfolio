import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center">
      <p className="font-mono text-xs text-text-muted">
        Jason Wang &copy; {new Date().getFullYear()}
        <span className="mx-1">|</span>
        <a href={`mailto:${profile.email}`} className="hover:text-cyan transition-colors">
          {profile.email}
        </a>
        <span className="mx-1">|</span>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan transition-colors"
        >
          GitHub
        </a>
      </p>
      <p className="font-mono text-xs text-text-muted">
        <span className="text-cyan">&gt;</span> Built with passion, deployed with precision.
      </p>
    </footer>
  );
}
