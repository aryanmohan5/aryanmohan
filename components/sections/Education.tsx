import Section from '@/components/ui/Section';
import FadeIn from '@/components/ui/FadeIn';
import { education } from '@/lib/data';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 / Education Background"
      title="Academic foundation."
    >
      <FadeIn>
        <article className="glass rounded-xl p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-border-strong/40 pb-5">
            <div>
              <h3 className="text-xl font-semibold text-text md:text-2xl">
                {education.institution}
              </h3>
              <p className="mt-1 font-mono text-2xs uppercase tracking-wider text-muted">
                {education.location}
              </p>
            </div>
            <span className="font-mono text-2xs uppercase tracking-wider text-accent">
              {education.duration}
            </span>
          </div>

          <p className="mb-8 text-base text-text/85 md:text-lg">
            <strong className="font-semibold text-text">{education.degree}</strong>
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-2xs uppercase tracking-[0.25em] text-mint">
                Key Specializations
              </p>
              <ul className="space-y-2 text-sm leading-relaxed">
                {education.specializations.map((s) => (
                  <li key={s} className="flex gap-2 text-text/80">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mint" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-mono text-2xs uppercase tracking-[0.25em] text-accent">
                Notable Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-accent/15 bg-accent/5 px-2.5 py-1.5 text-xs text-text/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </FadeIn>
    </Section>
  );
}
