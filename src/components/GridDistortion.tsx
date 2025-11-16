import React, { useRef, useEffect, CSSProperties } from 'react';
import * as THREE from 'three';
import './GridDistortion.css';

interface GridDistortionProps {
	grid?: number;
	mouse?: number;
	strength?: number;
	relaxation?: number;
	imageSrc: string;
	className?: string;
	style?: CSSProperties;
}

const vertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const fragmentShader = `
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;
uniform vec4 resolution;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 offset = texture2D(uDataTexture, vUv);
  // STRONGER OFFSET so you definitely see it
  gl_FragColor = texture2D(uTexture, uv - 0.10 * offset.rg);
}`;

const GridDistortion: React.FC<GridDistortionProps> = ({
	grid = 15,
	mouse = 0.2,
	strength = 0.4,
	relaxation = 0.94,
	imageSrc,
	className = '',
	style
}) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const sceneRef = useRef<THREE.Scene | null>(null);
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
	const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
	const planeRef = useRef<THREE.Mesh | null>(null);
	const animationIdRef = useRef<number | null>(null);
	const resizeObserverRef = useRef<ResizeObserver | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Scene + renderer
		const scene = new THREE.Scene();
		sceneRef.current = scene;

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
			powerPreference: 'high-performance'
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);
		rendererRef.current = renderer;

		container.innerHTML = '';
		container.appendChild(renderer.domElement);

		// Camera
		const camera = new THREE.OrthographicCamera(0, 0, 0, 0, -1000, 1000);
		camera.position.z = 2;
		cameraRef.current = camera;

		// Uniforms
		const uniforms = {
			time: { value: 0 },
			resolution: { value: new THREE.Vector4() },
			uTexture: { value: null as THREE.Texture | null },
			uDataTexture: { value: null as THREE.DataTexture | null }
		};

		const size = grid;
		const data = new Float32Array(4 * size * size);

		// Initial noise so it's never perfectly flat
		for (let i = 0; i < size * size; i++) {
			data[i * 4] = (Math.random() - 0.5) * 30;
			data[i * 4 + 1] = (Math.random() - 0.5) * 30;
		}

		const dataTexture = new THREE.DataTexture(
			data,
			size,
			size,
			THREE.RGBAFormat,
			THREE.FloatType
		);
		dataTexture.needsUpdate = true;
		uniforms.uDataTexture.value = dataTexture;

		const material = new THREE.ShaderMaterial({
			side: THREE.DoubleSide,
			uniforms,
			vertexShader,
			fragmentShader,
			transparent: true
		});

		const geometry = new THREE.PlaneGeometry(1, 1, size - 1, size - 1);
		const plane = new THREE.Mesh(geometry, material);
		planeRef.current = plane;
		scene.add(plane);

		// Resize handling
		const handleResize = () => {
			if (!container || !renderer || !camera) return;

			const rect = container.getBoundingClientRect();
			const width = rect.width;
			const height = rect.height;

			if (width === 0 || height === 0) return;

			const containerAspect = width / height;

			renderer.setSize(width, height);

			if (plane) {
				plane.scale.set(containerAspect, 1, 1);
			}

			const frustumHeight = 1;
			const frustumWidth = frustumHeight * containerAspect;
			camera.left = -frustumWidth / 2;
			camera.right = frustumWidth / 2;
			camera.top = frustumHeight / 2;
			camera.bottom = -frustumHeight / 2;
			camera.updateProjectionMatrix();

			uniforms.resolution.value.set(width, height, 1, 1);
		};

		// Texture
		const textureLoader = new THREE.TextureLoader();
		textureLoader.load(imageSrc, texture => {
			texture.minFilter = THREE.LinearFilter;
			texture.magFilter = THREE.LinearFilter;
			texture.wrapS = THREE.ClampToEdgeWrapping;
			texture.wrapT = THREE.ClampToEdgeWrapping;
			uniforms.uTexture.value = texture;
			handleResize();
		});

		// Observe & listen for resize
		if ('ResizeObserver' in window) {
			const resizeObserver = new ResizeObserver(() => {
				handleResize();
			});
			resizeObserver.observe(container);
			resizeObserverRef.current = resizeObserver;
		} else {
			(window as any).addEventListener('resize', handleResize as any);
		}

		// Mouse state (NOW LISTENING ON WINDOW, NOT JUST CONTAINER)
		const mouseState = {
			x: 0,
			y: 0,
			prevX: 0,
			prevY: 0,
			vX: 0,
			vY: 0
		};

		const handleMouseMove = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();
			// Normalize so 0..1 inside the container
			const x = (e.clientX - rect.left) / rect.width;
			const y = 1 - (e.clientY - rect.top) / rect.height;

			mouseState.vX = x - mouseState.prevX;
			mouseState.vY = y - mouseState.prevY;
			mouseState.x = x;
			mouseState.y = y;
			mouseState.prevX = x;
			mouseState.prevY = y;
		};

		const handleMouseLeave = () => {
			mouseState.x = 0;
			mouseState.y = 0;
			mouseState.prevX = 0;
			mouseState.prevY = 0;
			mouseState.vX = 0;
			mouseState.vY = 0;
			dataTexture.needsUpdate = true;
		};

		// 👉 Use window events so effect reacts even when hovering text overlay
		window.addEventListener('mousemove', handleMouseMove as any);
		window.addEventListener('mouseleave', handleMouseLeave as any);

		handleResize();

		// Animation loop
		const animate = () => {
			animationIdRef.current = requestAnimationFrame(animate);

			if (!renderer || !scene || !camera) return;

			uniforms.time.value += 0.03;

			const dataArr = dataTexture.image.data as Float32Array;

			// Slow relaxation so ripples stay visible
			for (let i = 0; i < size * size; i++) {
				dataArr[i * 4] *= relaxation;
				dataArr[i * 4 + 1] *= relaxation;
			}

			const gridMouseX = size * mouseState.x;
			const gridMouseY = size * mouseState.y;
			const maxDist = size * mouse;

			for (let i = 0; i < size; i++) {
				for (let j = 0; j < size; j++) {
					const distSq =
						Math.pow(gridMouseX - i, 2) + Math.pow(gridMouseY - j, 2);

					if (distSq < maxDist * maxDist && distSq > 0.0001) {
						const index = 4 * (i + size * j);
						const power = Math.min(maxDist / Math.sqrt(distSq), 10);
						// 🚀 Push MUCH stronger so it’s obviously visible
						dataArr[index] += strength * 400 * mouseState.vX * power;
						dataArr[index + 1] -= strength * 400 * mouseState.vY * power;
					}
				}
			}

			dataTexture.needsUpdate = true;
			renderer.render(scene, camera);
		};

		animate();

		return () => {
			if (animationIdRef.current) {
				cancelAnimationFrame(animationIdRef.current);
			}

			if (resizeObserverRef.current) {
				resizeObserverRef.current.disconnect();
			} else {
				(window as any).removeEventListener('resize', handleResize as any);
			}

			window.removeEventListener('mousemove', handleMouseMove as any);
			window.removeEventListener('mouseleave', handleMouseLeave as any);

			if (renderer) {
				renderer.dispose();
				if (container.contains(renderer.domElement)) {
					container.removeChild(renderer.domElement);
				}
			}

			geometry.dispose();
			material.dispose();
			dataTexture.dispose();
			if (uniforms.uTexture.value) {
				uniforms.uTexture.value.dispose();
			}

			sceneRef.current = null;
			rendererRef.current = null;
			cameraRef.current = null;
			planeRef.current = null;
		};
	}, [grid, mouse, strength, relaxation, imageSrc]);

	return (
		<div
			ref={containerRef}
			className={`distortion-container ${className}`}
			style={{
				width: '100%',
				height: '100%',
				minWidth: 0,
				minHeight: 0,
				...style
			}}
		/>
	);
};

export default GridDistortion;