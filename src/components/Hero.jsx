import { useEffect, useRef, useState } from 'react';
import profile from '../data/profile';

/* ── Dense stellar particles with mouse interaction ────────────────────── */
function ParticlesBg() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const COUNT = 120;
    const CONNECTION_DIST = 100;

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function init() {
      resize();
      particles = [];
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < COUNT; i++) {
        const speed = Math.random() * 0.4 + 0.15;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.8 + 0.4,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          baseOpacity: Math.random() * 0.5 + 0.15,
          opacity: 0,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw(time) {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      // Update & draw connections
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];

        // Twinkle
        pi.opacity = pi.baseOpacity + Math.sin(time * pi.twinkleSpeed + pi.twinklePhase) * 0.2;

        // Mouse repulsion
        const dmx = pi.x - mx;
        const dmy = pi.y - my;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < 150 && distMouse > 0) {
          const force = (150 - distMouse) / 150 * 0.8;
          pi.x += (dmx / distMouse) * force;
          pi.y += (dmy / distMouse) * force;
        }

        // Move
        pi.x += pi.dx;
        pi.y += pi.dy;

        // Wrap around edges
        if (pi.x < -10) pi.x = w + 10;
        if (pi.x > w + 10) pi.x = -10;
        if (pi.y < -10) pi.y = h + 10;
        if (pi.y > h + 10) pi.y = -10;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = 0.12 * (1 - dist / CONNECTION_DIST);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 180, 216, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();
          }
        }

        // Draw particle with glow
        const glowAlpha = Math.max(0, pi.opacity * 0.3);
        ctx.beginPath();
        ctx.arc(pi.x, pi.y, pi.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 180, 216, ${glowAlpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pi.x, pi.y, pi.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(144, 224, 239, ${Math.max(0, pi.opacity)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 };
    }

    init();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', init);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
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
        pointerEvents: 'auto',
        zIndex: 0,
      }}
    />
  );
}

/* ── Kinetic text — letters reveal one by one ──────────────────────────── */
function KineticText({ text, className, delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
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
    </span>
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
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const basePath = import.meta.env.BASE_URL;

  return (
    <header className={`hero ${loaded ? 'hero--loaded' : ''}`} id="hero">
      <ParticlesBg />

      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-photo-wrapper stagger-0">
          <img
            src={`${basePath}photo.png`}
            alt="Antoine Naget"
            className="hero-photo"
            width="130"
            height="130"
            loading="eager"
          />
        </div>

        <span className="hero-badge stagger-1" aria-hidden="true">
          {'{ '}
          {profile.subtitle}
          {' }'}
        </span>

        <h1 className="hero-name">
          <KineticText text={profile.firstName} className="hero-name-first" delay={0.4} />
          {' '}
          <KineticText text={profile.lastName} className="hero-name-last" delay={0.8} />
        </h1>

        <p className="hero-subtitle stagger-2">{profile.tagline}</p>

        <p className="hero-personal stagger-3">
          Un projet de conformité ou de transformation IT se pilote avec autant d’exigence technique que d’aptitudes terrain : 
          accompagnement du changement, pédagogie et transmission de compétences.
          Cette conviction, associée à mon plaisir d’enseigner, guide mes missions depuis 15 ans.
        </p>

        <p className="hero-location stagger-4">{profile.location}</p>

        <div className="hero-cta stagger-5">
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
