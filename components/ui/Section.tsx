import clsx from 'clsx';
import type { ReactNode } from 'react';

type Props = {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: Props) {
  return (
    <section
      id={id}
      className={clsx(
        'relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32',
        className
      )}
    >
      {(eyebrow || title) && (
        <header className="mb-12 md:mb-16">
          {eyebrow && (
            <p className="mb-3 font-mono text-2xs uppercase tracking-[0.25em] text-accent">
              <span className="mr-2 text-muted">//</span>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
