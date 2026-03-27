import { useEffect, useRef, useState } from 'react';
import profile from '../data/profile';

/* ── Floating particles canvas ─────────────────────────────────────────── */
function ParticlesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const COUNT = 50;

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function init() {
      resize();
      particles = [];
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.5 + 0.5,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function draw() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 180, 216, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 180, 216, ${p.opacity})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      }

      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}

/* ── Kinetic text — letters reveal one by one ──────────────────────────── */
function KineticText({ text, className, delay = 0, tag: Tag = 'span' }) {
  return (
    <Tag className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="kchar"
          style={{ animationDelay: `${delay + i * 0.04}s` }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
}

/* ── Scroll indicator ──────────────────────────────────────────────────── */
function ScrollCue() {
  return (
    <div className="scroll-cue" aria-hidden="true">
      <div className="scroll-cue-line" />
    </div>
  );
}

/* ── Hero ──────────────────────────────────────────────────────────────── */
export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay so the CSS animation triggers after paint
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className={`hero ${loaded ? 'hero--loaded' : ''}`} id="hero">
      <ParticlesBg />

      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">
        <span className="hero-badge stagger-1" aria-hidden="true">
          {'{ '}
          {profile.subtitle}
          {' }'}
        </span>

        <h1 className="hero-name">
          <KineticText text={profile.firstName} className="hero-name-first" delay={0.3} />
          {' '}
          <KineticText text={profile.lastName} className="hero-name-last" delay={0.7} />
        </h1>

        <p className="hero-subtitle stagger-2">{profile.tagline}</p>
        <p className="hero-location stagger-3">{profile.location}</p>

        <div className="hero-cta stagger-4">
          <a href="#contact" className="btn btn-primary">
            Me contacter
          </a>
          <a href="#expertise" className="btn btn-outline">
            Voir mes expertises
          </a>
        </div>
      </div>

      <ScrollCue />
    </header>
  );
}
