'use client';

import { useEffect, useRef } from 'react';

const COLORS = ['#00e5ff', '#8b5cf6', '#e040fb'];

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  color: string;
  fadeIn: boolean;
}

function createParticle(w: number, h: number, init = false): Particle {
  return {
    x: Math.random() * w,
    y: init ? Math.random() * h : h + Math.random() * 100,
    size: 0.5 + Math.random() * 1.5,
    speedY: -(0.3 + Math.random() * 0.8),
    speedX: (Math.random() - 0.5) * 0.3,
    opacity: init ? Math.random() * 0.4 : 0,
    maxOpacity: 0.2 + Math.random() * 0.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    fadeIn: !init,
  };
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 20 : 40;
    const particles: Particle[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    for (let i = 0; i < count; i++) {
      particles.push(createParticle(canvas.width, canvas.height, true));
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.fadeIn) {
          p.opacity += 0.005;
          if (p.opacity >= p.maxOpacity) p.fadeIn = false;
        }
        if (p.y < canvas!.height * 0.2) p.opacity -= 0.003;
        if (p.opacity <= 0 || p.y < -10) {
          Object.assign(p, createParticle(canvas!.width, canvas!.height));
        }
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = Math.max(0, p.opacity);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
