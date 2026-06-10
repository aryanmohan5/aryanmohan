'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import TimelineItem from '@/components/ui/TimelineItem';
import { experiences } from '@/lib/data';

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 / Professional Experience"
      title="Where I've worked."
    >
      <motion.ol
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {experiences.map((e, i) => (
          <motion.li key={e.id} variants={item} className="list-none">
            <TimelineItem item={e} isLast={i === experiences.length - 1} />
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
