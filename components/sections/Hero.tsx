'use client';

import { motion } from 'framer-motion';
import { heroTerminal, contact } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pt-28"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 font-mono text-2xs uppercase tracking-[0.3em] text-accent"
      >
        <span className="mr-2 text-muted">{'//'}</span> Applied AI Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="text-gradient text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
      >
        Aryan Mohan.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
      >
        LLM Orchestration · Generative AI · Python Data Engineering · PyTorch · SQL
      </motion.p>

      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="glass mt-12 max-w-2xl overflow-hidden rounded-xl font-mono text-sm"
      >
        <div className="flex items-center gap-2 border-b border-white/5 bg-black/30 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 text-2xs uppercase tracking-wider text-muted">
            {heroTerminal.title}
          </span>
        </div>
        <div className="space-y-1.5 p-5 text-text/85">
          {heroTerminal.lines.map((l, i) => {
            if (l.type === 'cmd')
              return (
                <p key={i}>
                  <span className="mr-2 text-accent">$</span>
                  {l.text}
                </p>
              );
            if (l.type === 'cursor')
              return (
                <p key={i}>
                  <span className="mr-2 text-accent">$</span>
                  <span className="terminal-cursor" />
                </p>
              );
            return (
              <p key={i} className="text-muted">
                {l.text}
              </p>
            );
          })}
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="rounded-md border border-accent/40 bg-accent/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-accent transition hover:bg-accent/15"
        >
          View Projects
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="rounded-md border border-border-strong/60 bg-surface/40 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-text/80 transition hover:border-accent/40 hover:text-accent"
        >
          Get in Touch
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border-strong/60 bg-surface/40 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-text/80 transition hover:border-accent/40 hover:text-accent"
        >
          GitHub
        </a>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-2xs uppercase tracking-[0.3em] text-muted md:block">
        <span className="mr-2">scroll</span>
        <span className="inline-block h-3 w-px translate-y-0.5 bg-accent" />
      </div>
    </section>
  );
}
