'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 / AI & Data Science Projects"
      title="Featured work."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {projects.map((p) => (
          <motion.div key={p.id} variants={item}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
