
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
    camera.position.z = 10;

    // Lights
    scene.add(new THREE.AmbientLight(0x404040, 2));
    const pointLight1 = new THREE.PointLight(0xa855f7, 1.5, 40);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xec4899, 1.5, 40);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);
    const pointLight3 = new THREE.PointLight(0x06b6d4, 1.5, 40);
    pointLight3.position.set(0, 0, 15);
    scene.add(pointLight3);

    // Particle System - Code Rain Effect
    const particleCount = 10000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);

    const fallArea = { x: 30, y: 40, z: 30 };

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * fallArea.x; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * fallArea.y; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * fallArea.z; // z

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.66; colors[i * 3 + 1] = 0.33; colors[i * 3 + 2] = 1; // Purple
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.93; colors[i * 3 + 1] = 0.29; colors[i * 3 + 2] = 0.58; // Pink
      } else {
        colors[i * 3] = 0.02; colors[i * 3 + 1] = 0.71; colors[i * 3 + 2] = 0.83; // Cyan
      }

      velocities[i] = 0.1 + Math.random() * 0.2;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2);
      mouseY = (event.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      // Animate particles falling
      const positions = particleSystem.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] -= velocities[i];
        if (positions[i * 3 + 1] < -fallArea.y / 2) {
          positions[i * 3 + 1] = fallArea.y / 2;
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      pointLight1.position.x = Math.sin(elapsedTime * 0.5) * 20;
      pointLight1.position.y = Math.cos(elapsedTime * 0.3) * 20;
      pointLight2.position.x = Math.cos(elapsedTime * 0.2) * 20;
      pointLight2.position.y = Math.sin(elapsedTime * 0.4) * 20;
      
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
      scene.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      particles.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return <canvas ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" style={{ pointerEvents: 'none' }} />;
};

export default ThreeCanvas;
