'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'span' | 'section' | 'article';
  className?: string;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function FadeIn({
  children,
  delay = 0,
  className,
  as = 'div',
}: Props) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </Tag>
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
