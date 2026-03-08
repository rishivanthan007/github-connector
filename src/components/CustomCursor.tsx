import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <>
      {/* Outer ring - follows with spring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-primary/70"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: clicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
        style={{ width: 40, height: 40 }}
      />
      {/* Inner dot - follows tightly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: clicking ? 1.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        style={{ width: 10, height: 10 }}
      />
    </>
  );
}
