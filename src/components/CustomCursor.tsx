import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let mouseX = -100, mouseY = -100;
    let raf: number;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Dot follows tightly
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      // Ring follows with lag
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const down = () => {
      if (ringRef.current) ringRef.current.style.width = ringRef.current.style.height = '32px';
      if (dotRef.current) dotRef.current.style.width = dotRef.current.style.height = '14px';
    };
    const up = () => {
      if (ringRef.current) ringRef.current.style.width = ringRef.current.style.height = '40px';
      if (dotRef.current) dotRef.current.style.width = dotRef.current.style.height = '10px';
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-primary/70 transition-[width,height] duration-150"
        style={{ width: 40, height: 40, willChange: 'transform' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary transition-[width,height] duration-150"
        style={{ width: 10, height: 10, willChange: 'transform' }}
      />
    </>
  );
}
