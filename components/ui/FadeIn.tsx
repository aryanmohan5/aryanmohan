'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i,
      ease: EASE as unknown as number[],
    },
  }),
};

export default function FadeIn({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}

export function FadeStagger({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={variants} custom={0}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
