'use client';
import { useEffect, useRef } from 'react';

export default function NeuralBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const parent = canvas.parentElement;

        const resize = () => {
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const NODE_COUNT = 42;
        const nodes = Array.from({ length: NODE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.8 + 1.4,
            pulse: Math.random() * Math.PI * 12,
            active: Math.random() > 0.7,
        }));

        let raf;
        const loop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const t = Date.now() / 1000;

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(125,211,252,${(1 - dist / 140) * 0.18})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            for (const n of nodes) {
                const p = 0.7 + 0.3 * Math.sin(t * 1.4 + n.pulse);
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r * p, 0, Math.PI * 2);
                ctx.fillStyle = n.active ? `rgba(74,222,128,0.75)` : `rgba(227, 255, 11, 0.99)`;
                ctx.fill();
                if (n.active) {
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, n.r * p * 2.8, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(30, 227, 102, 0.06)';
                    ctx.fill();
                }
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
            }

            raf = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className='w-full h-full absolute inset-0 pointer-events-none'
        />
    );
}