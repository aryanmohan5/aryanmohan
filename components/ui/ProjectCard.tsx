'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-xl p-6"
    >
      {/* Accent corner */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent/20"
      />

      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="mt-1 flex h-9 w-9 items-center justify-center rounded-md border border-accent/20 bg-accent/5 font-mono text-xs text-accent"
          >
            {project.id.slice(0, 2).toUpperCase()}
          </span>
          <div>
            <h3 className="text-base font-semibold leading-snug text-text md:text-lg">
              {project.title}
            </h3>
            {project.date && (
              <p className="mt-1 font-mono text-2xs uppercase tracking-wider text-muted">
                {project.date}
              </p>
            )}
          </div>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md border border-border-strong/60 bg-surface/60 px-2.5 py-1.5 font-mono text-2xs uppercase tracking-wider text-muted transition hover:border-accent/40 hover:text-accent"
          aria-label={`View ${project.title} on GitHub`}
        >
          GitHub →
        </a>
      </div>

      <p className="mb-4 inline-block w-max max-w-full self-start rounded border border-border-strong/50 bg-surface/60 px-2 py-1 font-mono text-2xs text-accent">
        {project.tech}
      </p>

      <ul className="mb-5 space-y-2 text-sm leading-relaxed text-muted">
        {project.bullets.map((b, i) => (
          <li key={i} className="relative pl-4 text-text/80">
            <span
              aria-hidden
              className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent"
            />
            {b}
          </li>
        ))}
      </ul>

      {project.metrics && project.metrics.filter((m) => m.label).length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 border-t border-border-strong/40 pt-4">
          {project.metrics
            .filter((m) => m.label)
            .map((m, i) => (
              <span
                key={i}
                className="rounded-md border border-mint/15 bg-mint/5 px-2 py-1 font-mono text-2xs text-mint"
              >
                {m.label}
              </span>
            ))}
        </div>
      )}
    </motion.article>
  );
}
