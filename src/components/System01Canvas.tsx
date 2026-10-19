import React, { useEffect, useRef, useState } from 'react';
import type { Translations } from '../i18n/translations';

interface System01CanvasProps {
  t: Translations['signature'];
}

export const System01Canvas: React.FC<System01CanvasProps> = ({ t }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number; normX: number; normY: number }>({
    x: 0,
    y: 0,
    normX: 0.5,
    normY: 0.5
  });
  const [showRings, setShowRings] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Smoothed target mouse coordinates
    const target = { x: 0.5, y: 0.5 };
    const current = { x: 0.5, y: 0.5 };
    let time = 0;

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

      target.x = x / rect.width;
      target.y = y / rect.height;

      setCoords({
        x: Math.round(x),
        y: Math.round(y),
        normX: Number((target.x).toFixed(3)),
        normY: Number((target.y).toFixed(3))
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, touch.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, touch.clientY - rect.top));

      target.x = x / rect.width;
      target.y = y / rect.height;

      setCoords({
        x: Math.round(x),
        y: Math.round(y),
        normX: Number((target.x).toFixed(3)),
        normY: Number((target.y).toFixed(3))
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });

    observer.observe(container);
    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    resize();

    // Render loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth damping
      const ease = prefersReducedMotion ? 1 : 0.08;
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      time += 0.015;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const mousePixelX = current.x * width;
      const mousePixelY = current.y * height;

      // 1. Architectural Coordinate Grid
      const gridSize = 40;
      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);

      ctx.strokeStyle = 'rgba(240, 242, 244, 0.05)';
      ctx.lineWidth = 1;

      // Fine grid dots / crosshairs
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const gx = i * gridSize;
          const gy = j * gridSize;

          // Distance to mouse
          const dx = mousePixelX - gx;
          const dy = mousePixelY - gy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Subtly illuminate near mouse
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.6;
            ctx.fillStyle = `rgba(124, 231, 232, ${alpha})`;
            ctx.fillRect(gx - 1.5, gy - 1.5, 3, 3);
          } else {
            ctx.fillStyle = 'rgba(240, 242, 244, 0.18)';
            ctx.fillRect(gx - 0.75, gy - 0.75, 1.5, 1.5);
          }
        }
      }

      // 2. Calibration Concentric Rings
      if (showRings) {
        const ringRadius = Math.min(width, height) * 0.38;
        ctx.save();
        ctx.translate(centerX, centerY);

        // Outer calibrated circle
        ctx.strokeStyle = 'rgba(240, 242, 244, 0.12)';
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Secondary inner circle
        ctx.strokeStyle = 'rgba(124, 231, 232, 0.2)';
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius * 0.65, 0, Math.PI * 2);
        ctx.stroke();

        // Rotating compass notches
        const rotationAngle = prefersReducedMotion ? 0 : time * 0.2;
        ctx.rotate(rotationAngle);
        for (let a = 0; a < 360; a += 30) {
          const rad = (a * Math.PI) / 180;
          const isCardinal = a % 90 === 0;
          const len = isCardinal ? 10 : 5;
          const x1 = Math.cos(rad) * (ringRadius - len);
          const y1 = Math.sin(rad) * (ringRadius - len);
          const x2 = Math.cos(rad) * ringRadius;
          const y2 = Math.sin(rad) * ringRadius;

          ctx.strokeStyle = isCardinal ? 'rgba(124, 231, 232, 0.7)' : 'rgba(240, 242, 244, 0.25)';
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        ctx.restore();
      }

      // 3. Dynamic Vector Crosshairs from Cursor
      ctx.strokeStyle = 'rgba(124, 231, 232, 0.35)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      // Horizontal axis line
      ctx.beginPath();
      ctx.moveTo(0, mousePixelY);
      ctx.lineTo(width, mousePixelY);
      ctx.stroke();

      // Vertical axis line
      ctx.beginPath();
      ctx.moveTo(mousePixelX, 0);
      ctx.lineTo(mousePixelX, height);
      ctx.stroke();

      ctx.setLineDash([]); // Reset dash

      // 4. Focal Reticle
      ctx.strokeStyle = '#7CE7E8';
      ctx.lineWidth = 1.5;

      // Small central reticle box
      const boxSize = 14;
      ctx.strokeRect(mousePixelX - boxSize / 2, mousePixelY - boxSize / 2, boxSize, boxSize);

      // Central dot
      ctx.fillStyle = '#7CE7E8';
      ctx.beginPath();
      ctx.arc(mousePixelX, mousePixelY, 2, 0, Math.PI * 2);
      ctx.fill();

      // 5. Architectural Coordinates HUD inside Canvas
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(240, 242, 244, 0.7)';
      const labelX = Math.min(width - 120, Math.max(12, mousePixelX + 14));
      const labelY = Math.min(height - 20, Math.max(24, mousePixelY - 14));
      ctx.fillText(`X:${Math.round(mousePixelX)} Y:${Math.round(mousePixelY)}`, labelX, labelY);
      ctx.fillStyle = 'rgba(124, 231, 232, 0.8)';
      ctx.fillText(`SYS.01 // 40.49°N 68.78°E`, labelX, labelY + 13);

      // Corner technical markers
      ctx.fillStyle = 'rgba(240, 242, 244, 0.3)';
      ctx.fillText('SYS.REF.01/LAT', 14, 20);
      ctx.fillText('LOC: GULISTAN, UZ', 14, 34);
      ctx.fillText('STATUS: ONLINE', width - 110, 20);
      ctx.fillText('FREQ: 60Hz', width - 110, 34);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [showRings]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        maxHeight: '520px',
        background: 'var(--bg-surface-1)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '2px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.45)'
      }}
      aria-label="Interactive System 01 Coordinate Canvas"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          cursor: 'crosshair'
        }}
      />

      {/* Interactive Controls Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none',
          gap: '8px',
          flexWrap: 'wrap'
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-secondary)',
            background: 'rgba(11, 13, 16, 0.85)',
            padding: '4px 8px',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span className="pulse-indicator" style={{ width: '5px', height: '5px' }} />
          <span>{t.statusActive}</span>
        </div>

        <button
          type="button"
          onClick={() => setShowRings(!showRings)}
          className="mono"
          style={{
            pointerEvents: 'auto',
            fontSize: '0.70rem',
            color: showRings ? 'var(--accent-cyan)' : 'var(--text-muted)',
            background: 'rgba(11, 13, 16, 0.85)',
            padding: '4px 10px',
            border: `1px solid ${showRings ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
            borderRadius: '2px',
            transition: 'all 0.2s ease'
          }}
          title={t.toggleGrid}
        >
          {showRings ? 'CALIBRATION [ON]' : 'CALIBRATION [OFF]'}
        </button>
      </div>

      {/* Top Coordinate Readout Tag */}
      <div
        className="mono"
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          fontSize: '0.72rem',
          color: 'var(--accent-cyan)',
          background: 'rgba(11, 13, 16, 0.75)',
          padding: '3px 8px',
          border: '1px solid var(--border-subtle)',
          borderRadius: '2px',
          pointerEvents: 'none'
        }}
      >
        Δ {coords.normX} / {coords.normY}
      </div>
    </div>
  );
};
