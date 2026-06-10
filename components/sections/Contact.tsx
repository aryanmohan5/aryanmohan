import Section from '@/components/ui/Section';
import FadeIn from '@/components/ui/FadeIn';
import { contact } from '@/lib/data';

const links = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Phone', value: contact.phone, href: contact.phoneHref },
  { label: 'LinkedIn', value: 'linkedin.com/in/aryanmohan1', href: contact.linkedin },
  { label: 'GitHub', value: 'github.com/aryanmohan5', href: contact.github },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="07 / Contact">
      <FadeIn>
        <div className="glass relative overflow-hidden rounded-2xl p-10 md:p-14">
          <span
            aria-hidden
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <span
            aria-hidden
            className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-mint/10 blur-3xl"
          />

          <p className="mb-3 font-mono text-2xs uppercase tracking-[0.3em] text-accent">
            <span className="mr-2 text-muted">//</span> Let's build something.
          </p>
          <h2 className="text-gradient max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Open to roles in Applied AI, LLM, and Data Engineering.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-hover group flex items-center justify-between rounded-lg border border-border-strong/40 bg-surface/40 p-4"
              >
                <div>
                  <p className="font-mono text-2xs uppercase tracking-wider text-muted">
                    {l.label}
                  </p>
                  <p className="mt-0.5 text-sm text-text/90 group-hover:text-accent">
                    {l.value}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="font-mono text-accent transition group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-10 font-mono text-2xs uppercase tracking-wider text-muted">
            © 2024 Aryan Mohan. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
