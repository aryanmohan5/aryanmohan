import type { Experience } from '@/types';

export default function TimelineItem({
  item,
  isLast,
}: {
  item: Experience;
  isLast: boolean;
}) {
  return (
    <div className="relative pl-10">
      {/* Rail */}
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-3 top-4 -bottom-8 w-px bg-gradient-to-b from-accent/30 via-border-strong/60 to-transparent"
        />
      )}
      {/* Node */}
      <span
        aria-hidden
        className="absolute left-1.5 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-accent/40 bg-bg"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </span>

      <div className="glass glass-hover rounded-xl p-5 md:p-6">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold text-text md:text-lg">
            {item.role}
          </h3>
          <span className="font-mono text-2xs uppercase tracking-wider text-muted">
            {item.duration}
          </span>
        </div>
        <p className="mb-1 text-sm text-accent">{item.company}</p>
        <p className="mb-4 font-mono text-2xs uppercase tracking-wider text-muted">
          {item.location}
        </p>

        <ul className="space-y-2 text-sm leading-relaxed">
          {item.bullets.map((b, i) => (
            <li key={i} className="relative pl-4 text-text/80">
              <span
                aria-hidden
                className="absolute left-0 top-2 h-1 w-1 rounded-full bg-mint"
              />
              {b}
            </li>
          ))}
        </ul>

        {item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-strong/60 bg-surface/60 px-2.5 py-1 font-mono text-2xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
