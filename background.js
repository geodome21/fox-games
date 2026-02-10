// background.js — lightweight particle/lines background animation
// - uses a fullscreen canvas behind the page content
// - responsive particle count based on viewport size
// - adapts color to `.dark` class on <body>
// - mouse interaction: move attracts particles, click bursts

(() => {
  console.log('[background] init');
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let DPR = Math.max(1, window.devicePixelRatio || 1);

  // configuration: uniform particle size and connection / web settings
  const PARTICLE_SIZE = 3.4;       // px
  const NEAREST_NEIGHBORS = 3;     // how many neighbors each particle connects to
  const MAX_CONN_RATIO = 0.6;      // fraction of max dimension used for maximum connection distance

  // Respect prefers-reduced-motion: hide/disable animation if user prefers reduced motion
  const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionDisabled = reducedMQ.matches;
  if (motionDisabled) canvas.style.display = 'none';
  reducedMQ.addEventListener?.('change', (e) => {
    motionDisabled = e.matches;
    if (motionDisabled) {
      if (raf) cancelAnimationFrame(raf);
      raf = null;
      canvas.style.display = 'none';
    } else {
      canvas.style.display = 'block';
      if (!raf) frame();
    }
  });

  let w = 0, h = 0;
  function resize() {
    DPR = Math.max(1, window.devicePixelRatio || 1);
    w = Math.max(1, innerWidth);
    h = Math.max(1, innerHeight);
    canvas.width = Math.round(w * DPR);
    canvas.height = Math.round(h * DPR);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    initParticles();
  }

  window.addEventListener('resize', debounce(resize, 200));

  // theme-awareness: light/dark
  function isDark() { return document.body.classList.contains('dark'); }

  // particles
  let particles = [];
  let particleCount = 0;
  let connections = []; // fixed connections between particles
  // Set a fixed particle count here (number). Set to null to use responsive count.
  const FIXED_PARTICLE_COUNT = 90;
  function calcCount() {
    if (typeof FIXED_PARTICLE_COUNT === 'number' && FIXED_PARTICLE_COUNT > 0) return FIXED_PARTICLE_COUNT;
    // roughly 1 particle per 12k px, clamp 20..150
    const base = Math.round((w * h) / 12000);
    return Math.min(150, Math.max(20, base));
  }

  function initParticles() {
    const count = calcCount();
    particleCount = count;
    particles.length = 0;
    connections.length = 0;
    for (let i = 0; i < count; i++) particles.push(new Particle());
    // create fixed connections: each particle connects to the next NEAREST_NEIGHBORS particles
    for (let i = 0; i < count; i++) {
      for (let j = 1; j <= NEAREST_NEIGHBORS; j++) {
        let target = (i + j) % count;
        if (i < target) { // avoid duplicates
          connections.push({from: i, to: target});
        }
      }
    }
  }

  // Particles float freely — no cursor attraction or click bursts

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function Particle(x = rand(0, w), y = rand(0, h), vx = rand(-0.4,0.4), vy = rand(-0.4,0.4)) {
    this.x = x; this.y = y; this.vx = vx; this.vy = vy; this.r = PARTICLE_SIZE;
    // particles are persistent (no life/age) for a stable web
    // Blue in dark mode, grayscale (sat=0) in light mode
    // hearts use red hues in both themes for a warm effect
    if (isDark()) {
      // red/orange range
      this.hue = Math.random() < 0.5 ? rand(350, 360) : rand(0, 12);
      this.sat = rand(60, 95);
      this.light = rand(40, 70);
    } else {
      this.hue = Math.random() < 0.5 ? rand(350, 360) : rand(0, 12);
      this.sat = rand(60, 95);
      this.light = rand(40, 70);
    }
    // alpha varies for depth
    this.alpha = rand(0.18,0.95);
  }

  Particle.prototype.step = function() {
    // gentle Brownian motion: small random acceleration so particles float independently
    this.vx += rand(-0.06, 0.06);
    this.vy += rand(-0.06, 0.06);

    // speed clamp for calm motion
    const maxSpd = 1.2;
    const speed = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
    if (speed > maxSpd) {
      this.vx = (this.vx / speed) * maxSpd;
      this.vy = (this.vy / speed) * maxSpd;
    }

    // gentle damping to avoid runaway motion
    this.vx *= 0.995; this.vy *= 0.995;

    this.x += this.vx; this.y += this.vy;

    // bounce off edges to keep particles on screen
    if (this.x < 0) { this.x = 0; this.vx = -this.vx; }
    if (this.x > w) { this.x = w; this.vx = -this.vx; }
    if (this.y < 0) { this.y = 0; this.vy = -this.vy; }
    if (this.y > h) { this.y = h; this.vy = -this.vy; }

    this.age++;
  }

  // drawing
  function draw() {
    ctx.clearRect(0,0,w,h);

    // subtle background gradient to match theme
    const grad = ctx.createLinearGradient(0,0,w,h);
    if (isDark()) {
      // softer near-black backdrop (lighter black)
      grad.addColorStop(0, 'rgba(10,12,16,0.9)');
      grad.addColorStop(1, 'rgba(22,24,32,0.9)');
    } else {
      grad.addColorStop(0, 'rgba(240,245,255,0.6)');
      grad.addColorStop(1, 'rgba(255,250,240,0.6)');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,w,h);

    // connect & draw particles
    // draw lines first for subtlety
    // use fixed connections
    const maxConnDist = Math.max(w, h) * MAX_CONN_RATIO;
    for (const conn of connections) {
      const p = particles[conn.from];
      const q = particles[conn.to];
      const dx = p.x - q.x, dy = p.y - q.y;
      const d = Math.sqrt(dx*dx + dy*dy);
      const alpha = Math.max(0, (1 - d / maxConnDist)) * 0.12;
      if (alpha <= 0) continue;
      // use a red-tinted line based on particle hues (average)
      const hue = Math.round(((p.hue || 0) + (q.hue || 0)) / 2);
      const sat = Math.round(((p.sat || 70) + (q.sat || 70)) / 2);
      const light = Math.round(Math.min(70, ((p.light || 50) + (q.light || 50)) / 2 + 4));
      ctx.strokeStyle = `hsla(${hue},${sat}%,${light}%,${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(q.x, q.y);
      ctx.stroke();
    }

    function drawHeart(cx, cy, size, color) {
      // size is radius-like; scale factor
      const s = Math.max(1, size);
      try {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(s/12, s/12); // base heart designed at ~12 units
        ctx.beginPath();
        // heart path (centered at 0,0)
        ctx.moveTo(0, -6);
        ctx.bezierCurveTo(6, -14, 24, -6, 0, 18);
        ctx.bezierCurveTo(-24, -6, -6, -14, 0, -6);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
      } catch (err) {
        // fallback: draw a simple circle so something visible appears
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(1, s/2), 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let p of particles) {
      const hue = Math.round(p.hue);
      const sat = Math.round(p.sat);
      const light = Math.round(p.light);
      const alpha = Math.max(0.06, p.alpha);
      const color = `hsla(${hue},${sat}%,${light}%,${alpha})`;
      drawHeart(p.x, p.y, Math.max(2.0, p.r * 2.2), color);
    }
  }

  let raf = null;
  function frame() {
    if (motionDisabled) return;

    // update particles (persistent — do not replace when "life" runs out)
    for (let i = 0; i < particles.length; i++) {
      particles[i].step();
    }

    draw();
    raf = requestAnimationFrame(frame);
  }

  // pause when not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    } else if (!raf) frame();
  });

  // adapt to theme changes
  const bodyObserver = new MutationObserver(() => {
    // recolor existing particles with new hues / gray values
    for (let p of particles) {
      // recolor to red/orange hues
      p.hue = Math.random() < 0.5 ? rand(350, 360) : rand(0, 12);
      p.sat = rand(60, 95);
      p.light = rand(40, 70);
    }
  });
  bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // small utilities
  function debounce(fn, wait) {
    let t;
    return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), wait); };
  }

  // initialize
  resize();
  if (!motionDisabled) frame();
})();
