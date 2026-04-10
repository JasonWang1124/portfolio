import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects } from '@/data/profile';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — Jason Wang`,
    description: project.desc,
    openGraph: {
      title: `${project.name} — Jason Wang`,
      description: project.desc,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12 py-24">
        {/* Back link */}
        <Link
          href="/#projects"
          className="font-mono text-sm text-text-dim hover:text-cyan transition-colors inline-flex items-center gap-2 mb-12"
        >
          <span>&#x2190;</span> 返回作品列表
        </Link>

        {/* Header */}
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-3">
          {project.name}
        </h1>
        <p className="font-mono text-sm text-violet mb-4">{project.role}</p>
        <p className="text-lg text-text-dim leading-relaxed mb-8">{project.desc}</p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-sm px-4 py-1.5 border border-cyan-dim rounded-md text-cyan"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Detail */}
        <section className="mb-12">
          <h2 className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
            Project Detail
            <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-cyan-dim to-transparent" />
          </h2>
          <p className="text-text-dim leading-relaxed">{project.detail}</p>
        </section>

        {/* Contributions (optional) */}
        {'contributions' in project && project.contributions && (
          <section className="mb-12">
            <h2 className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
              Contributions
              <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-cyan-dim to-transparent" />
            </h2>
            <ul className="space-y-3">
              {project.contributions.map((c, i) => (
                <li key={i} className="text-text-dim flex items-baseline gap-3">
                  <span className="text-cyan text-xs flex-shrink-0">&#x25B8;</span>
                  {c}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="font-mono text-xs text-violet tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
            Technical Challenges
            <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-violet-dim to-transparent" />
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((c, i) => (
              <li key={i} className="text-text-dim flex items-baseline gap-3">
                <span className="text-violet text-xs flex-shrink-0">&#x25B8;</span>
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Footer nav */}
        <div className="border-t border-border pt-8 flex justify-between items-center">
          <Link
            href="/#projects"
            className="font-mono text-sm text-text-muted hover:text-cyan transition-colors"
          >
            &#x2190; 所有作品
          </Link>
          <div className="flex gap-4">
            {projects.map((p) =>
              p.slug !== slug ? (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="font-mono text-xs text-text-muted hover:text-cyan transition-colors"
                >
                  {p.name}
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
