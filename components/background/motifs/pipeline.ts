// Data pipeline: horizontal flow lines with tokens streaming left → right.
// Represents ETL / agentic data flow.

export type Token = { lane: number; x: number; speed: number; size: number };
export type PipelineState = {
  lanes: number;
  laneYs: number[];
  tokens: Token[];
  w: number;
  h: number;
};

export function initPipeline(w: number, h: number): PipelineState {
  const lanes = 6;
  const margin = h * 0.12;
  const usable = h - margin * 2;
  const laneYs = Array.from({ length: lanes }, (_, i) =>
    margin + ((i + 0.5) / lanes) * usable
  );
  const tokenCount = Math.max(36, Math.min(70, Math.round(w / 28)));
  const tokens: Token[] = Array.from({ length: tokenCount }, () => ({
    lane: Math.floor(Math.random() * lanes),
    x: Math.random() * w,
    speed: 0.05 + Math.random() * 0.1,
    size: 1.2 + Math.random() * 1.8,
  }));
  return { lanes, laneYs, tokens, w, h };
}

export function drawPipeline(
  ctx: CanvasRenderingContext2D,
  s: PipelineState,
  dt: number,
  weight: number,
  cAccent: string,
  cMint: string
) {
  const { laneYs, tokens, w } = s;

  // Lanes (faint baseline)
  ctx.lineWidth = 1;
  for (const y of laneYs) {
    ctx.strokeStyle = `${cAccent}${(0.12 * weight).toFixed(3)})`;
    ctx.setLineDash([4, 10]);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Tokens
  for (const t of tokens) {
    t.x += t.speed * dt;
    if (t.x > w + 40) t.x = -40;

    const y = laneYs[t.lane];
    // Trail
    const grad = ctx.createLinearGradient(t.x - 60, y, t.x, y);
    grad.addColorStop(0, `${cAccent}0)`);
    grad.addColorStop(1, `${cMint}${(0.75 * weight).toFixed(3)})`);
    ctx.strokeStyle = grad;
    ctx.lineWidth = t.size * 1.2;
    ctx.beginPath();
    ctx.moveTo(t.x - 60, y);
    ctx.lineTo(t.x, y);
    ctx.stroke();

    // Head dot + halo
    ctx.fillStyle = `${cMint}${(0.95 * weight).toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(t.x, y, t.size * 1.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `${cMint}${(0.18 * weight).toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(t.x, y, t.size * 3.4, 0, Math.PI * 2);
    ctx.fill();
  }
}
