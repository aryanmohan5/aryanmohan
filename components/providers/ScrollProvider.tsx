'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

type ScrollCtx = {
  progress: number; // 0..1, total document scroll
  lenis: Lenis | null;
};

const Ctx = createContext<ScrollCtx>({ progress: 0, lenis: null });

export const useScroll = () => useContext(Ctx);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      duration: prefersReduce ? 0 : 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !prefersReduce,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onScroll = (instance: { progress: number }) => {
      const p = instance.progress ?? 0;
      setProgress(p);
      document.documentElement.style.setProperty(
        '--scroll-progress',
        p.toFixed(4)
      );
    };
    // Lenis types `on('scroll', cb)` to receive the Lenis instance; cast for
    // a lighter local signature.
    lenis.on('scroll', onScroll as never);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <Ctx.Provider value={{ progress, lenis: lenisRef.current }}>
      {children}
    </Ctx.Provider>
  );
}
