import Section from '@/components/ui/Section';
import FadeIn from '@/components/ui/FadeIn';
import { profileSummary } from '@/lib/data';

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title={profileSummary.heading}>
      <div className="grid gap-8 md:grid-cols-3">
        <FadeIn className="md:col-span-2">
          <p className="text-lg leading-relaxed text-text/85">
            {profileSummary.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="glass rounded-xl p-5">
          <p className="mb-3 font-mono text-2xs uppercase tracking-[0.25em] text-accent">
            Core Strengths
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted">
            {profileSummary.coreStrengths.split(' | ').map((s) => (
              <li key={s} className="flex gap-2 text-text/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                {s}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
