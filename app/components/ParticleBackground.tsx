'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const createParticles = () => {
      const count = Math.max(70, Math.round((width * height) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.35 + 0.35,
        opacity: Math.random() * 0.22 + 0.08,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const drawAmbient = () => {
      const drift = Math.sin(frame * 0.006) * 80;
      const glow = ctx.createRadialGradient(width * 0.52 + drift, height * 0.38, 0, width * 0.52 + drift, height * 0.38, Math.max(width, height) * 0.55);
      glow.addColorStop(0, 'rgba(148, 163, 184, 0.13)');
      glow.addColorStop(0.45, 'rgba(31, 41, 55, 0.07)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const sideGlow = ctx.createRadialGradient(width * 0.18, height * 0.72, 0, width * 0.18, height * 0.72, width * 0.38);
      sideGlow.addColorStop(0, 'rgba(20, 230, 209, 0.045)');
      sideGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = sideGlow;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(148, 163, 184, 0.035)';
      ctx.lineWidth = 1;
      for (let x = (frame * 0.08) % 80; x < width; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + Math.sin(frame * 0.004 + x) * 18, height);
        ctx.stroke();
      }
      for (let y = 30 + ((frame * 0.05) % 96); y < height; y += 96) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(width * 0.3, y - 18, width * 0.7, y + 18, width, y);
        ctx.stroke();
      }
    };

    const drawMouseGlow = () => {
      if (!mouse.active) return;
      const halo = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 260);
      halo.addColorStop(0, 'rgba(229, 231, 235, 0.16)');
      halo.addColorStop(0.3, 'rgba(148, 163, 184, 0.08)');
      halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);
    };

    const drawParticles = () => {
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseBoost = mouse.active && dist < 180 ? (1 - dist / 180) * 0.28 : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + mouseBoost * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity + mouseBoost})`;
        ctx.fill();

        if (mouse.active && dist < 170) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(20, 230, 209, ${(1 - dist / 170) * 0.16})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      frame += 1;
      ctx.clearRect(0, 0, width, height);
      drawAmbient();
      drawMouseGlow();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    resize();
    animate();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-90"
      aria-hidden="true"
    />
  );
}
