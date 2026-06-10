import Section from '@/components/ui/Section';
import FadeIn from '@/components/ui/FadeIn';
import { skillGroups } from '@/lib/data';

export default function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="02 / Technical Proficiencies"
      title="Stack"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((g, i) => (
          <FadeIn key={g.label} delay={i * 0.08}>
            <div className="glass glass-hover h-full rounded-xl p-5">
              <h3 className="mb-4 font-mono text-2xs uppercase tracking-[0.25em] text-accent">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border-strong/60 bg-surface/50 px-2.5 py-1 text-xs text-text/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
