import React, {
	useRef,
	useEffect,
	useCallback,
	useMemo,
	CSSProperties
} from 'react';
import { gsap } from 'gsap';
import './DotGrid.css';

type Dot = {
	cx: number;
	cy: number;
	xOffset: number;
	yOffset: number;
	_inertiaApplied: boolean;
};

type PointerState = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	speed: number;
	lastTime: number;
	lastX: number;
	lastY: number;
};

interface DotGridProps {
	dotSize?: number;
	gap?: number;
	baseColor?: string;
	activeColor?: string;
	proximity?: number;
	speedTrigger?: number;
	shockRadius?: number;    // kept for API, not strictly used in new click logic
	shockStrength?: number;
	maxSpeed?: number;
	resistance?: number;     // kept for API parity, not used in this simplified version
	returnDuration?: number;
	className?: string;
	style?: CSSProperties;
}

const throttle = <T extends (...args: any[]) => void>(
	func: T,
	limit: number
) => {
	let lastCall = 0;
	return (...args: Parameters<T>) => {
		const now = performance.now();
		if (now - lastCall >= limit) {
			lastCall = now;
			func(...args);
		}
	};
};

const hexToRgb = (hex: string) => {
	const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
	if (!m) return { r: 0, g: 0, b: 0 };
	return {
		r: parseInt(m[1], 16),
		g: parseInt(m[2], 16),
		b: parseInt(m[3], 16)
	};
};

const DotGrid: React.FC<DotGridProps> = ({
	dotSize = 16,
	gap = 32,
	baseColor = '#5227FF',
	activeColor = '#5227FF',
	proximity = 150,
	speedTrigger = 140,
	shockRadius = 250,       // no longer the main limiter, we use grid diagonal
	shockStrength = 5,
	maxSpeed = 5000,
	// resistance = 750,
	returnDuration = 1.5,
	className = '',
	style
}) => {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const dotsRef = useRef<Dot[]>([]);
	const pointerRef = useRef<PointerState>({
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		speed: 0,
		lastTime: 0,
		lastX: 0,
		lastY: 0
	});

	const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
	const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

	const circlePath = useMemo(() => {
		if (typeof window === 'undefined' || !(window as any).Path2D) return null;
		const p = new Path2D();
		p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
		return p;
	}, [dotSize]);

	// Build the grid of dots
	const buildGrid = useCallback(() => {
		const wrap = wrapperRef.current;
		const canvas = canvasRef.current;
		if (!wrap || !canvas) return;

		const { width, height } = wrap.getBoundingClientRect();
		const dpr = window.devicePixelRatio || 1;

		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		const ctx = canvas.getContext('2d');
		if (ctx) ctx.scale(dpr, dpr);

		const cols = Math.floor((width + gap) / (dotSize + gap));
		const rows = Math.floor((height + gap) / (dotSize + gap));
		const cell = dotSize + gap;

		const gridW = cell * cols - gap;
		const gridH = cell * rows - gap;

		const extraX = width - gridW;
		const extraY = height - gridH;

		const startX = extraX / 2 + dotSize / 2;
		const startY = extraY / 2 + dotSize / 2;

		const dots: Dot[] = [];
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const cx = startX + x * cell;
				const cy = startY + y * cell;
				dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
			}
		}

		dotsRef.current = dots;
	}, [dotSize, gap]);

	// Drawing loop
	useEffect(() => {
		if (!circlePath) return;

		let rafId: number;
		const proxSq = proximity * proximity;

		const draw = () => {
			const canvas = canvasRef.current;
			if (!canvas) return;
			const ctx = canvas.getContext('2d');
			if (!ctx) return;

			const { width, height } = canvas;
			ctx.clearRect(0, 0, width, height);

			const { x: px, y: py } = pointerRef.current;

			for (const dot of dotsRef.current) {
				const ox = dot.cx + dot.xOffset;
				const oy = dot.cy + dot.yOffset;
				const dx = dot.cx - px;
				const dy = dot.cy - py;
				const dsq = dx * dx + dy * dy;

				let style = baseColor;
				if (dsq <= proxSq) {
					const dist = Math.sqrt(dsq);
					const t = 1 - dist / proximity;
					const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
					const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
					const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
					style = `rgb(${r},${g},${b})`;
				}

				ctx.save();
				ctx.translate(ox, oy);
				ctx.fillStyle = style;
				ctx.fill(circlePath);
				ctx.restore();
			}

			rafId = requestAnimationFrame(draw);
		};

		draw();
		return () => cancelAnimationFrame(rafId);
	}, [proximity, baseColor, baseRgb, activeRgb, circlePath]);

	// Build grid initially + on resize
	useEffect(() => {
		buildGrid();

		let ro: ResizeObserver | null = null;
		let handleResize: (() => void) | null = null;

		if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
			ro = new ResizeObserver(() => {
				buildGrid();
			});
			if (wrapperRef.current) {
				ro.observe(wrapperRef.current);
			}
		} else if (typeof window !== 'undefined') {
			handleResize = () => {
				buildGrid();
			};
			(window as any).addEventListener('resize', handleResize as any);
		}

		return () => {
			if (ro) ro.disconnect();
			if (handleResize && typeof window !== 'undefined') {
				(window as any).removeEventListener('resize', handleResize as any);
			}
		};
	}, [buildGrid]);

	// Mouse interaction
	useEffect(() => {
		const onMove = (e: MouseEvent) => {
			const now = performance.now();
			const pr = pointerRef.current;
			const dt = pr.lastTime ? now - pr.lastTime : 16;

			const dx = e.clientX - pr.lastX;
			const dy = e.clientY - pr.lastY;

			let vx = (dx / dt) * 1000;
			let vy = (dy / dt) * 1000;
			let speed = Math.hypot(vx, vy);

			if (speed > maxSpeed) {
				const scale = maxSpeed / speed;
				vx *= scale;
				vy *= scale;
				speed = maxSpeed;
			}

			pr.lastTime = now;
			pr.lastX = e.clientX;
			pr.lastY = e.clientY;
			pr.vx = vx;
			pr.vy = vy;
			pr.speed = speed;

			const wrap = wrapperRef.current;
			if (!wrap) return;

			const rect = wrap.getBoundingClientRect();
			pr.x = e.clientX - rect.left;
			pr.y = e.clientY - rect.top;

			// Swipe-based inertia (kept as-is, but you can lower speedTrigger for more sensitivity)
			for (const dot of dotsRef.current) {
				const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
				if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
					dot._inertiaApplied = true;
					gsap.killTweensOf(dot);

					const pushX = (dot.cx - pr.x) * 0.18 + vx * 0.0010;
					const pushY = (dot.cy - pr.y) * 0.18 + vy * 0.0010;

					gsap.to(dot, {
						xOffset: pushX,
						yOffset: pushY,
						duration: 0.35,
						ease: 'power3.out',
						onComplete: () => {
							gsap.to(dot, {
								xOffset: 0,
								yOffset: 0,
								duration: returnDuration,
								ease: 'elastic.out(1, 0.9)',
								onComplete: () => {
									dot._inertiaApplied = false;
								}
							});
						}
					});
				}
			}
		};

		const onClick = (e: MouseEvent) => {
			const wrap = wrapperRef.current;
			if (!wrap) return;

			const rect = wrap.getBoundingClientRect();
			const cx = e.clientX - rect.left;
			const cy = e.clientY - rect.top;

			// 🔥 Use the full grid diagonal as "max radius" so every click
			// produces a smooth, global wave across the entire page.
			const maxDist = Math.hypot(rect.width, rect.height);

			for (const dot of dotsRef.current) {
				const dist = Math.hypot(dot.cx - cx, dot.cy - cy);

				// Distance-based falloff: 1.0 at center → 0 at farthest point
				const norm = 1 - dist / maxDist;
				if (norm <= 0) continue;

				const falloff = Math.pow(norm, 1.35); // smooth, a bit eased

				if (!dot._inertiaApplied) {
					dot._inertiaApplied = true;
					gsap.killTweensOf(dot);

					const pushX = (dot.cx - cx) * (shockStrength * 0.28) * falloff;
					const pushY = (dot.cy - cy) * (shockStrength * 0.28) * falloff;

					gsap.to(dot, {
						xOffset: pushX,
						yOffset: pushY,
						duration: 0.45,
						ease: 'power3.out',
						onComplete: () => {
							gsap.to(dot, {
								xOffset: 0,
								yOffset: 0,
								duration: returnDuration + 0.25,
								ease: 'elastic.out(1, 0.9)',
								onComplete: () => {
									dot._inertiaApplied = false;
								}
							});
						}
					});
				}
			}
		};

		const throttledMove: (e: MouseEvent) => void = throttle(onMove, 16);

		window.addEventListener('mousemove', throttledMove, { passive: true });
		window.addEventListener('click', onClick);

		return () => {
			window.removeEventListener('mousemove', throttledMove);
			window.removeEventListener('click', onClick);
		};
	}, [
		maxSpeed,
		speedTrigger,
		proximity,
		shockStrength,
		returnDuration
	]);

	return (
		<section className={`dot-grid ${className}`} style={style}>
			<div ref={wrapperRef} className="dot-grid__wrap">
				<canvas ref={canvasRef} className="dot-grid__canvas" />
			</div>
		</section>
	);
};

export default DotGrid;