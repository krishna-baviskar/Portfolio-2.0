"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: currentMount, 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    // Particle System
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 50;

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i] = 0.66; colors[i + 1] = 0.33; colors[i + 2] = 1; // Purple
      } else if (colorChoice < 0.66) {
        colors[i] = 0.93; colors[i + 1] = 0.29; colors[i + 2] = 0.58; // Pink
      } else {
        colors[i] = 0.02; colors[i + 1] = 0.71; colors[i + 2] = 0.83; // Cyan
      }
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Rotating Geometric Shapes
    const geometries = [
      new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16),
      new THREE.OctahedronGeometry(0.7),
      new THREE.IcosahedronGeometry(0.6)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0xec4899, wireframe: true, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.3 })
    ];

    const meshes: THREE.Mesh[] = [];
    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      mesh.position.set((index - 1) * 3, Math.sin(index) * 2, -2);
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Animated Lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineCount = 50;
    
    for (let i = 0; i < lineCount; i++) {
      linePositions.push(
        (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20
      );
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.2 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      particleSystem.rotation.y += 0.001;
      particleSystem.rotation.x += 0.0005;

      const positions = particleSystem.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.02;
        if (positions[i] < -25) {
          positions[i] = 25;
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01 * (index + 1);
        mesh.rotation.y += 0.01 * (index + 1);
        mesh.position.y = Math.sin(Date.now() * 0.001 + index) * 2;
      });

      lines.rotation.y += 0.0005;
      lines.rotation.x += 0.0003;

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometries.forEach(g => g.dispose());
      materials.forEach(m => m.dispose());
      particles.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return <canvas ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" style={{ pointerEvents: 'none' }} />;
};

export default ThreeCanvas;
