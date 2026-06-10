'use client';

/**
 * ScrollCanvas
 * ------------
 * Fixed Canvas 2D layer at z=-20 that renders three abstract motifs
 * (Neural graph, Data pipeline, RAG retrieval) sequenced by scroll progress.
 *
 *   progress ∈ [0.00, 0.40] → Neural graph dominant
 *   progress ∈ [0.30, 0.75] → Data pipeline dominant
 *   progress ∈ [0.65, 1.00] → RAG retrieval dominant
 *
 * Each motif fades in/out via a smoothstep weight. All motifs share a single
 * RAF loop and a single canvas; opacity caps at ~0.15 to stay subtle.
 *
 * Performance:
 *  - DPR-aware sizing, capped at 1.75
 *  - Pauses when document.hidden
 *  - Honors prefers-reduced-motion (renders a single static frame)
 */

import { useEffect, useRef } from 'react';
import { drawNeural, type NeuralState, initNeural } from './motifs/neural';
import { drawPipeline, type PipelineState, initPipeline } from './motifs/pipeline';
import { drawRAG, type RAGState, initRAG } from './motifs/rag';

const COLOR_ACCENT = 'rgba(125, 211, 252, '; // sky-300
const COLOR_MINT = 'rgba(94, 234, 212, ';    // teal-300

// Smoothstep blend window
function weight(p: number, start: number, end: number, fade = 0.08) {
  if (p < start - fade || p > end + fade) return 0;
  if (p < start) {
    const t = (p - (start - fade)) / fade;
    return t * t * (3 - 2 * t);
  }
  if (p > end) {
    const t = 1 - (p - end) / fade;
    return t * t * (3 - 2 * t);
  }
  return 1;
}

export default function ScrollCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.75);

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    setSize();

    // Motif state
    const neural: NeuralState = initNeural(width, height);
    const pipeline: PipelineState = initPipeline(width, height);
    const rag: RAGState = initRAG(width, height);

    const onResize = () => {
      setSize();
      Object.assign(neural, initNeural(width, height));
      Object.assign(pipeline, initPipeline(width, height));
      Object.assign(rag, initRAG(width, height));
    };
    window.addEventListener('resize', onResize, { passive: true });

    let raf = 0;
    let last = performance.now();
    let running = !document.hidden;
    const onVisibility = () => {
      running = !document.hidden;
      if (running) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const loop = (now: number) => {
      const dt = Math.min(48, now - last); // clamp delta when tab blurred
      last = now;

      // Read scroll progress from CSS var (driven by ScrollProvider)
      const cs = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--scroll-progress'
        ) || '0'
      );
      const p = Math.max(0, Math.min(1, cs));

      const wNeural = weight(p, 0.0, 0.4);
      const wPipeline = weight(p, 0.3, 0.75);
      const wRAG = weight(p, 0.65, 1.0);

      ctx.clearRect(0, 0, width, height);

      // Subtle radial glow follows scroll vertically (10% .. 90% of viewport)
      const glowY = height * (0.15 + 0.7 * p);
      const radial = ctx.createRadialGradient(
        width * 0.5,
        glowY,
        0,
        width * 0.5,
        glowY,
        Math.max(width, height) * 0.55
      );
      radial.addColorStop(0, `${COLOR_ACCENT}${(0.12 * (0.6 + 0.4 * p)).toFixed(3)})`);
      radial.addColorStop(1, 'rgba(10,10,11,0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';

      if (wNeural > 0.01)
        drawNeural(ctx, neural, dt, wNeural, COLOR_ACCENT, COLOR_MINT);
      if (wPipeline > 0.01)
        drawPipeline(ctx, pipeline, dt, wPipeline, COLOR_ACCENT, COLOR_MINT);
      if (wRAG > 0.01)
        drawRAG(ctx, rag, dt, wRAG, COLOR_ACCENT, COLOR_MINT);

      ctx.globalCompositeOperation = 'source-over';

      if (!reduce && running) raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      // Render a single static frame at current scroll position
      loop(performance.now());
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
