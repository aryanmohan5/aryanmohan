// RAG retrieval: a central "query" node fans out to context chunks
// arranged on concentric arcs. Pulse rings travel outward.

export type RAGChunk = { angle: number; radius: number; size: number; phase: number };
export type RAGState = {
  cx: number;
  cy: number;
  chunks: RAGChunk[];
  pulses: { r: number; speed: number; alpha: number }[];
  w: number;
  h: number;
};

export function initRAG(w: number, h: number): RAGState {
  const cx = w * 0.5;
  const cy = h * 0.55;
  const count = 28;
  const baseR = Math.min(w, h) * 0.18;
  const chunks: RAGChunk[] = Array.from({ length: count }, (_, i) => ({
    angle: (i / count) * Math.PI * 2 + Math.random() * 0.2,
    radius: baseR + (i % 3) * baseR * 0.55 + Math.random() * 20,
    size: 1.6 + Math.random() * 2.4,
    phase: Math.random() * Math.PI * 2,
  }));
  const pulses = Array.from({ length: 4 }, (_, i) => ({
    r: (i / 4) * baseR * 2.6,
    speed: 0.018 + Math.random() * 0.01,
    alpha: 1,
  }));
  return { cx, cy, chunks, pulses, w, h };
}

export function drawRAG(
  ctx: CanvasRenderingContext2D,
  s: RAGState,
  dt: number,
  weight: number,
  cAccent: string,
  cMint: string
) {
  const { cx, cy, chunks, pulses, w, h } = s;
  const maxR = Math.min(w, h) * 0.55;

  // Pulses (outward rings)
  for (const p of pulses) {
    p.r += p.speed * dt;
    if (p.r > maxR) p.r = 0;
    const a = (1 - p.r / maxR) * 0.32 * weight;
    ctx.strokeStyle = `${cAccent}${a.toFixed(3)})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(cx, cy, p.r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Spokes + chunks
  const time = performance.now() * 0.001;
  for (const c of chunks) {
    const r = c.radius + Math.sin(time + c.phase) * 6;
    const x = cx + Math.cos(c.angle) * r;
    const y = cy + Math.sin(c.angle) * r;

    // Spoke
    const grad = ctx.createLinearGradient(cx, cy, x, y);
    grad.addColorStop(0, `${cMint}${(0.38 * weight).toFixed(3)})`);
    grad.addColorStop(1, `${cAccent}${(0.1 * weight).toFixed(3)})`);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Chunk node + halo
    ctx.fillStyle = `${cAccent}${(0.9 * weight).toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(x, y, c.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `${cAccent}${(0.16 * weight).toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(x, y, c.size * 3, 0, Math.PI * 2);
    ctx.fill();
  }

  // Center query node
  const cr = 6 + Math.sin(time * 1.6) * 1.8;
  ctx.fillStyle = `${cMint}${(1.0 * weight).toFixed(3)})`;
  ctx.beginPath();
  ctx.arc(cx, cy, cr, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = `${cAccent}${(0.7 * weight).toFixed(3)})`;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(cx, cy, cr + 8, 0, Math.PI * 2);
  ctx.stroke();
}
