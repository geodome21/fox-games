// background.js — lightweight particle/lines background animation
// - uses a fullscreen canvas behind the page content
// - responsive particle count based on viewport size
// - adapts color to `.dark` class on <body>
// - mouse interaction: move attracts particles, click bursts

(() => {
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
    if (isDark()) {
      this.hue = rand(200, 225);            // blue range
      this.sat = rand(60, 90);              // saturation
      this.light = rand(40, 65);
    } else {
      this.hue = 0;                         // hue doesn't matter with sat=0
      this.sat = 0;                         // force grayscale in light theme
      this.light = rand(30, 60);           // gray brightness
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
      const alpha = Math.max(0, (1 - d / maxConnDist)) * 0.18;
      if (alpha <= 0) continue;
      if (isDark()) {
        const baseHue = 210;
        const baseSat = 75;
        const baseLight = 62;
        ctx.strokeStyle = `hsla(${baseHue},${baseSat}%,${baseLight}%,${alpha})`;
      } else {
        // gray connections for light theme
        const grayLight = 46;
        ctx.strokeStyle = `hsla(0,0%,${grayLight}%,${alpha})`;
      }
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(q.x, q.y);
      ctx.stroke();
    }

    for (let p of particles) {
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(6, p.r*6));
      const hue = Math.round(p.hue);
      const sat = Math.round(p.sat);
      const light = Math.round(p.light);
      const startAlpha = Math.min(1, p.alpha);
      const midAlpha = Math.min(0.28, p.alpha * 0.22);
      g.addColorStop(0, `hsla(${hue},${sat}%,${light}%,${startAlpha})`);
      g.addColorStop(0.7, `hsla(${hue},${sat}%,${Math.max(14, light-20)}%,${midAlpha})`);
      g.addColorStop(1, `hsla(${hue},${sat}%,${Math.max(6, light-30)}%,0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      // uniform size for all particles
      ctx.arc(p.x, p.y, Math.max(1.0, p.r), 0, Math.PI*2);
      ctx.fill();
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
      if (isDark()) {
        p.hue = rand(200,225);
        p.sat = rand(60,90);
        p.light = rand(40,65);
      } else {
        p.hue = 0;
        p.sat = 0;
        p.light = rand(30,60);
      }
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
