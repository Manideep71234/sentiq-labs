import React, { useRef, useEffect } from 'react';
import './CanvasBackground.css';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  originalVx: number;
  originalVy: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseTrail: {x: number, y: number, vx: number, vy: number, life: number}[] = [];
    const particleCount = 120; // Slightly more particles since they are smaller
    const connectionDistance = 100; // Shorter lines
    const mouseRadius = 150;

    let mouse = {
      x: -1000,
      y: -1000,
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 1.5 + 0.4; // Slightly larger for better visibility
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          originalVx: (Math.random() - 0.5) * 0.4,
          originalVy: (Math.random() - 0.5) * 0.4,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.001 + Math.random() * 0.002, 
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isLight = document.documentElement.classList.contains('light');
      const rgb = isLight ? '109, 40, 217' : '168, 85, 247'; // Darker purple for light mode

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Interaction with mouse
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distanceMouse < mouseRadius) {
          // Repel away from mouse slowly
          const forceDirectionX = dxMouse / distanceMouse;
          const forceDirectionY = dyMouse / distanceMouse;
          const force = (mouseRadius - distanceMouse) / mouseRadius;
          
          p.vx -= forceDirectionX * force * 0.01;
          p.vy -= forceDirectionY * force * 0.01;
        } else {
          // Return to normal drift
          p.vx += (p.originalVx - p.vx) * 0.05;
          p.vy += (p.originalVy - p.vy) * 0.05;
        }
        
        // Apply friction limits
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 2;
        if (speed > maxSpeed) {
           p.vx = (p.vx / speed) * maxSpeed;
           p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1;
          p.originalVx *= -1;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
          p.originalVy *= -1;
          p.y = Math.max(0, Math.min(canvas.height, p.y));
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        const time = Date.now();
        const baseOpacity = 0.3 + (Math.sin(time * p.twinkleSpeed + p.twinklePhase) * 0.5 + 0.5) * 0.5;
        const opacity = distanceMouse < mouseRadius ? baseOpacity + 0.4 : baseOpacity;
        
        ctx.fillStyle = `rgba(${rgb}, ${opacity})`;
        ctx.fill();

        for (let j = i; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            
            const dxMouse1 = mouse.x - p.x;
            const dyMouse1 = mouse.y - p.y;
            const dxMouse2 = mouse.x - p2.x;
            const dyMouse2 = mouse.y - p2.y;
            const d1 = Math.sqrt(dxMouse1 * dxMouse1 + dyMouse1 * dyMouse1);
            const d2 = Math.sqrt(dxMouse2 * dxMouse2 + dyMouse2 * dyMouse2);
            
            let lineOpacity = 1 - (distance / connectionDistance);
            
            if (d1 < mouseRadius || d2 < mouseRadius) {
                ctx.strokeStyle = `rgba(${rgb}, ${lineOpacity * 0.5})`;
                ctx.lineWidth = 0.8;
            } else {
                ctx.strokeStyle = `rgba(${rgb}, ${lineOpacity * 0.1})`;
                ctx.lineWidth = 0.4;
            }
            
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Process and draw sparkle trail
      for (let i = mouseTrail.length - 1; i >= 0; i--) {
        const p = mouseTrail[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;

        if (p.life <= 0) {
          mouseTrail.splice(i, 1);
          continue;
        }

        const progress = p.life / 30;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, progress * 2, 0, Math.PI * 2);
        // Inner bright spark - slightly lighter version of rgb
        ctx.fillStyle = `rgba(${rgb}, ${progress})`; 
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, progress * 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${progress * 0.4})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spawn 2-3 sparkles per movement
      const sparkCount = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < sparkCount; i++) {
        mouseTrail.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: Math.random() * 1.5 - 0.5, // slight downward drift
          life: 20 + Math.random() * 10
        });
      }
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="canvas-background" />
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
    </>
  );
};

export default CanvasBackground;
