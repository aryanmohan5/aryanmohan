'use client';

import { useEffect, useState } from 'react';
import { nav } from '@/lib/data';
import clsx from 'clsx';

export default function Nav() {
  const [active, setActive] = useState<string>('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-30 transition-all duration-300',
        scrolled
          ? 'border-b border-white/5 bg-bg/70 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-mono text-xs uppercase tracking-[0.2em] text-text/90 hover:text-accent"
        >
          aryan<span className="text-accent">.</span>mohan
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={clsx(
                    'rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition',
                    active === n.id
                      ? 'text-accent'
                      : 'text-muted hover:text-text'
                  )}
                >
                  {n.label}
                  {active === n.id && (
                    <span className="ml-1 inline-block h-1 w-1 rounded-full bg-accent align-middle" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md border border-accent/30 bg-accent/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-accent transition hover:bg-accent/10 md:inline-block"
        >
          Get in touch
        </a>
      </div>

      {/* Scroll progress indicator */}
      <div
        aria-hidden
        className="h-px w-full origin-left bg-accent/60"
        style={{ transform: 'scaleX(var(--scroll-progress, 0))' }}
      />
    </header>
  );
}
