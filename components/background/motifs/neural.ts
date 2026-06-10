// Neural graph: nodes drift slowly; edges fade in for nearby pairs.
// Represents emergent LLM connections.

export type NeuralNode = { x: number; y: number; vx: number; vy: number; r: number };
export type NeuralState = {
  nodes: NeuralNode[];
  w: number;
  h: number;
  linkDist: number;
};

export function initNeural(w: number, h: number): NeuralState {
  const target = Math.round((w * h) / 22000); // ~60 nodes on 1440x900
  const count = Math.max(28, Math.min(80, target));
  const nodes: NeuralNode[] = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.06,
    vy: (Math.random() - 0.5) * 0.06,
    r: 0.8 + Math.random() * 1.4,
  }));
  return { nodes, w, h, linkDist: Math.min(180, Math.max(120, w / 9)) };
}

export function drawNeural(
  ctx: CanvasRenderingContext2D,
  s: NeuralState,
  dt: number,
  weight: number,
  cAccent: string,
  cMint: string
) {
  const dtScale = dt * 0.06;
  const { nodes, w, h, linkDist } = s;

  // Step nodes
  for (const n of nodes) {
    n.x += n.vx * dtScale;
    n.y += n.vy * dtScale;
    if (n.x < -20) n.x = w + 20;
    if (n.x > w + 20) n.x = -20;
    if (n.y < -20) n.y = h + 20;
    if (n.y > h + 20) n.y = -20;
  }

  // Edges
  ctx.lineWidth = 1;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d2 = dx * dx + dy * dy;
      const max2 = linkDist * linkDist;
      if (d2 > max2) continue;
      const t = 1 - d2 / max2; // 0..1
      const alpha = 0.32 * t * weight;
      ctx.strokeStyle = `${cAccent}${alpha.toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }

  // Nodes
  for (const n of nodes) {
    const a = 0.85 * weight;
    ctx.fillStyle = `${cMint}${a.toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
    // soft halo
    ctx.fillStyle = `${cMint}${(0.18 * weight).toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r * 3.2, 0, Math.PI * 2);
    ctx.fill();
  }
}
