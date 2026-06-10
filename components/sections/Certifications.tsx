'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { certifications } from '@/lib/data';

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="06 / Professional Certifications"
      title="Verified credentials."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
      >
        {certifications.map((c) => (
          <motion.article
            key={c.id}
            variants={item}
            className="glass glass-hover relative overflow-hidden rounded-xl p-6"
          >
            <span
              aria-hidden
              className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-mint/5 blur-2xl"
            />
            <div className="mb-3 flex items-start gap-3">
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-mint/25 bg-mint/5 font-mono text-2xs uppercase text-mint"
              >
                CERT
              </span>
              <h3 className="text-base font-semibold leading-snug text-text md:text-lg">
                {c.title}
              </h3>
            </div>

            <p className="mb-1 text-sm text-accent">{c.issuer}</p>
            <p className="mb-4 font-mono text-2xs uppercase tracking-wider text-muted">
              {c.date}
            </p>

            {c.description && (
              <p className="mb-4 text-sm leading-relaxed text-text/75">
                {c.description}
              </p>
            )}

            <ul className="space-y-1.5 text-sm leading-relaxed">
              {c.bullets.map((b) => (
                <li key={b} className="relative pl-4 text-text/80">
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-1 w-1 rounded-full bg-mint"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
