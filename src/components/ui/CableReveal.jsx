import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function CableReveal({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div ref={ref} className="relative z-[2]">
      <motion.div
        initial={{ clipPath: 'inset(48% 0% 48% 0%)', opacity: 0 }}
        animate={inView
          ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }
          : { clipPath: 'inset(48% 0% 48% 0%)', opacity: 0 }
        }
        transition={{ duration: 1.4, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}
