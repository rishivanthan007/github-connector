import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'fadeUp' | 'scaleIn';
  delay?: number;
  stagger?: boolean;
}

const variants = { fadeUp, scaleIn };

export function ScrollReveal({ children, className, variant = 'fadeUp', delay = 0, stagger = false }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger ? staggerContainer : variants[variant]}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  );
}
